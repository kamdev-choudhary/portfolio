import { profile } from "./identity";
import { experience } from "./experience";
import { education } from "./education";
import { projects } from "./projects";

/**
 * Headline figures, all DERIVED from the content modules.
 *
 * Nothing here is hand-written — "years working" advances on its own every
 * anniversary, and the scholar count is the sum of the structured `metrics`
 * on each position. Edit the source data, never these numbers.
 */

const MONTHS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

/** Parses "Aug 2021", "Sep 2023" or an ISO "2023-05" into a Date. */
function parseDate(value: string): Date | null {
  const iso = /^(\d{4})-(\d{2})$/.exec(value.trim());
  if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, 1);

  const parts = value.trim().split(/\s+/);
  if (parts.length !== 2) return null;
  const month = MONTHS.indexOf(parts[0].slice(0, 3).toLowerCase());
  const year = Number(parts[1]);
  if (month < 0 || !Number.isFinite(year)) return null;
  return new Date(year, month, 1);
}

function wholeYearsSince(value: string, now: Date): number {
  const start = parseDate(value);
  if (!start) return 0;
  let years = now.getFullYear() - start.getFullYear();
  if (now.getMonth() < start.getMonth()) years -= 1;
  return Math.max(0, years);
}

/** Rounds 301 -> 300, 247 -> 200, so the "+" is never an overstatement. */
function floorToStep(value: number, step: number): number {
  return Math.floor(value / step) * step;
}

export type Stat = { value: string; label: string; key: string };

/**
 * Call this at render time — never cache the result in a module constant, or
 * the figures freeze at build time and quietly go stale.
 */
export function computeStats(now: Date = new Date()): Stat[] {
  // earliest role start across the whole timeline
  const starts = experience
    .flatMap((job) => job.positions.map((p) => parseDate(p.start)))
    .filter((d): d is Date => d !== null)
    .sort((a, b) => a.getTime() - b.getTime());

  const yearsWorking = starts.length
    ? wholeYearsSince(
        `${MONTHS[starts[0].getMonth()]} ${starts[0].getFullYear()}`,
        now,
      )
    : 0;

  const yearsCoding = wholeYearsSince(profile.codingSince, now);

  const scholars = experience
    .flatMap((job) => job.positions)
    .reduce((sum, p) => sum + (p.metrics?.scholars ?? 0), 0);

  const degree = education[0];

  return [
    { key: "working", value: `${yearsWorking}+`, label: "years working" },
    { key: "coding", value: `${yearsCoding}+`, label: "years coding" },
    {
      key: "scholars",
      value: `${floorToStep(scholars, 100)}+`,
      label: "scholars supported",
    },
    {
      key: "projects",
      value: `${projects.length}`,
      label: "projects shipped",
    },
    {
      key: "degree",
      value: degree.abbr ?? degree.level,
      label: (degree.stream ?? degree.institute).toLowerCase(),
    },
  ];
}
