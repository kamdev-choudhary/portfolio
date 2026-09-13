"use client";

import * as React from "react";

const noop = () => () => {};

/**
 * True once the client has hydrated, false during SSR and the first render.
 * Uses useSyncExternalStore rather than a setState-in-effect, which avoids the
 * cascading render that `react-hooks/set-state-in-effect` warns about.
 */
export function useHydrated(): boolean {
  return React.useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** Tracks the user's reduced-motion preference; false on the server. */
export function usePrefersReducedMotion(): boolean {
  return React.useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}
