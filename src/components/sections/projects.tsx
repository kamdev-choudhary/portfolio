import Image from "next/image";
import { ArrowUpRight, ExternalLink, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/terminal";
import { TechBadge } from "@/components/tech-badge";
import { Brand } from "@/components/brand-icons";
import { projects, type Project } from "@/content/profile";

/** Keeps the badge row to a single line on most widths. */
const MAX_BADGES = 5;

export function Projects() {
  return (
    <Section id="projects" className="border-t">
      <SectionHeading
        command="ls -la ~/projects"
        title="Projects"
        description="Things I have designed, built and shipped."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const href = p.live ?? p.repo;
  const extra = p.tech.length - MAX_BADGES;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-primary/40 print-break">
      <div className="term-chrome flex items-center gap-2 border-b bg-muted/50 px-3 py-2">
        <span className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-term-amber/70" />
          <span className="size-2.5 rounded-full bg-term-green/70" />
        </span>
        <span className="min-w-0 flex-1 truncate text-center font-mono text-[11px] text-muted-foreground">
          ~/projects/{p.name.toLowerCase().replace(/\s+/g, "-")}
        </span>
        <span className="w-9 shrink-0" aria-hidden />
      </div>

      {p.image ? (
        /* image banner with the identity sitting on it */
        <div className="relative aspect-16/9 w-full overflow-hidden bg-muted">
          <Image
            src={p.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {/* scrim keeps the overlaid text legible on any screenshot */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3.5">
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold tracking-tight text-white">
                {p.name}
              </h3>
              <p className="truncate text-xs text-white/70">{p.role}</p>
            </div>
            <Badge
              variant="secondary"
              className="shrink-0 border-white/20 bg-white/15 text-[10px] font-normal text-white backdrop-blur-sm"
            >
              {p.completed}
            </Badge>
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-4">
        {/* projects without a screenshot keep their heading inline */}
        {p.image ? null : (
          <div className="mb-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold tracking-tight text-balance">
                {p.name}
              </h3>
              <Badge
                variant="outline"
                className="shrink-0 text-[10px] font-normal"
              >
                {p.completed}
              </Badge>
            </div>
            <p className="mt-0.5 font-mono text-xs text-primary">{p.role}</p>
          </div>
        )}

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground text-pretty">
          {p.blurb}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {p.tech.slice(0, MAX_BADGES).map((t) => (
            <li key={t}>
              <TechBadge name={t} />
            </li>
          ))}
          {extra > 0 ? (
            <li>
              <Badge
                variant="outline"
                className="rounded-md text-[11px] font-normal text-muted-foreground"
              >
                +{extra}
              </Badge>
            </li>
          ) : null}
        </ul>

        <Accordion type="single" collapsible className="mt-2">
          <AccordionItem value="details" className="border-b-0">
            <AccordionTrigger className="py-2 font-mono text-xs text-muted-foreground hover:no-underline">
              <span className="section-cmd">$ cat </span>details.md
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-1">
              <Detail title="what I built" items={p.highlights} />
              <Detail title="challenges" items={p.challenges} />
              <div>
                <p className="mb-1.5 font-mono text-[11px] tracking-wide text-primary uppercase">
                  impact
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {p.impact}
                </p>
              </div>
              {p.collaborators?.length ? (
                <div>
                  <p className="mb-1.5 font-mono text-[11px] tracking-wide text-primary uppercase">
                    collaborators
                  </p>
                  {p.collaborators.map((c) => (
                    <p
                      key={c.name}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground"
                    >
                      <Users className="size-3.5 shrink-0" aria-hidden />
                      {c.name} — {c.role}
                    </p>
                  ))}
                </div>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-auto flex flex-wrap gap-2 border-t pt-3">
          {p.live ? (
            <Button asChild size="sm" className="h-8 font-mono text-xs">
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3.5" />
                live site
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          ) : null}
          {p.repo ? (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-8 font-mono text-xs"
            >
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                <Brand.github className="size-3.5" />
                source
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          ) : null}
          {!href ? (
            <span className="text-xs text-muted-foreground">Private work</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Detail({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <p className="mb-1.5 font-mono text-[11px] tracking-wide text-primary uppercase">
        {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-relaxed text-muted-foreground text-pretty"
          >
            <span className="text-primary/60" aria-hidden>
              &rsaquo;
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
