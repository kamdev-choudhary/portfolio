"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  COMMAND_NAMES,
  Hint,
  completionFor,
  findCommand,
  type CommandContext,
} from "@/lib/terminal-commands";
import { profile } from "@/content/profile";

type Line = {
  kind: "input" | "output";
  node: React.ReactNode;
};

const PROMPT = (
  <>
    <span className="text-primary">{profile.handle}</span>
    <span className="text-muted-foreground">@portfolio</span>
    <span className="text-term-cyan">:~</span>
    <span className="text-muted-foreground">$</span>
  </>
);

export function TerminalRepl({ className }: { className?: string }) {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  const [lines, setLines] = React.useState<Line[]>([]);
  const [input, setInput] = React.useState("");
  const [history, setHistory] = React.useState<string[]>([]);
  const [histIndex, setHistIndex] = React.useState<number | null>(null);
  const [focused, setFocused] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const viewportRef = React.useRef<HTMLDivElement>(null);

  // lines are append-only and cleared wholesale, so the index is a stable key
  const push = React.useCallback((kind: Line["kind"], node: React.ReactNode) => {
    setLines((prev) => [...prev, { kind, node }]);
  }, []);

  const ctx = React.useMemo<CommandContext>(
    () => ({
      goto: (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      },
      setTheme: (t) => setTheme(t),
      currentTheme: () => resolvedTheme ?? "dark",
      navigate: (href) => router.push(href),
      openExternal: (url) => {
        if (url.startsWith("mailto:")) window.location.href = url;
        else window.open(url, "_blank", "noopener,noreferrer");
      },
      clear: () => setLines([]),
      history,
    }),
    [history, resolvedTheme, router, setTheme],
  );

  const submit = React.useCallback(
    (raw: string) => {
      const value = raw.trim();

      push(
        "input",
        <span>
          {PROMPT} <span className="ml-1">{value}</span>
        </span>,
      );

      if (!value) return;

      setHistory((h) => [...h, value]);
      setHistIndex(null);

      const [name, ...args] = value.split(/\s+/);
      const command = findCommand(name);

      if (!command) {
        push(
          "output",
          <span className="text-destructive">
            {name}: command not found — type <span className="text-primary">help</span>
          </span>,
        );
        return;
      }

      const result = command.run(args, ctx);
      if (result !== null && result !== undefined) push("output", result);
    },
    [ctx, push],
  );

  // keep the newest line in view
  React.useEffect(() => {
    const vp = viewportRef.current;
    if (vp) vp.scrollTop = vp.scrollHeight;
  }, [lines]);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      submit(input);
      setInput("");
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const { completed, options } = completionFor(input);
      setInput(completed);
      if (options.length > 1) {
        push(
          "output",
          <div className="flex flex-wrap gap-x-4">
            {options.map((o) => (
              <span key={o} className="text-term-cyan">
                {o}
              </span>
            ))}
          </div>,
        );
      }
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = histIndex === null ? history.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(next);
      setInput(history[next]);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex === null) return;
      const next = histIndex + 1;
      if (next >= history.length) {
        setHistIndex(null);
        setInput("");
      } else {
        setHistIndex(next);
        setInput(history[next]);
      }
      return;
    }

    if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
      return;
    }

    if (e.key === "c" && e.ctrlKey) {
      e.preventDefault();
      push("input", <span>{PROMPT} <span className="ml-1">{input}</span>^C</span>);
      setInput("");
      setHistIndex(null);
    }
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow",
        focused && "ring-1 ring-primary/40",
        className,
      )}
    >
      {/* chrome */}
      <div className="flex items-center gap-2 border-b bg-muted/50 px-3 py-2">
        <span className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-term-amber/70" />
          <span className="size-2.5 rounded-full bg-term-green/70" />
        </span>
        <span className="min-w-0 flex-1 truncate text-center font-mono text-[11px] text-muted-foreground sm:text-xs">
          {profile.handle}@portfolio: ~
        </span>
        <span className="hidden shrink-0 font-mono text-[10px] text-muted-foreground sm:inline">
          interactive
        </span>
      </div>

      {/* viewport — click anywhere to focus the prompt */}
      <div
        ref={viewportRef}
        onClick={() => inputRef.current?.focus()}
        className="h-[19rem] overflow-y-auto p-3 font-mono text-[12.5px] leading-relaxed sm:h-[21rem] sm:p-4 sm:text-[13.5px]"
      >
        <div className="mb-2 text-muted-foreground">
          <p>
            {profile.name} — {profile.title}
          </p>
          <p>
            Type <span className="text-primary">help</span> to begin, or{" "}
            <span className="text-primary">whoami</span>.
          </p>
        </div>

        <div aria-live="polite" data-terminal-output className="flex flex-col gap-1.5">
          {lines.map((l, i) => (
            <div key={i} className={cn(l.kind === "output" && "pb-0.5")}>
              {l.node}
            </div>
          ))}
        </div>

        {/* prompt row */}
        <div className="mt-1.5 flex items-baseline gap-1.5">
          <span className="shrink-0">{PROMPT}</span>
          <div className="relative min-w-0 flex-1">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              aria-label="Terminal input. Type help for a list of commands."
              data-terminal-input
              className="w-full bg-transparent font-mono caret-primary outline-none"
            />
            {!focused && input === "" ? (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
              >
                <span className="animate-blink text-primary">▍</span>
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* status bar */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t bg-muted/40 px-3 py-2 font-mono text-[10px] text-muted-foreground sm:text-[11px]">
        <Hint>Tab completes</Hint>
        <Hint>↑↓ history</Hint>
        <Hint>Ctrl+L clears</Hint>
        <span className="ml-auto hidden sm:inline">
          {COMMAND_NAMES.length} commands
        </span>
      </div>
    </div>
  );
}
