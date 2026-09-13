import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function Section({
  id,
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-22 py-14 sm:py-18 lg:py-24", className)}
      {...props}
    >
      <Container className="reveal">{children}</Container>
    </section>
  );
}

/** `$ command --flag` heading used to open every section. */
export function Prompt({
  command,
  className,
  as: Tag = "h2",
}: {
  command: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  return (
    <Tag
      className={cn(
        "flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-sm sm:text-base",
        className,
      )}
    >
      <span className="text-primary select-none" aria-hidden>
        $
      </span>
      <span className="text-foreground break-all">{command}</span>
    </Tag>
  );
}

export function SectionHeading({
  command,
  title,
  description,
}: {
  command: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-8 sm:mb-10">
      {/* the shell prompt and # prefix are hidden in the clean variant (CSS) */}
      <Prompt
        command={command}
        as="p"
        className="section-cmd text-muted-foreground"
      />
      {/* clean variant shows a quiet label where the shell prompt was */}
      <p className="section-eyebrow hidden text-xs font-medium tracking-[0.14em] text-primary uppercase">
        {title}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        <span className="section-hash text-primary" aria-hidden>
          #{" "}
        </span>
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}

/** A framed pane with macOS-style window chrome. */
export function TerminalWindow({
  title,
  children,
  className,
  bodyClassName,
  actions,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-card shadow-sm print-plain",
        className,
      )}
    >
      <div className="term-chrome flex items-center gap-2 border-b bg-muted/50 px-3 py-2 sm:px-4">
        <span className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-term-amber/70" />
          <span className="size-2.5 rounded-full bg-term-green/70" />
        </span>
        <span className="min-w-0 flex-1 truncate text-center font-mono text-[11px] text-muted-foreground sm:text-xs">
          {title}
        </span>
        <span className="flex shrink-0 items-center gap-1">{actions}</span>
      </div>
      <div className={cn("p-4 sm:p-5 lg:p-6", bodyClassName)}>{children}</div>
    </div>
  );
}

/** Inline `key: value` row, wraps safely on narrow screens. */
export function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
      <dt className="shrink-0 font-mono text-xs text-muted-foreground sm:w-28 sm:text-sm">
        {label}
      </dt>
      <dd className="min-w-0 font-sans text-sm break-words">{children}</dd>
    </div>
  );
}
