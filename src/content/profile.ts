export const profile = {
  name: "Kamdev Choudhary",
  handle: "kd",
  shortName: "KD",
  initials: "KC",
  title: "Full-Stack Developer",
  location: "Noida, Uttar Pradesh, India",
  available: true,
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
    company: "BharatAI Innovations Pvt. Ltd.",
    address: "Noida, Uttar Pradesh",
    period: "Apr 2025 — Present",
    positions: [
      {
        role: "Full-Stack Developer",
        location: "Noida, Uttar Pradesh",
        start: "Apr 2025",
        end: "Present",
        current: true,
        highlights: [
          "Build and ship full-stack web applications end to end — React and Next.js front-ends backed by Node.js and Express APIs.",
          "Develop AI and LLM-powered product features, integrating models into real application workflows.",
          "Build cross-platform mobile applications with React Native.",
          "Own deployment and infrastructure work: cloud environments, CI/CD pipelines and production monitoring.",
          "Work across design, product and engineering to take features from idea to release.",
        ],
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "React Native",
          "MongoDB",
          "AWS",
          "CI/CD",
        ],
      },
    ],
  },
  {
    company: "Dakshana Foundation",
    address: "Kadus, Pune 412404",
    period: "May 2022 — Mar 2025",
    positions: [
      {
        role: "Academic Officer",
        location: "Pune, Maharashtra",
        start: "Sep 2023",
        end: "Mar 2025",
        highlights: [
          "Owned end-to-end academic operations at Dakshana Valley, Pune, keeping programs running for scholars preparing for JEE and NEET.",
          "Ran bimonthly exam cycles: paper creation, online review, scheduling, result compilation and deep performance analysis.",
          "Partnered with the web dev and IT teams to extend the online exam and result platforms — shipping new features on the existing backend and hardening security.",
          "Built question-wise, scholar-wise and topic-wise analytics that turned raw results into actionable teaching decisions.",
          "Provided one-on-one academic guidance to scholars and translated performance trends into intervention strategies.",
          "Handled JEE & NEET application forms, eligibility verification and end-to-end registration for the cohort.",
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
    name: "Routewala",
    blurb:
      "An end-to-end Employee Transportation System (ETS) for corporates and their transport partners — rostering, route optimisation, live GPS and compliance in one platform.",
    role: "Full-Stack Developer",
    duration: "Ongoing",
    completed: "2026",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Google Maps",
      "React Native",
    ],
    highlights: [
      "Built shift-aware smart rostering that plans routes and auto-allocates cabs in minutes.",
      "Implemented route optimisation for pickup and drop sequencing to cut distance, fuel and travel time.",
      "Delivered live GPS tracking with speed, odometer, geofencing, route-deviation alerts and accurate ETAs.",
      "Built compliance management for driver licences, vehicle documents and permits, with automated expiry reminders.",
      "Shipped attendance and no-show capture through companion driver, employee and supervisor apps.",
      "Added safety tooling — SOS, guard and escort flows — plus reporting and analytics across every trip.",
    ],
    challenges: [
      "Keeping live vehicle telemetry responsive for large fleets without overwhelming the client.",
      "Modelling rosters, vendors and compliance as 10+ modules that still behave as one product.",
    ],
    impact:
      "Replaces spreadsheets and manual coordination with a single connected platform for transport teams — from planning the roster to verifying every document and tracking every kilometre.",
    live: "https://routewala.com",
  },
  {
    name: "CabGrade",
    blurb:
      "Cab and fleet management software for Indian car rental and taxi operators — bookings, billing, drivers and analytics, with a free tier for small operators.",
    role: "Full-Stack Developer",
    duration: "Ongoing",
    completed: "2026",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "React Native",
    ],
    highlights: [
      "Built smart booking management replacing the WhatsApp-and-Excel workflow most operators run on.",
      "Implemented one-click billing and invoicing with payment and accounting integrations.",
      "Delivered vehicle and driver management with multi-user, role-based access control.",
      "Shipped 80+ reports and analytics giving operators visibility into their own business numbers.",
      "Built companion mobile apps — an admin app and a chauffeur-facing driver app.",
      "Added per-operator branded websites and corporate taxi (ETS) management.",
    ],
    challenges: [
      "Designing for operators migrating off spreadsheets, so onboarding had to be near-zero friction.",
      "Supporting an inter-operator booking network across cities while keeping each operator's data isolated.",
    ],
    impact:
      "Serves 400+ operators across India with a platform that has processed over Rs 2,500 Cr in billing, at 95% retention.",
    live: "https://kbcd.in",
  },
  {
    name: "Academiq AI",
    blurb:
      "An AI workspace for classrooms — lesson plans, worksheets, quizzes and homework help generated in seconds, built for teachers and students.",
    role: "Full-Stack Developer",
    duration: "Ongoing",
    completed: "2026",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "LLM APIs",
    ],
    highlights: [
      "Built AI generation flows for lesson plans, worksheets, quizzes and homework help.",
      "Implemented authentication with email/password and Google sign-in, plus persistent sessions.",
      "Designed school workspaces so teachers and students can join and share resources.",
      "Added a gamified layer — badges and progress — to keep students engaged.",
    ],
    challenges: [
      "Grounding model output in real curriculum requirements so results are classroom-usable, not generic.",
      "Keeping generation latency low enough that teachers use it mid-planning.",
    ],
    impact:
      "Turns hours of lesson preparation into seconds, giving teachers usable classroom material rather than raw model output.",
    live: "https://academiq-tools.io",
  },
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
    label: "ai & integrations",
    items: [
      "LLM APIs",
      "RAG pipelines",
      "Prompt engineering",
      "AI feature integration",
    ],
  },
  {
    label: "cloud & devops",
    items: [
      "AWS",
      "AWS S3",
      "Vercel",
      "CI/CD",
      "Git",
      "GitHub",
      "Google Cloud Console",
    ],
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
  { id: "about", label: "about", short: "about", cmd: "whoami", primary: true },
  { id: "experience", label: "experience", short: "work", cmd: "cat work.log", primary: true },
  { id: "projects", label: "projects", short: "projects", cmd: "ls ~/projects", primary: true },
  { id: "skills", label: "skills", short: "skills", cmd: "cat skills.json", primary: false },
  { id: "education", label: "education", short: "edu", cmd: "cat edu.md", primary: false },
  { id: "certificates", label: "certificates", short: "certs", cmd: "ls ~/certs", primary: false },
  { id: "community", label: "community", short: "community", cmd: "cat volunteer.md", primary: false },
  { id: "contact", label: "contact", short: "contact", cmd: "mail kd", primary: true },
] as const;
