import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/terminal";
import { education } from "@/content/profile";

export function Education() {
  return (
    <Section id="education" className="border-t">
      <SectionHeading
        command="cat ~/education.md"
        title="Education"
        description="Formal academics, most recent first."
      />

      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {education.map((e) => (
          <article
            key={`${e.level}-${e.year}`}
            className="flex flex-col rounded-lg border bg-card p-5 transition-colors hover:border-primary/40 print-break"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/50">
                <GraduationCap className="size-4 text-primary" aria-hidden />
              </span>
              <Badge
                variant="outline"
                className="shrink-0 rounded-md font-mono text-[10px] font-normal"
              >
                {e.year}
              </Badge>
            </div>

            <h3 className="font-mono text-base font-semibold text-balance">
              {e.level}
            </h3>
            {e.stream ? (
              <p className="mt-1 font-sans text-sm text-muted-foreground text-pretty">
                {e.stream}
              </p>
            ) : null}

            <p className="mt-3 font-sans text-sm text-muted-foreground text-pretty">
              {e.institute}
            </p>

            <p className="mt-auto pt-4 font-mono text-sm">
              <span className="text-muted-foreground">{e.gradeSystem}: </span>
              <span className="font-semibold text-primary">{e.grade}</span>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
