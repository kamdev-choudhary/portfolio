import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/terminal";
import { Brand } from "@/components/brand-icons";
import { contact, profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-auto border-t bg-muted/20">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-sm font-semibold">
              <span className="text-primary">{profile.handle}</span>
              <span className="text-muted-foreground">@portfolio:~$</span>{" "}
              <span className="text-muted-foreground">exit</span>
            </p>
            <p className="mt-2 max-w-md font-sans text-sm text-muted-foreground text-pretty">
              Built with Next.js, Tailwind CSS and shadcn/ui. Deployed on
              Vercel.
            </p>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              © {year} {profile.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Button asChild variant="ghost" size="icon" className="size-9">
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Mail className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="size-9">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Brand.github className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="size-9">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Brand.linkedin className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="ml-2 font-mono text-xs">
              <Link href="#about">
                <ArrowUp className="size-3.5" />
                top
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
