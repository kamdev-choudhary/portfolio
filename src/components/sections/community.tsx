import { Dumbbell, HeartHandshake, Music, Puzzle, Terminal } from "lucide-react";
import { SiChessdotcom } from "react-icons/si";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/terminal";
import { extracurricular, hobbies } from "@/content/profile";

const HOBBY_ICONS: Record<string, LucideIcon | IconType> = {
  Chess: SiChessdotcom,
  Music: Music,
  Coding: Terminal,
  Puzzles: Puzzle,
  Workout: Dumbbell,
};

export function Community() {
  return (
    <Section id="community" className="border-t">
      <SectionHeading
        command="cat ~/community.md ~/hobbies.txt"
        title="Community & Interests"
        description="Volunteering that shaped how I work, and what I do when I'm not at a keyboard."
      />

      <div className="grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-8">
        {/* volunteering */}
        <div className="space-y-5 lg:col-span-2">
          {extracurricular.map((v) => (
            <article
              key={v.name}
              className="rounded-lg border bg-card p-5 transition-colors hover:border-primary/40 print-break sm:p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="flex items-center gap-2.5 text-base font-bold tracking-tight text-balance sm:text-lg">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-muted/50">
                    <HeartHandshake
                      className="size-4 text-primary"
                      aria-hidden
                    />
                  </span>
                  {v.name}
                </h3>
                <Badge
                  variant="outline"
                  className="w-fit shrink-0 rounded-md font-mono text-[10px] font-normal"
                >
                  {v.period}
                </Badge>
              </div>

              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                {v.description}
              </p>

              <ul className="mt-4 space-y-2">
                {v.achievements.map((a, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 font-sans text-sm leading-relaxed text-muted-foreground text-pretty"
                  >
                    <span
                      className="mt-[0.4em] size-1.5 shrink-0 rotate-45 bg-primary/60"
                      aria-hidden
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* hobbies */}
        <div className="rounded-lg border bg-card p-5 sm:p-6 lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="section-cmd">
              <span className="text-primary">$</span> cat{" "}
            </span>
            <span className="font-semibold text-foreground">Hobbies</span>
          </p>
          <ul className="mt-4 space-y-4">
            {hobbies.map((h) => {
              const Icon = HOBBY_ICONS[h.name] ?? Terminal;
              return (
                <li key={h.name} className="flex gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-muted/50">
                    <Icon className="size-4 text-primary" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-sm font-semibold">{h.name}</p>
                    <p className="font-sans text-xs text-muted-foreground text-pretty">
                      {h.note}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
