import { ArrowUpRight, ExternalLink, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/terminal";
import { TechList } from "@/components/tech-badge";
import { Brand } from "@/components/brand-icons";
import { projects } from "@/content/profile";

export function Projects() {
  return (
    <Section id="projects" className="border-t">
      <SectionHeading
        command="ls -la ~/projects"
        title="Projects"
        description="Things I have designed, built and shipped."
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-primary/40 print-break"
          >
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b bg-muted/50 px-3 py-2 sm:px-4">
              <span className="flex shrink-0 gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-term-amber/70" />
                <span className="size-2.5 rounded-full bg-term-green/70" />
              </span>
              <span className="min-w-0 flex-1 truncate text-center font-mono text-[11px] text-muted-foreground sm:text-xs">
                ~/projects/{p.name.toLowerCase().replace(/\s+/g, "-")}
              </span>
              <span className="w-9 shrink-0" aria-hidden />
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold tracking-tight text-balance sm:text-xl">
                  {p.name}
                </h3>
                <Badge
                  variant="outline"
                  className="shrink-0 rounded-md font-mono text-[10px] font-normal"
                >
                  {p.completed}
                </Badge>
              </div>

              <p className="mt-1.5 font-mono text-xs text-primary">{p.role}</p>

              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                {p.blurb}
              </p>

              <TechList items={p.tech} className="mt-4" />

              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="details" className="border-b-0">
                  <AccordionTrigger className="py-2 font-mono text-xs text-muted-foreground hover:no-underline">
                    $ cat details.md
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-1">
                    <Detail title="what I built" items={p.highlights} />
                    <Detail title="challenges" items={p.challenges} />
                    <div>
                      <p className="mb-1.5 font-mono text-[11px] tracking-wide text-primary uppercase">
                        impact
                      </p>
                      <p className="font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
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
                            className="flex items-center gap-1.5 font-sans text-sm text-muted-foreground"
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

              {/* links pinned to the card bottom */}
              <div className="mt-auto pt-4">
                <Separator className="mb-4" />
                <div className="flex flex-wrap gap-2">
                  {p.live ? (
                    <Button
                      asChild
                      size="sm"
                      variant="default"
                      className="font-mono text-xs"
                    >
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
                      className="font-mono text-xs"
                    >
                      <a href={p.repo} target="_blank" rel="noopener noreferrer">
                        <Brand.github className="size-3.5" />
                        source
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
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
            className="flex gap-2 font-sans text-sm leading-relaxed text-muted-foreground text-pretty"
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
