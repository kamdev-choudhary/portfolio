/** Employment history, newest first. `experience[0]` is treated as the
 *  current employer by the JSON-LD in app/page.tsx. */

export type Position = {
  role: string;
  /** Structured outcomes so headline figures can be derived rather than
   *  hand-maintained. Keep in sync with the prose in `highlights`. */
  metrics?: { scholars?: number };
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
        metrics: { scholars: 240 },
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
        metrics: { scholars: 61 },
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
