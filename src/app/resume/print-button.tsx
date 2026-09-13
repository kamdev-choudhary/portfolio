"use client";

import * as React from "react";
import { Download, Loader2, Printer } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ResumeActions() {
  const [busy, setBusy] = React.useState(false);

  async function onDownload() {
    setBusy(true);
    try {
      // jsPDF is ~350KB, so it only loads when someone actually asks for the file
      const { downloadResumePdf } = await import("@/lib/resume-pdf");
      await downloadResumePdf();
      toast.success("Resume downloaded");
    } catch (err) {
      console.error(err);
      toast.error("Couldn't generate the PDF", {
        description: "Try the print button instead.",
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.print()}
        className="font-mono text-xs"
      >
        <Printer className="size-3.5" />
        <span className="hidden sm:inline">print</span>
      </Button>
      <Button
        size="sm"
        onClick={onDownload}
        disabled={busy}
        className="font-mono text-xs"
      >
        {busy ? (
          <Loader2 className="size-3.5 animate-spin" />
        ) : (
          <Download className="size-3.5" />
        )}
        download PDF
      </Button>
    </div>
  );
}
