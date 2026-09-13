import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/terminal";
import { experience } from "@/content/profile";

/** Clean variant: a quiet two-column list. Hairlines, no cards, no dots. */
export function ExperienceMinimal() {
  return (
    <Section id="experience" className="border-t">
      <SectionHeading
        command="cat ~/work.log --reverse"
        title="Experience"
        description="Roles, most recent first."
      />

      <div className="divide-y border-t">
        {experience.flatMap((job) =>
          job.positions.map((pos) => (
            <article
              key={`${job.company}-${pos.role}-${pos.start}`}
              className="grid gap-4 py-8 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[13rem_minmax(0,1fr)]"
            >
              <div className="sm:pt-0.5">
                <p className="text-sm text-muted-foreground tabular-nums">
                  {pos.start} — {pos.end}
                </p>
                {pos.current ? (
                  <Badge
                    variant="secondary"
                    className="mt-2 rounded-full px-2.5 text-[11px] font-normal"
                  >
                    Current
                  </Badge>
                ) : null}
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">
                  {pos.role}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {job.company} · {pos.location}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {pos.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground text-pretty before:absolute before:top-[0.6em] before:left-0 before:size-1 before:rounded-full before:bg-muted-foreground/50"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {pos.skills.map((s) => (
                    <li key={s}>
                      <Badge
                        variant="outline"
                        className="rounded-full px-2.5 text-[11px] font-normal text-muted-foreground"
                      >
                        {s}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )),
        )}
      </div>
    </Section>
  );
}
