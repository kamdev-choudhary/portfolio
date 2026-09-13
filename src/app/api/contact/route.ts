import { NextResponse } from "next/server";
import { contact } from "@/content/profile";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No mail provider configured — tell the client to fall back to mailto.
    return NextResponse.json(
      { error: "mail_not_configured", fallback: contact.email },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? contact.email],
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
