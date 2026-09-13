"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Check, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VARIANTS, VARIANT_META, type Variant } from "@/lib/variant";
import { setVariantCookie } from "@/app/actions";

export function VariantSwitcher({ current }: { current: Variant }) {
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();

  function choose(next: Variant) {
    if (next === current) return;
    // the cookie is written server-side, then the server re-renders the layout
    startTransition(async () => {
      await setVariantCookie(next);
      router.refresh();
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-9"
          aria-label={`Design: ${VARIANT_META[current].label}. Change design.`}
          data-pending={pending || undefined}
        >
          <Palette className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel className="font-mono text-xs text-muted-foreground">
          design
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {VARIANTS.map((v) => {
          const meta = VARIANT_META[v];
          const active = v === current;
          return (
            <DropdownMenuItem
              key={v}
              onSelect={() => choose(v)}
              className="flex items-start gap-2 py-2"
            >
              <Check
                className={`mt-0.5 size-4 shrink-0 ${active ? "opacity-100" : "opacity-0"}`}
                aria-hidden
              />
              <span className="flex min-w-0 flex-col">
                <span className="text-sm font-medium">{meta.label}</span>
                <span className="text-xs text-muted-foreground">
                  {meta.hint}
                </span>
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
