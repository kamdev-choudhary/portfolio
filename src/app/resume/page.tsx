import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/terminal";
import { Brand } from "@/components/brand-icons";
import { ResumeActions } from "./print-button";
import {
  certificates,
  contact,
  education,
  experience,
  extracurricular,
  profile,
  skills,
} from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name} — ${profile.title}.`,
};

export default function ResumePage() {
  return (
    <>
      {/* toolbar — hidden when printing */}
      <div className="no-print sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
        <Container className="flex h-14 items-center justify-between gap-3">
          <Button asChild variant="ghost" size="sm" className="font-mono text-xs">
            <Link href="/">
              <ArrowLeft className="size-3.5" />
              back
            </Link>
          </Button>
          <ResumeActions />
        </Container>
      </div>

      <main className="flex-1 py-8 print:py-0 sm:py-12">
        <Container className="max-w-3xl print:max-w-none print:px-0">
          <article className="space-y-7">
            {/* header */}
            <header className="border-b pb-5">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {profile.name}
              </h1>
              <p className="mt-1 font-mono text-sm text-primary sm:text-base">
                {profile.title}
              </p>

              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground print:text-black">
                <li className="flex items-center gap-1.5">
                  <Mail className="size-3.5 shrink-0" aria-hidden />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li className="flex items-center gap-1.5">
                  <Phone className="size-3.5 shrink-0" aria-hidden />
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </li>
                <li className="flex items-center gap-1.5">
                  <Brand.github className="size-3.5 shrink-0" aria-hidden />
                  <a href={contact.github}>{contact.githubLabel}</a>
                </li>
                <li className="flex items-center gap-1.5">
                  <Brand.linkedin className="size-3.5 shrink-0" aria-hidden />
                  <a href={contact.linkedin}>{contact.linkedinLabel}</a>
                </li>
                <li className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 shrink-0" aria-hidden />
                  {profile.location}
                </li>
              </ul>
            </header>

            <ResumeSection title="Summary">
              <p className="font-sans text-sm leading-relaxed text-pretty">
                {profile.about[0]} {profile.about[1]}
              </p>
            </ResumeSection>

            <ResumeSection title="Experience">
              <div className="space-y-5">
                {experience.map((job) =>
                  job.positions.map((pos) => (
                    <div
                      key={`${job.company}-${pos.role}-${pos.start}`}
                      className="print-break"
                    >
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="font-mono text-sm font-semibold">
                          {pos.role}{" "}
                          <span className="font-normal text-muted-foreground print:text-black">
                            — {job.company}
                          </span>
                        </h3>
                        <p className="shrink-0 font-mono text-xs text-muted-foreground print:text-black">
                          {pos.start} — {pos.end} · {pos.location}
                        </p>
                      </div>
                      <ul className="mt-2 space-y-1">
                        {pos.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex gap-2 font-sans text-sm leading-relaxed text-pretty"
                          >
                            <span aria-hidden>•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )),
                )}
              </div>
            </ResumeSection>

            <ResumeSection title="Skills">
              <dl className="space-y-1.5">
                {skills.map((g) => (
                  <div key={g.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                    <dt className="shrink-0 font-mono text-xs font-semibold capitalize sm:w-40">
                      {g.label}
                    </dt>
                    <dd className="font-sans text-sm">{g.items.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </ResumeSection>

            <ResumeSection title="Education">
              <div className="space-y-2">
                {education.map((e) => (
                  <div
                    key={`${e.level}-${e.year}`}
                    className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <p className="font-sans text-sm">
                      <span className="font-mono font-semibold">{e.level}</span>
                      {e.stream ? ` — ${e.stream}` : ""} · {e.institute}
                    </p>
                    <p className="shrink-0 font-mono text-xs text-muted-foreground print:text-black">
                      {e.year} · {e.grade}
                    </p>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Certifications">
              <ul className="space-y-1">
                {certificates.map((c) => (
                  <li
                    key={c.name}
                    className="flex flex-col gap-0.5 font-sans text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span>
                      <span className="font-mono font-semibold">{c.name}</span> ·{" "}
                      {c.institute}
                    </span>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground print:text-black">
                      {c.period}
                    </span>
                  </li>
                ))}
              </ul>
            </ResumeSection>

            <ResumeSection title="Community">
              <ul className="space-y-1">
                {extracurricular.map((v) => (
                  <li key={v.name} className="font-sans text-sm text-pretty">
                    <span className="font-mono font-semibold">{v.name}</span> (
                    {v.period}) — {v.achievements[0]}
                  </li>
                ))}
              </ul>
            </ResumeSection>
          </article>
        </Container>
      </main>
    </>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="print-break">
      <h2 className="mb-3 border-b pb-1.5 font-mono text-xs font-bold tracking-widest text-primary uppercase print:text-black">
        {title}
      </h2>
      {children}
    </section>
  );
}
