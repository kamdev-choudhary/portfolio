"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = React.ComponentProps<typeof Link>;

/**
 * next/link that routes inside document.startViewTransition where available,
 * so the CSS ::view-transition rules in globals.css get a chance to run.
 * Falls back to plain client-side routing everywhere else.
 */
export function TransitionLink({ href, onClick, ...props }: Props) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;

    // let the browser handle modified clicks and new-tab intents
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    if (typeof document.startViewTransition !== "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    e.preventDefault();
    document.startViewTransition(() => {
      router.push(href.toString());
    });
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
