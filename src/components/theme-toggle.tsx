"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative size-9"
          aria-label={
            mounted
              ? `Switch to ${isDark ? "light" : "dark"} mode`
              : "Toggle theme"
          }
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {/* both are rendered and swapped in CSS, so SSR and client agree */}
          <Sun className="size-4 scale-100 rotate-0 transition-transform duration-200 dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-4 scale-0 rotate-90 transition-transform duration-200 dark:scale-100 dark:rotate-0" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-mono text-xs">
          {mounted ? (isDark ? "light mode" : "dark mode") : "toggle theme"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
