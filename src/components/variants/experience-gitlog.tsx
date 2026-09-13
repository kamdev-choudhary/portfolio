import { Section, SectionHeading } from "@/components/terminal";
import { TechList } from "@/components/tech-badge";
import { experience } from "@/content/profile";
import { cn } from "@/lib/utils";

/** Deterministic 7-char hex, so the "commit" for a role never changes between
 *  renders or between server and client. */
function commitHash(seed: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0").slice(0, 7);
}

type Entry = {
  hash: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
  /** first position at a company starts a new branch */
  branchHead: boolean;
};

const entries: Entry[] = experience.flatMap((job) =>
  job.positions.map((pos, i) => ({
    hash: commitHash(`${job.company}:${pos.role}:${pos.start}`),
    company: job.company,
    role: pos.role,
    location: pos.location,
    start: pos.start,
    end: pos.end,
    current: pos.current,
    highlights: pos.highlights,
    skills: pos.skills,
    branchHead: i === 0,
  })),
);

export function ExperienceGitLog() {
  return (
    <Section id="experience" className="border-t bg-muted/20">
      <SectionHeading
        command="git log --oneline --graph --author=kd"
        title="Experience"
        description="Career history, rendered the way I'd actually read it."
      />

      <div className="scroll-x rounded-lg border bg-card">
        <ol className="min-w-[36rem] p-4 sm:min-w-0 sm:p-5 lg:p-6">
          {entries.map((e, i) => {
            const last = i === entries.length - 1;
            return (
              <li key={e.hash} className="relative flex gap-3 sm:gap-4">
                {/* graph gutter */}
                <div
                  className="relative flex w-4 shrink-0 justify-center"
                  aria-hidden
                >
                  <span
                    className={cn(
                      "absolute top-2.5 size-2.5 rounded-full ring-4 ring-card",
                      e.current
                        ? "bg-primary"
                        : e.branchHead
                          ? "bg-term-cyan"
                          : "bg-border",
                    )}
                  />
                  {!last ? (
                    <span className="absolute top-5 bottom-0 w-px bg-border" />
                  ) : null}
                </div>

                <div className={cn("min-w-0 flex-1", last ? "pb-0" : "pb-7")}>
                  {/* commit line */}
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-sm">
                    <span className="text-term-amber">{e.hash}</span>
                    {e.branchHead ? (
                      <span className="text-muted-foreground">
                        (
                        <span className="text-term-cyan">
                          {e.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                        </span>
                        {e.current ? (
                          <>
                            <span>, </span>
                            <span className="text-primary">HEAD -&gt; main</span>
                          </>
                        ) : null}
                        )
                      </span>
                    ) : null}
                    <span className="font-semibold text-foreground">
                      {e.role}
                    </span>
                  </div>

                  {/* author/date line */}
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    <span className="hidden sm:inline">Date: </span>
                    {e.start} — {e.end}
                    <span className="mx-1.5 text-border">|</span>
                    {e.company}
                    <span className="mx-1.5 text-border">|</span>
                    {e.location}
                  </p>

                  {/* diff body */}
                  <ul className="mt-3 overflow-hidden rounded-md border bg-muted/30 font-mono text-[12.5px] leading-relaxed">
                    {e.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex gap-2 px-2.5 py-1 text-foreground/90 odd:bg-primary/4"
                      >
                        <span
                          className="shrink-0 select-none text-primary"
                          aria-hidden
                        >
                          +
                        </span>
                        <span className="min-w-0 font-sans text-sm text-pretty">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <TechList items={e.skills} className="mt-3" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
