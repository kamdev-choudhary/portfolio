"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintButton() {
  return (
    <Button
      onClick={() => window.print()}
      size="sm"
      className="font-mono text-xs"
    >
      <Printer className="size-3.5" />
      print / save as PDF
    </Button>
  );
}
