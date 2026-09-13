import "server-only";

import { cookies } from "next/headers";
import { VARIANT_COOKIE, parseVariant, type Variant } from "@/lib/variant";

/**
 * Reads the visitor's chosen design from a cookie so the server renders the
 * correct variant on the first paint — no flash, no hydration mismatch, and
 * no need to ship all three layouts to the browser.
 *
 * Reading cookies opts this route into dynamic rendering, which is the
 * deliberate trade for switching entire layouts per visitor.
 */
export async function getVariant(): Promise<Variant> {
  const store = await cookies();
  return parseVariant(store.get(VARIANT_COOKIE)?.value);
}
