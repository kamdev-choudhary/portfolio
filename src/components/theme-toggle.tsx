"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useHydrated } from "@/hooks/use-hydrated";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useHydrated();

  const isDark = resolvedTheme === "dark";
  const label = hydrated
    ? `Switch to ${isDark ? "light" : "dark"} mode`
    : "Toggle theme";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative size-9"
          aria-label={label}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {/* Both icons render and swap in CSS, so server and client markup agree. */}
          <Sun className="size-4 scale-100 rotate-0 transition-transform duration-200 dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-4 scale-0 rotate-90 transition-transform duration-200 dark:scale-100 dark:rotate-0" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-mono text-xs">
          {hydrated ? (isDark ? "light mode" : "dark mode") : "toggle theme"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
