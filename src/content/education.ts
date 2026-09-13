/** Formal education and certifications. */

export type Education = {
  level: string;
  /** Short form used by the stat tiles, e.g. "B.Sc." */
  abbr?: string;
  stream?: string;
  institute: string;
  year: string;
  grade: string;
  gradeSystem: string;
};

export const education: Education[] = [
  {
    level: "Bachelor of Science",
    abbr: "B.Sc.",
    stream: "Mathematics",
    institute: "Ranchi University, Ranchi",
    year: "2021",
    grade: "78.28%",
    gradeSystem: "Percentage",
  },
  {
    level: "Intermediate (Class 12)",
    stream: "Science — PCM",
    institute: "JNV BIT Mesra, Ranchi",
    year: "2017",
    grade: "81%",
    gradeSystem: "Percentage",
  },
  {
    level: "Matriculation (Class 10)",
    institute: "JNV BIT Mesra, Ranchi",
    year: "2015",
    grade: "9.0 CGPA",
    gradeSystem: "CGPA",
  },
];

export type Certificate = {
  name: string;
  institute: string;
  duration: string;
  period: string;
  mode: string;
  skills: string[];
  notes: string[];
  links: { type: string; title?: string; url: string }[];
};

export const certificates: Certificate[] = [
  {
    name: "Full-Stack Web Development",
    institute: "Apna College — Delta Batch",
    duration: "6 months",
    period: "May 2023 — Oct 2023",
    mode: "Online",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    notes: [
      "Certified as a Full-Stack Web Developer.",
      "Built an e-commerce site with authentication and payment integration.",
    ],
    links: [
      {
        type: "Certificate",
        url: "https://drive.google.com/file/d/1pqEgT6b0t48mzCyp0UDknxxseM6hBjoA/preview",
      },
    ],
  },
  {
    name: "IT Support & Infrastructure",
    institute: "Coursera — Google",
    duration: "4 months",
    period: "May 2022 — Aug 2022",
    mode: "Online",
    skills: ["Networking", "Operating Systems", "System Administration"],
    notes: ["Four-course specialisation covering IT support fundamentals."],
    links: [
      {
        type: "Coursera",
        title: "Technical Support Fundamentals",
        url: "https://coursera.org/share/12297f6549fbcadec45b8bfda4e967c6",
      },
      {
        type: "Coursera",
        title: "The Bits and Bytes of Computer Networking",
        url: "https://coursera.org/share/3ec7aee323e6fcd7b2e2cd556a4f7566",
      },
      {
        type: "Coursera",
        title: "Operating Systems and You: Becoming a Power User",
        url: "https://coursera.org/share/ccbad218ba12e5e3c33d91212f80f3c7",
      },
      {
        type: "Coursera",
        title: "System Administration and IT Infrastructure Services",
        url: "https://coursera.org/share/1c71694295b2d4c2e3e1b7ffa1f95d37",
      },
    ],
  },
  {
    name: "Google Cloud — Console & Skills Boost",
    institute: "Google Cloud",
    duration: "8 months",
    period: "May 2021 — Dec 2021",
    mode: "Online",
    skills: ["Google Cloud Console", "Cloud Fundamentals"],
    notes: ["Completed hands-on labs on Google Cloud Skills Boost."],
    links: [
      {
        type: "Public Profile",
        url: "https://www.cloudskillsboost.google/public_profiles/4741e38b-3d41-4037-a246-1e4f646c2115",
      },
    ],
  },
  {
    name: "Youth Employment Program",
    institute: "Tata Consultancy Services (TCS)",
    duration: "3 months",
    period: "May 2021 — Jul 2021",
    mode: "Online",
    skills: ["Soft Skills", "Workplace Readiness"],
    notes: [],
    links: [
      {
        type: "Certificate",
        url: "https://drive.google.com/file/d/1_avxnTS4jqkoZBIhlVWneBgOk5LPkrvG/view?usp=drive_link",
      },
    ],
  },
  {
    name: "Professional Development",
    institute: "Anudip Foundation",
    duration: "1 month",
    period: "Jul 2024 — Sep 2024",
    mode: "Online",
    skills: ["Communication", "Soft Skills"],
    notes: [],
    links: [
      {
        type: "Certificate",
        url: "https://drive.google.com/file/d/1YvHIRCUBlejW0-RmRJETCOu-SNFN7bla/preview",
      },
    ],
  },
  {
    name: "Desktop Publishing",
    institute: "RUDSET Institute, Silli, Ranchi",
    duration: "45 days",
    period: "Apr 2019 — May 2019",
    mode: "Offline",
    skills: ["Photoshop", "Adobe Illustrator", "Adobe PageMaker", "Typing"],
    notes: [
      "Completed with top performance in practical assignments.",
      "Produced business cards, posters, albums and booklets.",
    ],
    links: [
      {
        type: "Certificate",
        url: "https://drive.google.com/file/d/1qYQoxi6HMi4ryM55B4FsFqtlY_bfLl35/preview",
      },
    ],
  },
];
