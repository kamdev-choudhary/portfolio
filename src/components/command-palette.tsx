"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowRight, FileText, Mail, Moon, Phone, Sun } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Brand } from "@/components/brand-icons";
import { contact, navigation } from "@/content/profile";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const { setTheme } = useTheme();

  const run = React.useCallback(
    (fn: () => void) => {
      onOpenChange(false);
      // let the dialog finish closing so focus lands where we send it
      requestAnimationFrame(fn);
    },
    [onOpenChange],
  );

  const goToSection = React.useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) {
        router.push(`/#${id}`);
        return;
      }
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    },
    [router],
  );

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Command palette"
      description="Jump to a section or open a link"
    >
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          {navigation.map((item) => (
            <CommandItem
              key={item.id}
              value={`${item.label} ${item.cmd}`}
              onSelect={() => run(() => goToSection(item.id))}
            >
              <ArrowRight />
              <span className="capitalize">{item.label}</span>
              <CommandShortcut className="hidden font-mono sm:block">
                {item.cmd}
              </CommandShortcut>
            </CommandItem>
          ))}
          <CommandItem
            value="resume cv download print"
            onSelect={() => run(() => router.push("/resume"))}
          >
            <FileText />
            <span>Resume</span>
            <CommandShortcut className="hidden font-mono sm:block">
              open /resume
            </CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Connect">
          <CommandItem
            value="email mail contact"
            onSelect={() =>
              run(() => {
                window.location.href = `mailto:${contact.email}`;
              })
            }
          >
            <Mail />
            <span>Email</span>
            <CommandShortcut className="hidden font-mono sm:block">
              {contact.email}
            </CommandShortcut>
          </CommandItem>
          <CommandItem
            value="phone call mobile"
            onSelect={() =>
              run(() => {
                window.location.href = contact.phoneHref;
              })
            }
          >
            <Phone />
            <span>Phone</span>
            <CommandShortcut className="hidden font-mono sm:block">
              {contact.phone}
            </CommandShortcut>
          </CommandItem>
          <CommandItem
            value="github code repositories source"
            onSelect={() =>
              run(() => window.open(contact.github, "_blank", "noopener"))
            }
          >
            <Brand.github />
            <span>GitHub</span>
            <CommandShortcut className="hidden font-mono sm:block">
              {contact.githubLabel}
            </CommandShortcut>
          </CommandItem>
          <CommandItem
            value="linkedin profile network"
            onSelect={() =>
              run(() => window.open(contact.linkedin, "_blank", "noopener"))
            }
          >
            <Brand.linkedin />
            <span>LinkedIn</span>
            <CommandShortcut className="hidden font-mono sm:block">
              {contact.linkedinLabel}
            </CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem
            value="light theme mode bright"
            onSelect={() => run(() => setTheme("light"))}
          >
            <Sun />
            <span>Light mode</span>
          </CommandItem>
          <CommandItem
            value="dark theme mode night"
            onSelect={() => run(() => setTheme("dark"))}
          >
            <Moon />
            <span>Dark mode</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
