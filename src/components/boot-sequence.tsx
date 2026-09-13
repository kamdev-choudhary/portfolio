"use client";

import * as React from "react";
import { profile, projects } from "@/content/profile";
import { cn } from "@/lib/utils";

const STEPS: string[] = [
  "Mounting /dev/portfolio",
  "Starting theme-manager.service",
  `Loading profile: ${profile.name.toLowerCase().replace(/\s+/g, "-")}`,
  `Indexing ${projects.length} projects`,
  "Starting command-palette.socket",
  "Reached target Interactive",
];

const STEP_MS = 190;
const SESSION_KEY = "kd:booted";

/**
 * Plays once per browser session, then never again. Skipped entirely for
 * reduced-motion users and for anyone who has already seen it, so the hero
 * is the LCP element on every subsequent view.
 */
export function BootSequence({ onDone }: { onDone: () => void }) {
  const [step, setStep] = React.useState(0);
  const [leaving, setLeaving] = React.useState(false);
  const doneRef = React.useRef(onDone);
  React.useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  const finish = React.useCallback(() => {
    setLeaving(true);
    window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* private mode — just don't remember it */
      }
      doneRef.current();
    }, 320);
  }, []);

  // advance the log
  React.useEffect(() => {
    if (step >= STEPS.length) {
      const t = window.setTimeout(finish, 420);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setStep((s) => s + 1), STEP_MS);
    return () => window.clearTimeout(t);
  }, [step, finish]);

  // any key or click skips
  React.useEffect(() => {
    const skip = () => finish();
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("pointerdown", skip, { once: true });
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [finish]);

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center bg-background transition-opacity duration-300",
        leaving && "pointer-events-none opacity-0",
      )}
    >
      <div className="w-full max-w-2xl px-6 font-mono text-[12px] leading-relaxed sm:text-sm">
        {STEPS.slice(0, step).map((s) => (
          <p key={s} className="flex gap-2">
            <span className="text-muted-foreground">[</span>
            <span className="text-primary">OK</span>
            <span className="text-muted-foreground">]</span>
            <span>{s}</span>
          </p>
        ))}
        {step >= STEPS.length ? (
          <p className="mt-3">
            <span className="text-primary">{profile.handle}</span>
            <span className="text-muted-foreground">@portfolio:~$</span>
            <span className="ml-1 animate-blink text-primary">▍</span>
          </p>
        ) : null}
        <p className="mt-6 text-[11px] text-muted-foreground">
          press any key to skip
        </p>
      </div>
    </div>
  );
}

const noop = () => () => {};

function bootSnapshot(): boolean {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  } catch {
    // private mode or blocked storage — skip the animation rather than guess
    return false;
  }
}

/**
 * True only on the first view of a session, for users who want motion.
 * Reads via useSyncExternalStore so it never sets state during an effect and
 * always renders `false` on the server, keeping SSR markup stable.
 */
export function useShouldBoot(): boolean {
  return React.useSyncExternalStore(noop, bootSnapshot, () => false);
}
