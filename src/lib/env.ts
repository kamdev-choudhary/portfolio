/**
 * Public configuration — safe to import from both client and server code.
 *
 * Next.js inlines `NEXT_PUBLIC_*` variables at build time, but only when they
 * appear as a complete static expression. Destructuring `process.env` or
 * indexing it dynamically silently yields `undefined` in the browser bundle,
 * so each variable is written out in full below.
 */

const DEFAULT_SITE_URL = "https://kamdevchoudhary.vercel.app";

function normalizeUrl(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, "");
  return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
}

/** Canonical origin, no trailing slash. Used for metadata, OG tags and JSON-LD. */
export const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL,
);

export const isProduction = process.env.NODE_ENV === "production";
