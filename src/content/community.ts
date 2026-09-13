/** Volunteering and interests. */

export type Volunteering = {
  name: string;
  period: string;
  description: string;
  achievements: string[];
};

export const extracurricular: Volunteering[] = [
  {
    name: "National Service Scheme (NSS)",
    period: "2018 — 2021",
    description:
      "Active volunteer with the NSS unit, contributing to community service initiatives across Ranchi.",
    achievements: [
      "Selected for the Pre-Republic Day Parade Camp, 2019.",
      "Organised blood donation drives benefiting 500+ individuals.",
      "Led a tree plantation drive — 200+ saplings planted and nurtured.",
      "Awarded Best Volunteer, 2021, for sustained contribution.",
    ],
  },
  {
    name: "Bharat Scouts and Guides",
    period: "2010 — 2014",
    description:
      "Scouting program focused on leadership, self-reliance and civic responsibility.",
    achievements: [
      "Completed the Dwitiya Sopan level in 2014.",
      "Trained in first aid, camping and environmental conservation.",
      "Participated in cleanliness drives and disaster preparedness programs.",
      "Built practical skills — orienteering, fire safety, knot-tying.",
    ],
  },
];

export const hobbies = [
  { name: "Chess", note: "Tactics over openings." },
  { name: "Music", note: "Always something playing while coding." },
  { name: "Coding", note: "Side projects are the hobby." },
  { name: "Puzzles", note: "Logic grids and number games." },
  { name: "Workout", note: "Consistency beats intensity." },
];
