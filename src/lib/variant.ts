export const VARIANTS = ["minimal", "terminal", "terminal-pro"] as const;

export type Variant = (typeof VARIANTS)[number];

export const DEFAULT_VARIANT: Variant = "minimal";

export const VARIANT_COOKIE = "kd-variant";

export const VARIANT_META: Record<
  Variant,
  { label: string; tagline: string; hint: string }
> = {
  minimal: {
    label: "Clean",
    tagline: "Modern & minimal",
    hint: "Typography-led, generous whitespace",
  },
  terminal: {
    label: "Terminal",
    tagline: "Phosphor green",
    hint: "Monospace, window chrome, grid",
  },
  "terminal-pro": {
    label: "Shell",
    tagline: "Fully interactive",
    hint: "Boot screen, live REPL, git-log CV",
  },
};

export function isVariant(value: unknown): value is Variant {
  return (
    typeof value === "string" && (VARIANTS as readonly string[]).includes(value)
  );
}

export function parseVariant(value: string | undefined | null): Variant {
  return isVariant(value) ? value : DEFAULT_VARIANT;
}
