"use client";

import * as React from "react";

/** Cycles through phrases with a type/erase effect. Falls back to the first
 *  phrase (static) for users who prefer reduced motion. */
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
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (reduced) return;
    const current = phrases[index % phrases.length];

    if (!erasing && text === current) {
      const t = setTimeout(() => setErasing(true), holdMs);
      return () => clearTimeout(t);
    }
    if (erasing && text === "") {
      setErasing(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          erasing ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        ),
      erasing ? eraseMs : typeMs,
    );
    return () => clearTimeout(t);
  }, [text, erasing, index, phrases, reduced, typeMs, eraseMs, holdMs]);

  return (
    <span className={className}>
      {/* screen readers get the full list, not the animation */}
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden>
        {reduced ? phrases[0] : text}
        {!reduced && (
          <span className="ml-0.5 inline-block animate-blink text-primary">
            ▍
          </span>
        )}
      </span>
    </span>
  );
}
