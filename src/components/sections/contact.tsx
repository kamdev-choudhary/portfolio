"use client";

import * as React from "react";
import { Check, Copy, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section, SectionHeading, TerminalWindow } from "@/components/terminal";
import { Brand } from "@/components/brand-icons";
import { contact, profile } from "@/content/profile";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [pending, setPending] = React.useState(false);
  const [errors, setErrors] = React.useState<Errors>({});
  const [copied, setCopied] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please select it manually");
    }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        toast.success("Message sent — I'll get back to you soon.");
        return;
      }

      const payload = await res.json().catch(() => ({}));

      if (res.status === 422 && payload.errors) {
        setErrors(payload.errors as Errors);
        toast.error("Please fix the highlighted fields.");
        return;
      }

      // no mail provider wired up yet — hand the user their mail client
      const subject = encodeURIComponent(
        `Portfolio enquiry from ${String(data.name ?? "")}`,
      );
      const bodyText = encodeURIComponent(String(data.message ?? ""));
      toast.error("Direct send is unavailable", {
        description: "Opening your email app instead.",
        action: {
          label: "Open mail",
          onClick: () => {
            window.location.href = `mailto:${contact.email}?subject=${subject}&body=${bodyText}`;
          },
        },
      });
    } catch {
      toast.error("Network error — please try again or email me directly.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Section id="contact" className="border-t bg-muted/20">
      <SectionHeading
        command={`mail -s "hello" ${contact.email}`}
        title="Get in touch"
        description="Open to full-stack roles, freelance builds and interesting problems. I read every message."
      />

      <div className="grid gap-6 lg:grid-cols-5 lg:items-start lg:gap-8">
        {/* details */}
        <div className="min-w-0 space-y-3 lg:col-span-2">
          <ContactRow
            icon={Mail}
            label="email"
            value={contact.email}
            href={`mailto:${contact.email}`}
            action={
              <Button
                variant="ghost"
                size="icon"
                className="size-8 shrink-0"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="size-3.5 text-primary" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </Button>
            }
          />
          <ContactRow
            icon={Phone}
            label="phone"
            value={contact.phone}
            href={contact.phoneHref}
          />
          <ContactRow
            icon={Brand.github}
            label="github"
            value={contact.githubLabel}
            href={contact.github}
            external
          />
          <ContactRow
            icon={Brand.linkedin}
            label="linkedin"
            value={contact.linkedinLabel}
            href={contact.linkedin}
            external
          />
          <ContactRow icon={MapPin} label="location" value={profile.location} />
        </div>

        {/* form */}
        <TerminalWindow title="compose — new message" className="lg:col-span-3 lg:self-start">
          <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
            {/* honeypot */}
            <div aria-hidden className="hidden">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="name"
                error={errors.name}
                autoComplete="name"
                placeholder="Ada Lovelace"
              />
              <Field
                id="email"
                label="email"
                type="email"
                error={errors.email}
                autoComplete="email"
                placeholder="ada@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono text-xs">
                message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell me about the role, project or idea…"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="resize-y font-sans"
              />
              {errors.message ? (
                <p
                  id="message-error"
                  className="font-mono text-xs text-destructive"
                >
                  {errors.message}
                </p>
              ) : null}
            </div>

            <Button
              type="submit"
              disabled={pending}
              className="w-full font-mono sm:w-auto"
            >
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  sending…
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  send message
                </>
              )}
            </Button>
          </form>
        </TerminalWindow>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  error,
  ...props
}: React.ComponentProps<typeof Input> & { label: string; error?: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="font-mono text-xs">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="font-sans"
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="font-mono text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  action?: React.ReactNode;
}) {
  const body = (
    <>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/50">
        <Icon className="size-4 text-primary" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-mono text-[11px] text-muted-foreground">
          {label}
        </span>
        <span className="block truncate font-mono text-sm">{value}</span>
      </span>
    </>
  );

  return (
    <div className="contact-row flex min-w-0 items-center gap-3 rounded-lg border bg-card p-3 transition-colors hover:border-primary/40">
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="flex min-w-0 flex-1 items-center gap-3"
        >
          {body}
        </a>
      ) : (
        <span className="flex min-w-0 flex-1 items-center gap-3">{body}</span>
      )}
      {action}
    </div>
  );
}
