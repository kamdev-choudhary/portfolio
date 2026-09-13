"use client";

import * as React from "react";
import { Download, Loader2, Printer } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ResumeActions() {
  const [busy, setBusy] = React.useState(false);
  const preloaded = React.useRef<Promise<unknown> | null>(null);

  // Warm the jsPDF chunk ahead of the click so the handler resolves instantly.
  const warm = React.useCallback(() => {
    preloaded.current ??= import("@/lib/resume-pdf").then((m) => {
      void m.preloadPdfEngine();
      return m;
    });
    return preloaded.current;
  }, []);

  React.useEffect(() => {
    const id = window.setTimeout(warm, 1200);
    return () => window.clearTimeout(id);
  }, [warm]);

  async function onDownload() {
    setBusy(true);
    try {
      const mod = (await warm()) as typeof import("@/lib/resume-pdf");
      const blob = await mod.buildResumeBlob();
      const name = mod.resumeFilename();

      if (!mod.saveBlob(blob, name)) {
        // iOS Safari ignores the download attribute — open it instead.
        const url = URL.createObjectURL(blob);
        const win = window.open(url, "_blank", "noopener");
        if (!win) {
          toast.error("Your browser blocked the download", {
            description: "Allow pop-ups for this site, or use Print → Save as PDF.",
            action: { label: "Print", onClick: () => window.print() },
          });
          return;
        }
      }
      toast.success("Resume downloaded");
    } catch (err) {
      console.error("Resume PDF failed:", err);
      toast.error("Couldn't generate the PDF", {
        description: "Use Print → Save as PDF instead.",
        action: { label: "Print", onClick: () => window.print() },
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
        onPointerEnter={warm}
        onFocus={warm}
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
