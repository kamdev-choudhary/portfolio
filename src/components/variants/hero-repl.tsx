import Image from "next/image";
import { TransitionLink } from "@/components/transition-link";
import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/terminal";
import { TypingText } from "@/components/typing-text";
import { TerminalRepl } from "@/components/terminal-repl";
import { Brand } from "@/components/brand-icons";
import { contact, profile } from "@/content/profile";

export function HeroRepl() {
  return (
    <section className="relative overflow-hidden border-b bg-grid">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,var(--primary)_0%,transparent_70%)] opacity-[0.07]"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* identity */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-4">
              <span className="relative size-14 shrink-0 overflow-hidden rounded-full border sm:size-16">
                <Image
                  src="/photo.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <Badge
                variant="outline"
                className="gap-2 rounded-full border-primary/30 bg-primary/5 py-1 pr-3 pl-2 font-mono text-xs font-normal"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                open to opportunities
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-3 min-h-[1.75rem] font-mono text-base text-muted-foreground sm:min-h-[2rem] sm:text-lg">
              <span className="text-primary">&gt;</span>{" "}
              <TypingText phrases={profile.roles} className="text-foreground" />
            </p>

            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted-foreground text-pretty">
              {profile.tagline}
            </p>

            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground sm:text-sm">
              <MapPin className="size-4 shrink-0" />
              {profile.location}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg" className="font-mono">
                <a href="#projects">
                  view projects
                  <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono">
                <TransitionLink href="/resume">
                  <FileText className="size-4" />
                  resume
                </TransitionLink>
              </Button>

              <div className="flex items-center gap-1 sm:ml-1">
                <Button asChild variant="ghost" size="icon" className="size-10">
                  <a href={`mailto:${contact.email}`} aria-label="Email">
                    <Mail className="size-[18px]" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="size-10">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Brand.github className="size-[18px]" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="size-10">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Brand.linkedin className="size-[18px]" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* the terminal is real — it drives the page */}
          <div className="min-w-0">
            <TerminalRepl className="glow" />
            <p className="mt-2.5 text-center font-mono text-[11px] text-muted-foreground">
              this terminal works — try{" "}
              <span className="text-primary">ls ~/projects</span> or{" "}
              <span className="text-primary">help</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
