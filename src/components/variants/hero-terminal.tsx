import Image from "next/image";
import Link from "next/link";
import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { Brand } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, TerminalWindow } from "@/components/terminal";
import { TypingText } from "@/components/typing-text";
import { contact, profile } from "@/content/profile";

export function HeroTerminal() {
  return (
    <section className="relative overflow-hidden border-b bg-grid">
      {/* soft radial wash behind the fold */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,var(--primary)_0%,transparent_70%)] opacity-[0.07]"
      />

      <Container className="relative py-14 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          {/* left: identity */}
          <div className="min-w-0">
            <Badge
              variant="outline"
              className="mb-5 gap-2 rounded-full border-primary/30 bg-primary/5 py-1 pr-3 pl-2 font-mono text-xs font-normal"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              open to opportunities
            </Badge>

            <p className="font-mono text-sm text-muted-foreground sm:text-base">
              <span className="text-primary">$</span> whoami
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-4 min-h-[1.75rem] font-mono text-base text-muted-foreground sm:min-h-[2rem] sm:text-lg lg:text-xl">
              <span className="text-primary">&gt;</span>{" "}
              <TypingText phrases={profile.roles} className="text-foreground" />
            </p>

            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              {profile.tagline}
            </p>

            <p className="mt-5 flex items-center gap-2 font-mono text-xs text-muted-foreground sm:text-sm">
              <MapPin className="size-4 shrink-0" />
              {profile.location}
            </p>

            {/* CTAs — stack on mobile, inline from sm */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg" className="font-mono">
                <a href="#projects">
                  view projects
                  <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono">
                <Link href="/resume">
                  <FileText className="size-4" />
                  resume
                </Link>
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

          {/* right: portrait as a terminal pane */}
          <div className="mx-auto w-full max-w-[19rem] sm:max-w-[21rem] lg:mx-0 lg:w-[21rem]">
            <TerminalWindow
              title="~/kd/photo.jpg"
              bodyClassName="p-0"
              className="glow"
            >
              <div className="relative aspect-4/5 w-full">
                <Image
                  src="/photo.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 21rem, 21rem"
                  className="object-cover"
                />
              </div>
              <div className="border-t bg-muted/40 px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
                <span className="text-primary">$</span> file photo.jpg
                <br />
                JPEG image data &mdash; {profile.shortName}, {profile.title}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </Container>
    </section>
  );
}
