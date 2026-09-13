import { NextResponse } from "next/server";
import { contact } from "@/content/profile";
import { canSendMail, serverEnv } from "@/lib/env.server";

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

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // silently accept bot submissions so they don't retry
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
    // No mail provider configured — tell the client to fall back to mailto.
    return NextResponse.json(
      { error: "mail_not_configured", fallback: contact.email },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverEnv.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: serverEnv.contactFrom,
      to: [serverEnv.contactTo],
      reply_to: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend send failed", res.status, detail);
    return NextResponse.json(
      { error: "send_failed", fallback: contact.email },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
