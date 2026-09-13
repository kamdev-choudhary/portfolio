/** Capabilities grouped by where they sit in the stack. */

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
