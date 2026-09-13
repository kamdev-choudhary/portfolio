"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { navigation } from "@/content/profile";

const SHORTCUTS: { keys: string[]; label: string }[] = [
  { keys: ["j"], label: "next section" },
  { keys: ["k"], label: "previous section" },
  { keys: ["g", "g"], label: "jump to top" },
  { keys: ["G"], label: "jump to bottom" },
  { keys: ["/"], label: "search (command palette)" },
  { keys: ["⌘", "K"], label: "command palette" },
  { keys: ["t"], label: "toggle theme" },
  { keys: ["r"], label: "open resume" },
  { keys: ["?"], label: "this help" },
  { keys: ["Esc"], label: "close" },
];

/** True when the user is typing, so single-letter bindings must not fire. */
function isTyping(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    el.isContentEditable
  );
}

export function KeyboardNav({
  onPalette,
  onTheme,
  onResume,
}: {
  onPalette: () => void;
  onTheme: () => void;
  onResume: () => void;
}) {
  const [helpOpen, setHelpOpen] = React.useState(false);
  const lastKey = React.useRef<{ key: string; at: number }>({ key: "", at: 0 });

  React.useEffect(() => {
    const sectionIds = () =>
      navigation
        .map((n) => document.getElementById(n.id))
        .filter((el): el is HTMLElement => Boolean(el));

    const HEADER_OFFSET = 80;

    const move = (dir: 1 | -1) => {
      const els = sectionIds();
      if (!els.length) return;

      // offsetTop is relative to the offset parent, which nested positioned
      // wrappers make wrong — measure against the document instead.
      const tops = els.map(
        (el) => el.getBoundingClientRect().top + window.scrollY,
      );
      const probe = window.scrollY + HEADER_OFFSET + 8;

      let current = 0;
      for (let i = 0; i < tops.length; i++) {
        if (tops[i] <= probe) current = i;
      }

      const target = Math.min(els.length - 1, Math.max(0, current + dir));
      window.scrollTo({
        top: Math.max(0, tops[target] - HEADER_OFFSET),
        behavior: "smooth",
      });
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTyping(e.target)) return;

      switch (e.key) {
        case "j":
          e.preventDefault();
          move(1);
          break;
        case "k":
          e.preventDefault();
          move(-1);
          break;
        case "G":
          e.preventDefault();
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          break;
        case "g": {
          const now = Date.now();
          if (lastKey.current.key === "g" && now - lastKey.current.at < 600) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            lastKey.current = { key: "", at: 0 };
            return;
          }
          lastKey.current = { key: "g", at: now };
          return;
        }
        case "/":
          e.preventDefault();
          onPalette();
          break;
        case "t":
          e.preventDefault();
          onTheme();
          break;
        case "r":
          e.preventDefault();
          onResume();
          break;
        case "?":
          e.preventDefault();
          setHelpOpen((o) => !o);
          break;
        default:
          return;
      }
      lastKey.current = { key: "", at: 0 };
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onPalette, onTheme, onResume]);

  return (
    <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-mono text-base">
            <span className="text-primary">$</span> keybindings
          </DialogTitle>
          <DialogDescription className="font-mono text-xs">
            Vim-style navigation. Ignored while typing.
          </DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col gap-1.5">
          {SHORTCUTS.map((s) => (
            <li
              key={s.label}
              className="flex items-center justify-between gap-4 font-mono text-sm"
            >
              <span className="text-muted-foreground">{s.label}</span>
              <span className="flex shrink-0 gap-1">
                {s.keys.map((k, i) => (
                  <kbd
                    key={i}
                    className="inline-flex min-w-6 justify-center rounded border bg-muted px-1.5 py-0.5 text-[11px]"
                  >
                    {k}
                  </kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
