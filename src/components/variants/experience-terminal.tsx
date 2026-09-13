import { Building2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/terminal";
import { TechList } from "@/components/tech-badge";
import { experience } from "@/content/profile";

export function ExperienceTerminal() {
  return (
    <Section id="experience" className="border-t bg-muted/20">
      <SectionHeading
        command="cat ~/work.log --reverse"
        title="Experience"
        description="Academic operations at scale, and the tooling I built to run it."
      />

      <div className="space-y-10 sm:space-y-12">
        {experience.map((job) => (
          <article key={job.company} className="print-break">
            {/* company header */}
            <header className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-card">
                  <Building2 className="size-4 text-primary" aria-hidden />
                </span>
                <h3 className="min-w-0 truncate text-lg font-bold tracking-tight sm:text-xl">
                  {job.company}
                </h3>
              </div>
              <p className="shrink-0 pl-10.5 font-mono text-xs text-muted-foreground sm:pl-0 sm:text-sm">
                {job.period}
              </p>
            </header>

            {/* positions on a rail */}
            <ol className="relative ml-4 space-y-6 border-l pl-6 sm:ml-4 sm:space-y-8 sm:pl-8">
              {job.positions.map((pos) => (
                <li key={`${pos.role}-${pos.start}`} className="relative print-break">
                  {/* node */}
                  <span
                    aria-hidden
                    className={
                      "absolute top-1.5 -left-[1.6875rem] size-2.5 rounded-full ring-4 ring-background sm:-left-[2.1875rem] " +
                      (pos.current ? "bg-primary" : "bg-border")
                    }
                  />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h4 className="font-mono text-base font-semibold sm:text-lg">
                      {pos.role}
                    </h4>
                    <div className="flex shrink-0 items-center gap-2">
                      <p className="font-mono text-xs text-muted-foreground sm:text-sm">
                        {pos.start} — {pos.end}
                      </p>
                      {pos.current ? (
                        <Badge className="h-5 rounded-full px-2 font-mono text-[10px] font-normal">
                          current
                        </Badge>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <MapPin className="size-3.5 shrink-0" aria-hidden />
                    {pos.location}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {pos.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 font-sans text-sm leading-relaxed text-muted-foreground text-pretty"
                      >
                        <span
                          className="mt-[0.4em] size-1.5 shrink-0 rotate-45 bg-primary/60"
                          aria-hidden
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <TechList items={pos.skills} className="mt-4" />
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  );
}
