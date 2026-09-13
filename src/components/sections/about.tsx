import { Braces, GraduationCap, Rocket, Users } from "lucide-react";
import { Section, SectionHeading, TerminalWindow } from "@/components/terminal";
import { profile } from "@/content/profile";

const stats = [
  { icon: Rocket, value: "4+", label: "years working" },
  { icon: Braces, value: "3+", label: "years coding" },
  { icon: Users, value: "300+", label: "scholars supported" },
  { icon: GraduationCap, value: "B.Sc.", label: "mathematics" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        command="cat ~/about.md"
        title="About"
        description="Where the academic work ends and the engineering begins."
      />

      <div className="grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-8">
        <TerminalWindow
          title="about.md"
          className="lg:col-span-2"
          bodyClassName="space-y-4"
        >
          {profile.about.map((para, i) => (
            <p
              key={i}
              className="font-sans text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base"
            >
              {para}
            </p>
          ))}
        </TerminalWindow>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-lg border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <Icon className="mb-2 size-4 text-primary" aria-hidden />
              <p className="font-mono text-xl font-bold tracking-tight sm:text-2xl">
                {value}
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-muted-foreground sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
