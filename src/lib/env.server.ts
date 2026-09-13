import "server-only";

import { contact } from "@/content/profile";

/**
 * Server-only configuration. The `server-only` import makes the build fail
 * loudly if this module is ever pulled into a client bundle, which keeps the
 * SMTP credentials out of the browser.
 */

function str(value: string | undefined): string {
  return value?.trim() ?? "";
}

const SMTP_HOST = str(process.env.SMTP_HOST);
const SMTP_PORT = Number(str(process.env.SMTP_PORT)) || 587;
const SMTP_USER = str(process.env.SMTP_USER);
const SMTP_PASS = str(process.env.SMTP_PASS);
const SMTP_FROM = str(process.env.SMTP_FROM);
const CONTACT_TO = str(process.env.CONTACT_TO);

export const smtp = {
  host: SMTP_HOST,
  port: SMTP_PORT,
  /** Port 465 is implicit TLS; 587 upgrades via STARTTLS. */
  secure: str(process.env.SMTP_SECURE) === "true" || SMTP_PORT === 465,
  user: SMTP_USER,
  pass: SMTP_PASS,
} as const;

export const mail = {
  /** Envelope sender. Gmail rewrites this to the authenticated account anyway. */
  from: SMTP_FROM || SMTP_USER,
  /** Where enquiries land. */
  to: CONTACT_TO || contact.email,
} as const;

/** The contact form degrades to a mailto: fallback when this is false. */
export const canSendMail = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);
