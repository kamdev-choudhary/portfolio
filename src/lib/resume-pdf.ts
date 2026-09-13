import type { jsPDF } from "jspdf";
import {
  certificates,
  contact,
  education,
  experience,
  extracurricular,
  profile,
  projects,
  skills,
} from "@/content/profile";

/* A4 in points. We lay the document out with real text runs rather than
 * rasterising the DOM, so the output stays selectable, searchable and
 * parseable by applicant-tracking systems. */
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 46;
const CONTENT_W = PAGE_W - MARGIN * 2;

const INK = [17, 24, 20] as const;
const MUTED = [110, 118, 113] as const;
const ACCENT = [22, 101, 62] as const;
const RULE = [205, 212, 207] as const;

/* jsPDF's built-in Helvetica is limited to WinAnsi, so typographic punctuation
 * silently renders as blank space. Fold it down to ASCII before drawing. */
const ASCII: Record<string, string> = {
  "\u2014": "-", // em dash
  "\u2013": "-", // en dash
  "\u2212": "-", // minus
  "\u2022": "-", // bullet
  "\u00b7": "-", // middle dot
  "\u2018": "'",
  "\u2019": "'",
  "\u201c": '"',
  "\u201d": '"',
  "\u2026": "...",
  "\u2192": "->",
  "\u00a0": " ",
};

function t(input: string): string {
  return input.replace(
    /[\u2014\u2013\u2212\u2022\u00b7\u2018\u2019\u201c\u201d\u2026\u2192\u00a0]/g,
    (c) => ASCII[c] ?? c,
  );
}

type Ctx = { doc: jsPDF; y: number };

function ensure(ctx: Ctx, needed: number) {
  if (ctx.y + needed <= PAGE_H - MARGIN) return;
  ctx.doc.addPage();
  ctx.y = MARGIN;
}

function setFont(
  ctx: Ctx,
  size: number,
  style: "normal" | "bold" | "italic" = "normal",
  color: readonly [number, number, number] = INK,
) {
  ctx.doc.setFont("helvetica", style);
  ctx.doc.setFontSize(size);
  ctx.doc.setTextColor(color[0], color[1], color[2]);
}

/** Wrapped paragraph. Returns nothing; advances the cursor. */
function paragraph(
  ctx: Ctx,
  text: string,
  opts: {
    size?: number;
    style?: "normal" | "bold" | "italic";
    color?: readonly [number, number, number];
    indent?: number;
    lead?: number;
    gap?: number;
  } = {},
) {
  const {
    size = 9.2,
    style = "normal",
    color = INK,
    indent = 0,
    lead = 1.32,
    gap = 0,
  } = opts;
  setFont(ctx, size, style, color);
  const lines = ctx.doc.splitTextToSize(t(text), CONTENT_W - indent) as string[];
  const lh = size * lead;
  for (const line of lines) {
    ensure(ctx, lh);
    ctx.doc.text(line, MARGIN + indent, ctx.y);
    ctx.y += lh;
  }
  ctx.y += gap;
}

function bullet(ctx: Ctx, text: string) {
  const size = 9.2;
  const lh = size * 1.32;
  setFont(ctx, size, "normal", INK);
  const lines = ctx.doc.splitTextToSize(t(text), CONTENT_W - 14) as string[];
  lines.forEach((line, i) => {
    ensure(ctx, lh);
    if (i === 0) {
      ctx.doc.setFillColor(ACCENT[0], ACCENT[1], ACCENT[2]);
      ctx.doc.circle(MARGIN + 5, ctx.y - 2.8, 1.35, "F");
    }
    ctx.doc.text(line, MARGIN + 14, ctx.y);
    ctx.y += lh;
  });
}

function sectionHeading(ctx: Ctx, label: string) {
  ensure(ctx, 34);
  ctx.y += 6;
  setFont(ctx, 9, "bold", ACCENT);
  ctx.doc.text(t(label).toUpperCase(), MARGIN, ctx.y, { charSpace: 1.1 });
  ctx.y += 4.5;
  ctx.doc.setDrawColor(RULE[0], RULE[1], RULE[2]);
  ctx.doc.setLineWidth(0.6);
  ctx.doc.line(MARGIN, ctx.y, PAGE_W - MARGIN, ctx.y);
  ctx.y += 11;
}

/** Bold title on the left, muted meta right-aligned on the same baseline. */
function titleRow(ctx: Ctx, leftRaw: string, rightRaw: string) {
  const left = t(leftRaw);
  const right = t(rightRaw);
  const size = 9.8;
  ensure(ctx, size * 1.5);
  setFont(ctx, 8.4, "normal", MUTED);
  const rightW = ctx.doc.getTextWidth(right);

  setFont(ctx, size, "bold", INK);
  const leftLines = ctx.doc.splitTextToSize(
    left,
    CONTENT_W - rightW - 12,
  ) as string[];

  leftLines.forEach((line, i) => {
    ensure(ctx, size * 1.35);
    setFont(ctx, size, "bold", INK);
    ctx.doc.text(line, MARGIN, ctx.y);
    if (i === 0 && right) {
      setFont(ctx, 8.4, "normal", MUTED);
      ctx.doc.text(right, PAGE_W - MARGIN, ctx.y, { align: "right" });
    }
    ctx.y += size * 1.35;
  });
}

export async function buildResumePdf(): Promise<jsPDF> {
  const { jsPDF: JsPdf } = await import("jspdf");
  const doc = new JsPdf({ unit: "pt", format: "a4", compress: true });
  const ctx: Ctx = { doc, y: MARGIN };

  doc.setProperties({
    title: `${profile.name} — Resume`,
    subject: profile.title,
    author: profile.name,
    keywords: skills.flatMap((g) => g.items).join(", "),
    creator: "kamdev.dev",
  });

  /* ---------- header ---------- */
  setFont(ctx, 21, "bold", INK);
  doc.text(t(profile.name), MARGIN, ctx.y + 12);
  ctx.y += 12 + 17;

  setFont(ctx, 10.5, "normal", ACCENT);
  doc.text(t(profile.title), MARGIN, ctx.y);
  ctx.y += 15;

  // contact line: clickable, separated by bullets
  const items: { text: string; url?: string }[] = [
    { text: contact.email, url: `mailto:${contact.email}` },
    { text: contact.phone, url: contact.phoneHref },
    { text: contact.githubLabel, url: contact.github },
    { text: contact.linkedinLabel, url: contact.linkedin },
    { text: profile.location },
  ];

  setFont(ctx, 8.6, "normal", MUTED);
  let x = MARGIN;
  const sepW = doc.getTextWidth("  |  ");
  for (const [i, item] of items.entries()) {
    const label = t(item.text);
    const w = doc.getTextWidth(label);
    if (x + w > PAGE_W - MARGIN) {
      x = MARGIN;
      ctx.y += 12;
    }
    if (item.url) doc.textWithLink(label, x, ctx.y, { url: item.url });
    else doc.text(label, x, ctx.y);
    x += w;
    if (i < items.length - 1) {
      doc.text("  |  ", x, ctx.y);
      x += sepW;
    }
  }
  ctx.y += 12;

  doc.setDrawColor(RULE[0], RULE[1], RULE[2]);
  doc.setLineWidth(0.9);
  doc.line(MARGIN, ctx.y, PAGE_W - MARGIN, ctx.y);
  ctx.y += 6;

  /* ---------- summary ---------- */
  sectionHeading(ctx, "Summary");
  paragraph(ctx, `${profile.about[0]} ${profile.about[1]}`, { gap: 2 });

  /* ---------- experience ---------- */
  sectionHeading(ctx, "Experience");
  for (const job of experience) {
    for (const pos of job.positions) {
      ensure(ctx, 48);
      titleRow(
        ctx,
        `${pos.role} — ${job.company}`,
        `${pos.start} – ${pos.end}  |  ${pos.location}`,
      );
      for (const h of pos.highlights) bullet(ctx, h);
      ctx.y += 5;
    }
  }

  /* ---------- projects ---------- */
  sectionHeading(ctx, "Selected Projects");
  for (const proj of projects) {
    ensure(ctx, 44);
    titleRow(ctx, proj.name, [proj.role, proj.live ?? proj.repo ?? ""]
      .filter(Boolean)
      .join("  |  "));
    paragraph(ctx, proj.blurb, { size: 8.9, color: MUTED });
    for (const h of proj.highlights.slice(0, 3)) bullet(ctx, h);
    paragraph(ctx, `Stack: ${proj.tech.join(" | ")}`, {
      size: 8.4,
      color: MUTED,
      gap: 6,
    });
  }

  /* ---------- skills ---------- */
  sectionHeading(ctx, "Skills");
  for (const g of skills) {
    const label = `${g.label.charAt(0).toUpperCase()}${g.label.slice(1)}: `;
    setFont(ctx, 9.2, "bold", INK);
    const labelW = doc.getTextWidth(label);
    setFont(ctx, 9.2, "normal", INK);
    const lines = doc.splitTextToSize(
      t(g.items.join(" | ")),
      CONTENT_W - labelW,
    ) as string[];

    lines.forEach((line, i) => {
      ensure(ctx, 12.5);
      if (i === 0) {
        setFont(ctx, 9.2, "bold", INK);
        doc.text(label, MARGIN, ctx.y);
      }
      setFont(ctx, 9.2, "normal", INK);
      doc.text(line, MARGIN + (i === 0 ? labelW : labelW), ctx.y);
      ctx.y += 12.5;
    });
  }
  ctx.y += 4;

  /* ---------- education ---------- */
  sectionHeading(ctx, "Education");
  for (const e of education) {
    titleRow(
      ctx,
      `${e.level}${e.stream ? ` — ${e.stream}` : ""}`,
      `${e.year}  |  ${e.grade}`,
    );
    paragraph(ctx, e.institute, { size: 8.8, color: MUTED, gap: 4 });
  }

  /* ---------- certifications ---------- */
  sectionHeading(ctx, "Certifications");
  for (const c of certificates) {
    titleRow(ctx, `${c.name} — ${c.institute}`, `${c.period}  |  ${c.mode}`);
    if (c.skills.length)
      paragraph(ctx, c.skills.join(" | "), {
        size: 8.8,
        color: MUTED,
        gap: 4,
      });
    else ctx.y += 3;
  }

  /* ---------- community ---------- */
  sectionHeading(ctx, "Community & Volunteering");
  for (const v of extracurricular) {
    titleRow(ctx, v.name, v.period);
    for (const a of v.achievements.slice(0, 3)) bullet(ctx, a);
    ctx.y += 4;
  }

  /* ---------- page numbers ---------- */
  const total = doc.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    setFont(ctx, 7.6, "normal", MUTED);
    doc.text(
      `${profile.name}  |  Page ${p} of ${total}`,
      PAGE_W / 2,
      PAGE_H - 24,
      { align: "center" },
    );
  }

  return doc;
}

export function resumeFilename(): string {
  return `${profile.name.toLowerCase().replace(/\s+/g, "-")}-resume.pdf`;
}

/** Warm the jsPDF chunk so the click handler doesn't have to await a network
 *  round-trip — an await inside the handler drops the browser's transient user
 *  activation, and Safari/Firefox then refuse to start the download. */
export function preloadPdfEngine(): Promise<unknown> {
  return import("jspdf");
}

export async function buildResumeBlob(): Promise<Blob> {
  const doc = await buildResumePdf();
  return doc.output("blob");
}

/**
 * Saves the PDF via a real anchor click. Returns false when the browser
 * ignored the download attribute (notably iOS Safari), so the caller can fall
 * back to opening the file in a new tab.
 */
export function saveBlob(blob: Blob, filename: string): boolean {
  const url = URL.createObjectURL(blob);
  try {
    const a = document.createElement("a");
    const supportsDownload = "download" in a;
    a.href = url;
    a.download = filename;
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    return supportsDownload;
  } finally {
    // give the browser a beat to start reading the blob before releasing it
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
  }
}

export async function downloadResumePdf() {
  const blob = await buildResumeBlob();
  const name = resumeFilename();
  if (!saveBlob(blob, name)) {
    window.open(URL.createObjectURL(blob), "_blank", "noopener");
  }
}
