/**
 * Barrel for all site content.
 *
 * Everything the site renders — every section, the resume page, the PDF and
 * the JSON-LD — reads from here, so components never import the individual
 * modules directly. Edit the module that owns the data:
 *
 *   identity.ts    name, title, tagline, about, contact details
 *   experience.ts  employment history (newest first)
 *   projects.ts    selected work
 *   skills.ts      capability groups
 *   education.ts   degrees and certifications
 *   community.ts   volunteering and hobbies
 *   navigation.ts  section order and nav labels
 *   stats.ts       figures DERIVED from the above — never hand-edited
 */

export * from "./identity";
export * from "./experience";
export * from "./projects";
export * from "./skills";
export * from "./education";
export * from "./community";
export * from "./navigation";
export * from "./stats";
