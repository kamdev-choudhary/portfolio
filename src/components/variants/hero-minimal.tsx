import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/terminal";
import { TransitionLink } from "@/components/transition-link";
import { Brand } from "@/components/brand-icons";
import { contact, experience, profile } from "@/content/profile";

/**
 * Clean variant: typography-led, no chrome, no grid. The hierarchy is
 * name → what I do → where I do it, and everything else gets out of the way.
 */
export function HeroMinimal() {
  const current = experience[0];

  return (
    <section className="border-b">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">
          <div className="min-w-0 max-w-2xl">
            <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Open to opportunities
            </p>

            <h1 className="mt-6 text-[2.75rem] leading-[1.03] font-semibold tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
              {profile.title} at{" "}
              <span className="text-foreground">{current.company}</span>,
              building AI-powered web and mobile products — with a background in
              education technology.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t pt-7 sm:max-w-md">
              <div>
                <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                  Based in
                </dt>
                <dd className="mt-1 text-sm">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                  Focus
                </dt>
                <dd className="mt-1 text-sm">Full-stack · AI · Mobile</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#projects">
                  View work
                  <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6"
              >
                <TransitionLink href="/resume">
                  Resume
                  <ArrowUpRight className="size-4" />
                </TransitionLink>
              </Button>

              <div className="flex items-center gap-1 sm:ml-2">
                <Button asChild variant="ghost" size="icon" className="size-10 rounded-full">
                  <a href={`mailto:${contact.email}`} aria-label="Email">
                    <Mail className="size-[18px]" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="size-10 rounded-full">
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Brand.github className="size-[18px]" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="size-10 rounded-full">
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Brand.linkedin className="size-[18px]" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* portrait — soft, unframed, no window chrome */}
          <div className="order-first mx-auto w-full max-w-[14rem] sm:max-w-[16rem] lg:order-none lg:mx-0 lg:w-[20rem] lg:pt-1">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted ring-1 ring-border lg:aspect-4/5">
              <Image
                src="/photo.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 17rem, 19rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
