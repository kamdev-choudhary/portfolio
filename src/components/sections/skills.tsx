import { Section, SectionHeading, TerminalWindow } from "@/components/terminal";
import { TechBadge } from "@/components/tech-badge";
import { skills } from "@/content/profile";

export function Skills() {
  return (
    <Section id="skills" className="border-t bg-muted/20">
      <SectionHeading
        command="cat ~/skills.json | jq"
        title="Skills"
        description="What I reach for, grouped by where it lives in the stack."
      />

      <TerminalWindow title="skills.json" bodyClassName="p-0">
        <div className="grid divide-y sm:grid-cols-2 sm:divide-x lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.label} className="p-4 sm:p-5">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs sm:text-sm">
                <span className="term-syntax text-muted-foreground" aria-hidden>
                  &quot;
                </span>
                <span className="font-semibold text-primary">
                  {group.label}
                </span>
                <span className="term-syntax text-muted-foreground" aria-hidden>
                  &quot;: [
                </span>
              </p>
              <ul className="flex flex-wrap gap-1.5 pl-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechBadge name={item} />
                  </li>
                ))}
              </ul>
              <p
                className="term-syntax mt-3 font-mono text-xs text-muted-foreground"
                aria-hidden
              >
                ],
              </p>
            </div>
          ))}
        </div>
      </TerminalWindow>
    </Section>
  );
}
