"use client";

import * as React from "react";
import { usePrefersReducedMotion } from "@/hooks/use-hydrated";

/**
 * Cycles through phrases with a type/erase effect.
 * Renders the first phrase statically when the user prefers reduced motion.
 */
export function TypingText({
  phrases,
  className,
  typeMs = 65,
  eraseMs = 30,
  holdMs = 1600,
}: {
  phrases: readonly string[];
  className?: string;
  typeMs?: number;
  eraseMs?: number;
  holdMs?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [erasing, setErasing] = React.useState(false);
  const reduced = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduced) return;

    const current = phrases[index % phrases.length];
    const fullyTyped = !erasing && text === current;
    const fullyErased = erasing && text === "";

    const delay = fullyTyped
      ? holdMs
      : fullyErased
        ? 0
        : erasing
          ? eraseMs
          : typeMs;

    // Every state change happens in the timer callback, never synchronously
    // in the effect body — that would cascade a render on each keystroke.
    const timer = setTimeout(() => {
      if (fullyTyped) {
        setErasing(true);
      } else if (fullyErased) {
        setErasing(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText((prev) =>
          erasing
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, erasing, index, phrases, reduced, typeMs, eraseMs, holdMs]);

  return (
    <span className={className}>
      {/* screen readers get the whole list rather than a moving target */}
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden>
        {reduced ? phrases[0] : text}
        {reduced ? null : (
          <span className="ml-0.5 inline-block animate-blink text-primary">
            ▍
          </span>
        )}
      </span>
    </span>
  );
}
