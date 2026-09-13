"use server";

import { cookies } from "next/headers";
import { VARIANT_COOKIE, isVariant } from "@/lib/variant";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Persists the visitor's chosen design so the server can render it directly. */
export async function setVariantCookie(next: string): Promise<void> {
  if (!isVariant(next)) return;

  const store = await cookies();
  store.set(VARIANT_COOKIE, next, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
    httpOnly: false,
  });
}
