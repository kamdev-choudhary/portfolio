"use client";

import * as React from "react";
import Link from "next/link";
import { FileText, Github, Linkedin, Mail, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPalette } from "@/components/command-palette";
import { Container } from "@/components/terminal";
import { contact, navigation, profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("about");

  // ⌘K / Ctrl+K opens the palette
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently nearest the top of the viewport
  React.useEffect(() => {
    const sections = navigation
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-50 w-full transition-shadow",
        scrolled
          ? "border-b bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent bg-background",
      )}
    >
      <Container className="flex h-14 items-center gap-2 sm:h-16 sm:gap-3">
        {/* brand */}
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 font-mono text-sm font-semibold tracking-tight sm:text-base"
        >
          <span className="text-primary">{profile.handle}</span>
          <span className="hidden text-muted-foreground sm:inline">
            @portfolio
          </span>
          <span className="text-muted-foreground">:~</span>
          <span className="text-primary caret" aria-hidden />
        </Link>

        {/* desktop nav */}
        <nav
          aria-label="Sections"
          className="ml-auto hidden items-center gap-0.5 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors xl:text-sm",
                active === item.id
                  ? "bg-accent text-primary"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
              )}
            >
              {item.short}
            </a>
          ))}
        </nav>

        {/* actions */}
        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPaletteOpen(true)}
            className="hidden h-9 gap-2 px-2.5 font-mono text-xs text-muted-foreground sm:flex"
            aria-label="Open command palette"
          >
            <Search className="size-3.5" />
            <span className="hidden md:inline">search</span>
            <kbd className="pointer-events-none hidden select-none items-center gap-0.5 rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium md:inline-flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-9 sm:hidden"
            onClick={() => setPaletteOpen(true)}
            aria-label="Open command palette"
          >
            <Search className="size-4" />
          </Button>

          <ThemeToggle />

          {/* mobile menu */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-9 lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,85vw)] p-0">
              <SheetHeader className="border-b">
                <SheetTitle className="text-left font-mono text-sm">
                  <span className="text-primary">{profile.handle}</span>
                  <span className="text-muted-foreground">@portfolio:~$</span>
                </SheetTitle>
              </SheetHeader>

              <nav
                aria-label="Sections"
                className="flex flex-col gap-0.5 overflow-y-auto p-3"
              >
                {navigation.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={cn(
                        "flex flex-col gap-0.5 rounded-md px-3 py-2.5 transition-colors",
                        active === item.id
                          ? "bg-accent"
                          : "hover:bg-accent/60",
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-sm capitalize",
                          active === item.id
                            ? "text-primary"
                            : "text-foreground",
                        )}
                      >
                        {item.label}
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        $ {item.cmd}
                      </span>
                    </a>
                  </SheetClose>
                ))}

                <Separator className="my-3" />

                <SheetClose asChild>
                  <Link
                    href="/resume"
                    className="flex items-center gap-2.5 rounded-md px-3 py-2.5 font-mono text-sm hover:bg-accent/60"
                  >
                    <FileText className="size-4 text-muted-foreground" />
                    resume
                  </Link>
                </SheetClose>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2.5 font-mono text-sm hover:bg-accent/60"
                >
                  <Mail className="size-4 text-muted-foreground" />
                  email
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-md px-3 py-2.5 font-mono text-sm hover:bg-accent/60"
                >
                  <Github className="size-4 text-muted-foreground" />
                  github
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-md px-3 py-2.5 font-mono text-sm hover:bg-accent/60"
                >
                  <Linkedin className="size-4 text-muted-foreground" />
                  linkedin
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </header>
  );
}
