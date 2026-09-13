import "server-only";

import { contact } from "@/content/profile";

/**
 * Server-only configuration. The `server-only` import above makes the build
 * fail loudly if this module is ever pulled into a client bundle, which keeps
 * the API key from leaking to the browser.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim() ?? "";
const CONTACT_FROM = process.env.CONTACT_FROM?.trim();
const CONTACT_TO = process.env.CONTACT_TO?.trim();

export const serverEnv = {
  resendApiKey: RESEND_API_KEY,
  /** Must be a Resend-verified domain in production. */
  contactFrom: CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
  contactTo: CONTACT_TO || contact.email,
} as const;

/** The contact form degrades to a mailto: fallback when this is false. */
export const canSendMail = Boolean(serverEnv.resendApiKey);
