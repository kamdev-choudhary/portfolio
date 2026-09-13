import { ArrowUpRight, Award, Clock, Globe, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Section, SectionHeading } from "@/components/terminal";
import { certificates } from "@/content/profile";

export function Certificates() {
  return (
    <Section id="certificates" className="border-t bg-muted/20">
      <SectionHeading
        command="ls ~/certificates"
        title="Certificates"
        description="Courses and programs completed, with verification links."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((c) => (
          <article
            key={c.name}
            className="flex flex-col rounded-lg border bg-card p-5 transition-colors hover:border-primary/40 print-break"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/50">
                <Award className="size-4 text-primary" aria-hidden />
              </span>
              <Badge
                variant="outline"
                className="shrink-0 gap-1 rounded-md font-mono text-[10px] font-normal"
              >
                {c.mode === "Online" ? (
                  <Globe className="size-3" aria-hidden />
                ) : (
                  <MapPin className="size-3" aria-hidden />
                )}
                {c.mode}
              </Badge>
            </div>

            <h3 className="font-mono text-base font-semibold text-balance">
              {c.name}
            </h3>
            <p className="mt-1 font-sans text-sm text-muted-foreground text-pretty">
              {c.institute}
            </p>

            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 shrink-0" aria-hidden />
                {c.duration}
              </span>
              <span>{c.period}</span>
            </p>

            {c.skills.length ? (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <li key={s}>
                    <Badge
                      variant="secondary"
                      className="rounded-md font-mono text-[11px] font-normal"
                    >
                      {s}
                    </Badge>
                  </li>
                ))}
              </ul>
            ) : null}

            {c.notes.length ? (
              <ul className="mt-3 space-y-1.5">
                {c.notes.map((n, i) => (
                  <li
                    key={i}
                    className="flex gap-2 font-sans text-sm leading-relaxed text-muted-foreground text-pretty"
                  >
                    <span className="text-primary/60" aria-hidden>
                      &rsaquo;
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-auto pt-4">
              <Separator className="mb-3" />
              <ul className="space-y-1.5">
                {c.links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-start gap-1.5 font-mono text-xs text-primary underline-offset-4 hover:underline"
                    >
                      <span className="min-w-0 break-words">
                        {l.title ?? l.type}
                      </span>
                      <ArrowUpRight
                        className="mt-0.5 size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
