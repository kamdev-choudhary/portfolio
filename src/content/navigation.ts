/** Section order for the nav, command palette and keyboard nav.
 *  `primary` items appear in the desktop header bar. */

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
