import { NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";
import { contact } from "@/content/profile";
import { canSendMail, mail, smtp } from "@/lib/env.server";

// nodemailer needs the Node runtime; it cannot run on the edge.
export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  /** honeypot — real users never fill this */
  website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asString(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

let transporter: Transporter | null = null;

/** Reused across invocations so warm lambdas skip the TLS handshake. */
function getTransporter() {
  transporter ??= nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: { user: smtp.user, pass: smtp.pass },
  });
  return transporter;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // accept bot submissions silently so they don't retry
  if (asString(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 100);
  const email = asString(body.email, 200);
  const message = asString(body.message, 5000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10)
    errors.message = "Please write at least 10 characters.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  if (!canSendMail) {
    // No SMTP configured — the client falls back to opening a mail client.
    return NextResponse.json(
      { error: "mail_not_configured", fallback: contact.email },
      { status: 503 },
    );
  }

  try {
    await getTransporter().sendMail({
      from: { name: `${name} (portfolio)`, address: mail.from },
      to: mail.to,
      replyTo: { name, address: email },
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html:
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
        `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>` +
        `<hr><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
  } catch (err) {
    console.error("SMTP send failed:", err);
    return NextResponse.json(
      { error: "send_failed", fallback: contact.email },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
