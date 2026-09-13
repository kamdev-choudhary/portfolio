export const profile = {
  name: "Kamdev Choudhary",
  handle: "kd",
  shortName: "KD",
  initials: "KC",
  title: "Full-Stack Developer",
  location: "Pune, Maharashtra, India",
  available: true,
  roles: [
    "MERN Stack Developer",
    "React & React Native Developer",
    "Node.js / Express Developer",
    "TypeScript Developer",
    "MongoDB Developer",
  ],
  tagline:
    "Academic Officer by day, full-stack developer by craft — building education platforms that actually get used.",
  about: [
    "I'm a self-taught developer with a deep curiosity for building things that solve real problems. My day job is in education — but the code I write for it is what I care about most.",
    "At Dakshana Foundation I coordinate academic programs for scholars preparing for JEE and NEET, and I build the internal tooling that makes those programs run: exam analytics, result pipelines, and the LMS our scholars use every day.",
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

export type Position = {
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
};

export type Job = {
  company: string;
  address: string;
  period: string;
  positions: Position[];
};

export const experience: Job[] = [
  {
    company: "Dakshana Foundation",
    address: "Kadus, Pune 412404",
    period: "May 2022 — Present",
    positions: [
      {
        role: "Academic Officer",
        location: "Pune, Maharashtra",
        start: "Sep 2023",
        end: "Present",
        current: true,
        highlights: [
          "Own end-to-end academic operations at Dakshana Valley, Pune, keeping programs running for scholars preparing for JEE and NEET.",
          "Run bimonthly exam cycles: paper creation, online review, scheduling, result compilation and deep performance analysis.",
          "Partner with the web dev and IT teams to extend the online exam and result platforms — shipping new features on the existing backend and hardening security.",
          "Build question-wise, scholar-wise and topic-wise analytics that turn raw results into actionable teaching decisions.",
          "Provide one-on-one academic guidance to scholars and translate performance trends into intervention strategies.",
          "Handle JEE & NEET application forms, eligibility verification and end-to-end registration for the cohort.",
        ],
        skills: ["Power Automate", "Excel", "Analytics", "Leadership", "Ops"],
      },
      {
        role: "Academic Program Coordinator",
        location: "Bengaluru, Karnataka",
        start: "Sep 2022",
        end: "Sep 2023",
        highlights: [
          "Coordinated a batch of 240 scholars across all academic and non-academic activities.",
          "Ran regular assessments and result analysis to surface cohort-wide strengths and gaps.",
          "Counselled underperforming scholars, identifying root causes and building improvement plans.",
          "Conducted online tests reliably in environments with limited network connectivity.",
        ],
        skills: ["Excel", "Word", "PowerPoint", "Leadership"],
      },
      {
        role: "Academic Program Coordinator",
        location: "Hyderabad, Telangana",
        start: "May 2022",
        end: "Aug 2022",
        highlights: [
          "Managed a batch of 61 students preparing for JEE Advanced across academics and daily operations.",
          "Handled class scheduling, examinations and results for the batch.",
          "Helped scholars interpret results and model realistic JEE seat possibilities.",
        ],
        skills: ["Excel", "Word", "PowerPoint", "Leadership"],
      },
    ],
  },
  {
    company: "Deccan iServices Pvt Ltd.",
    address: "Ranchi, Jharkhand",
    period: "Aug 2021 — May 2022",
    positions: [
      {
        role: "Financial Processor",
        location: "Ranchi",
        start: "Aug 2021",
        end: "May 2022",
        highlights: [
          "Processed financial and loan documentation for digitisation in a KPO workflow.",
          "Maintained accuracy and confidentiality across complex, detail-heavy datasets.",
          "Collaborated with the team to streamline processes and raise data accuracy.",
        ],
        skills: ["Data Accuracy", "KPO", "Typing"],
      },
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  role: string;
  duration: string;
  completed: string;
  tech: string[];
  highlights: string[];
  challenges: string[];
  impact: string;
  live?: string;
  repo?: string;
  collaborators?: { name: string; role: string }[];
};

export const projects: Project[] = [
  {
    name: "Dakshana Edu Portal",
    blurb:
      "A learning-management platform for Dakshana scholars — resources, exams, results and analytics in one place.",
    role: "Full-Stack Developer",
    duration: "6 months",
    completed: "October 2024",
    tech: [
      "React",
      "Node.js",
      "MUI",
      "Redux",
      "AWS S3",
      "Recharts",
      "ExcelJS",
      "Docx",
      "Framer Motion",
      "Lodash",
      "Crypto",
    ],
    highlights: [
      "Built the front-end in React with MUI, backed by a Redux store.",
      "Implemented file upload and storage on AWS S3 with signed access.",
      "Generated exam analysis in the browser — question-wise, scholar-wise and topic-wise breakdowns.",
      "Shipped an admin dashboard for managing scholars, content and exam cycles.",
    ],
    challenges: [
      "Integrating direct-to-S3 uploads without exposing credentials.",
      "Keeping the UI responsive while analysing large result datasets client-side.",
    ],
    impact:
      "Streamlined how resources and results are managed for both admins and scholars, replacing scattered spreadsheets with a single platform.",
    live: "https://lms.dakshana.org",
    repo: "https://github.com/kamdev-choudhary/dak-edu-portal",
    collaborators: [{ name: "Sandeep Tiwari", role: "Web Developer" }],
  },
  {
    name: "Portfolio v2",
    blurb:
      "This site. A terminal-flavoured portfolio rebuilt from scratch on the modern Next.js stack.",
    role: "Designer & Developer",
    duration: "Ongoing",
    completed: "2026",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Vercel",
    ],
    highlights: [
      "App Router with React Server Components and a fully static-rendered page.",
      "Command palette navigation (⌘K) built on cmdk.",
      "Dark-first terminal theme with a light mode that still reads cleanly.",
      "Responsive from 320px up, with a printable resume route.",
    ],
    challenges: [
      "Keeping the terminal aesthetic legible rather than gimmicky.",
      "Making a monospace-heavy layout work at small viewport widths.",
    ],
    impact:
      "Replaced an ageing Vite + MUI single-page app with a faster, accessible, easier-to-maintain site.",
    repo: "https://github.com/kamdev-bharatai/portfolio",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    label: "frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Redux",
      "MUI",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Recharts",
    ],
  },
  {
    label: "backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT / Crypto"],
  },
  {
    label: "cloud & tools",
    items: ["AWS S3", "Vercel", "Git", "GitHub", "Google Cloud Console", "Axios"],
  },
  {
    label: "data & automation",
    items: [
      "Microsoft Power Automate",
      "Excel (Advanced)",
      "ExcelJS",
      "Docx",
      "Result Analytics",
    ],
  },
  {
    label: "workplace",
    items: [
      "MS Office",
      "Academic Operations",
      "Leadership",
      "Mentoring",
      "Communication",
    ],
  },
];

export type Education = {
  level: string;
  stream?: string;
  institute: string;
  year: string;
  grade: string;
  gradeSystem: string;
};

export const education: Education[] = [
  {
    level: "Bachelor of Science",
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

export const navigation = [
  { id: "about", label: "about", cmd: "whoami" },
  { id: "experience", label: "experience", cmd: "cat work.log" },
  { id: "projects", label: "projects", cmd: "ls ~/projects" },
  { id: "skills", label: "skills", cmd: "cat skills.json" },
  { id: "education", label: "education", cmd: "cat edu.md" },
  { id: "certificates", label: "certificates", cmd: "ls ~/certs" },
  { id: "community", label: "community", cmd: "cat volunteer.md" },
  { id: "contact", label: "contact", cmd: "mail kd" },
] as const;
