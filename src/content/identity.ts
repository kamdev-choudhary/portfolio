/** Who I am and how to reach me. */

export const profile = {
  name: "Kamdev Choudhary",
  handle: "kd",
  shortName: "KD",
  initials: "KC",
  title: "Full-Stack Developer",
  location: "Noida, Uttar Pradesh, India",
  available: true,
  /** Anchor date for the "years coding" figure — first formal training.
   *  Set once; the stat recalculates itself from here every year. */
  codingSince: "2023-05",
  roles: [
    "MERN Stack Developer",
    "React & React Native Developer",
    "Node.js / Express Developer",
    "TypeScript Developer",
    "MongoDB Developer",
  ],
  tagline:
    "Full-stack developer at BharatAI Innovations, building AI-powered web and mobile products — with a background in education technology.",
  about: [
    "I'm a self-taught developer who turned a side craft into a career. I now build software full time at BharatAI Innovations, working across the stack — web, mobile, AI features, and the infrastructure that ships them.",
    "Before that I spent nearly three years at Dakshana Foundation coordinating academic programs for scholars preparing for JEE and NEET. I also built the internal tooling that kept those programs running: exam analytics, result pipelines, and the LMS scholars used every day.",
    "Beyond work I'm drawn to new technologies, hard problems, and people who like shipping. The goal is simple — blend creativity and engineering into something with real impact.",
  ],
} as const;

export const contact = {
  email: "kamdevchoudhary@gmail.com",
  phone: "+91 8340 644 088",
  phoneHref: "tel:+918340644088",
  linkedin: "https://linkedin.com/in/kamdev-choudhary",
  linkedinLabel: "in/kamdev-choudhary",
  github: "https://github.com/kamdev-choudhary",
  githubLabel: "@kamdev-choudhary",
} as const;
