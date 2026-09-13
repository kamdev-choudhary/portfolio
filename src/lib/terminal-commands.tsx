import type { ReactNode } from "react";
import {
  certificates,
  contact,
  education,
  experience,
  extracurricular,
  hobbies,
  navigation,
  profile,
  projects,
  skills,
} from "@/content/profile";

export type CommandContext = {
  goto: (id: string) => void;
  setTheme: (theme: "light" | "dark") => void;
  currentTheme: () => string;
  navigate: (href: string) => void;
  openExternal: (url: string) => void;
  clear: () => void;
  history: string[];
};

export type CommandResult = ReactNode | null;

export type Command = {
  name: string;
  usage: string;
  summary: string;
  /** Extra tokens offered to Tab-completion after the command name. */
  args?: () => string[];
  run: (args: string[], ctx: CommandContext) => CommandResult;
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/* ---------- shared output primitives ---------- */

function Rows({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-0.5">{children}</div>;
}

function Cols({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-0.5 sm:grid-cols-3">
      {items.map((i) => (
        <span key={i} className="text-term-cyan">
          {i}
        </span>
      ))}
    </div>
  );
}

function KV({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="flex gap-2">
      <span className="w-20 shrink-0 text-muted-foreground">{k}</span>
      <span className="min-w-0 break-words">{v}</span>
    </div>
  );
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

export function Hint({ children }: { children: ReactNode }) {
  return <span className="text-muted-foreground">{children}</span>;
}

/* ---------- the filesystem the commands pretend to browse ---------- */

const FILES: Record<string, () => ReactNode> = {
  "about.md": () => (
    <Rows>
      {profile.about.map((p, i) => (
        <p key={i} className="max-w-prose text-pretty">
          {p}
        </p>
      ))}
    </Rows>
  ),
  "skills.json": () => (
    <Rows>
      <span className="text-muted-foreground">{"{"}</span>
      {skills.map((g) => (
        <div key={g.label} className="pl-4">
          <span className="text-term-magenta">&quot;{g.label}&quot;</span>
          <span className="text-muted-foreground">: [</span>
          <span className="text-term-cyan">{g.items.join(", ")}</span>
          <span className="text-muted-foreground">],</span>
        </div>
      ))}
      <span className="text-muted-foreground">{"}"}</span>
    </Rows>
  ),
  "work.log": () => (
    <Rows>
      {experience.flatMap((job) =>
        job.positions.map((p) => (
          <div key={`${job.company}-${p.role}-${p.start}`} className="flex gap-2">
            <span className="shrink-0 text-term-amber">
              {p.start} – {p.end}
            </span>
            <span className="min-w-0">
              {p.role} <Hint>@ {job.company}</Hint>
            </span>
          </div>
        )),
      )}
    </Rows>
  ),
  "education.md": () => (
    <Rows>
      {education.map((e) => (
        <KV
          key={e.level}
          k={e.year}
          v={
            <>
              {e.level}
              {e.stream ? ` — ${e.stream}` : ""} <Hint>· {e.institute}</Hint>{" "}
              <span className="text-primary">{e.grade}</span>
            </>
          }
        />
      ))}
    </Rows>
  ),
  "contact.txt": () => (
    <Rows>
      <KV k="email" v={<Link href={`mailto:${contact.email}`}>{contact.email}</Link>} />
      <KV k="phone" v={<Link href={contact.phoneHref}>{contact.phone}</Link>} />
      <KV k="github" v={<Link href={contact.github}>{contact.githubLabel}</Link>} />
      <KV k="linkedin" v={<Link href={contact.linkedin}>{contact.linkedinLabel}</Link>} />
      <KV k="location" v={profile.location} />
    </Rows>
  ),
  "hobbies.txt": () => <Cols items={hobbies.map((h) => h.name)} />,
};

const DIRS: Record<string, () => ReactNode> = {
  "~": () => (
    <Cols items={[...Object.keys(FILES), "projects/", "certs/", "community/"]} />
  ),
  "~/projects": () => <Cols items={projects.map((p) => `${slug(p.name)}/`)} />,
  "~/certs": () => <Cols items={certificates.map((c) => `${slug(c.name)}.pdf`)} />,
  "~/community": () => <Cols items={extracurricular.map((v) => slug(v.name))} />,
};

function normalizeDir(arg?: string): string {
  if (!arg || arg === "." || arg === "~" || arg === "~/") return "~";
  const cleaned = arg.replace(/\/+$/, "");
  return cleaned.startsWith("~") ? cleaned : `~/${cleaned}`;
}

/* ---------- commands ---------- */

export const COMMANDS: Command[] = [
  {
    name: "help",
    usage: "help",
    summary: "list every command",
    run: () => (
      <Rows>
        <span className="text-muted-foreground">Available commands:</span>
        {COMMANDS.map((c) => (
          <div key={c.name} className="flex gap-2">
            <span className="w-24 shrink-0 text-primary">{c.name}</span>
            <span className="min-w-0">
              {c.summary} <Hint>— {c.usage}</Hint>
            </span>
          </div>
        ))}
        <span className="mt-1 text-muted-foreground">
          Tab completes · ↑ ↓ history · Ctrl+L clears · ? for shortcuts
        </span>
      </Rows>
    ),
  },
  {
    name: "whoami",
    usage: "whoami",
    summary: "who you're talking to",
    run: () => (
      <Rows>
        <span className="text-lg font-bold">{profile.name}</span>
        <span className="text-primary">{profile.title}</span>
        <KV k="at" v={experience[0].company} />
        <KV k="location" v={profile.location} />
        <KV
          k="status"
          v={<span className="text-term-green">open to opportunities</span>}
        />
      </Rows>
    ),
  },
  {
    name: "ls",
    usage: "ls [dir]",
    summary: "list a directory",
    args: () => ["~", "projects", "certs", "community"],
    run: (args) => {
      const dir = normalizeDir(args[0]);
      const render = DIRS[dir];
      if (!render)
        return <span className="text-destructive">ls: {args[0]}: no such directory</span>;
      return render();
    },
  },
  {
    name: "cat",
    usage: "cat <file>",
    summary: "print a file",
    args: () => Object.keys(FILES),
    run: (args) => {
      const file = args[0];
      if (!file) return <Hint>usage: cat &lt;file&gt; — try `ls`</Hint>;
      const render = FILES[file] ?? FILES[`${file}.md`] ?? FILES[`${file}.txt`];
      if (!render)
        return (
          <span className="text-destructive">cat: {file}: no such file</span>
        );
      return render();
    },
  },
  {
    name: "projects",
    usage: "projects",
    summary: "summarise every project",
    run: () => (
      <Rows>
        {projects.map((p) => (
          <div key={p.name} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <span className="w-44 shrink-0 text-term-cyan">{slug(p.name)}</span>
            <span className="min-w-0">
              {p.blurb}{" "}
              {p.live ? <Link href={p.live}>[live]</Link> : null}{" "}
              {p.repo ? <Link href={p.repo}>[src]</Link> : null}
            </span>
          </div>
        ))}
        <Hint>run `open &lt;name&gt;` to visit one</Hint>
      </Rows>
    ),
  },
  {
    name: "open",
    usage: "open <project>",
    summary: "open a project's live site",
    args: () => projects.map((p) => slug(p.name)),
    run: (args, ctx) => {
      const target = args[0];
      if (!target) return <Hint>usage: open &lt;project&gt;</Hint>;
      const match = projects.find((p) => slug(p.name) === target);
      if (!match)
        return (
          <span className="text-destructive">open: {target}: not found</span>
        );
      const url = match.live ?? match.repo;
      if (!url)
        return <span className="text-destructive">open: {target}: no public URL</span>;
      ctx.openExternal(url);
      return (
        <span>
          opening <Link href={url}>{url}</Link> …
        </span>
      );
    },
  },
  {
    name: "goto",
    usage: "goto <section>",
    summary: "scroll to a section",
    args: () => navigation.map((n) => n.id),
    run: (args, ctx) => {
      const id = args[0];
      if (!id) return <Cols items={navigation.map((n) => n.id)} />;
      if (!navigation.some((n) => n.id === id))
        return <span className="text-destructive">goto: {id}: no such section</span>;
      ctx.goto(id);
      return <Hint>scrolling to #{id} …</Hint>;
    },
  },
  {
    name: "resume",
    usage: "resume",
    summary: "open the resume page",
    run: (_a, ctx) => {
      ctx.navigate("/resume");
      return <Hint>opening /resume …</Hint>;
    },
  },
  {
    name: "email",
    usage: "email",
    summary: "start an email",
    run: (_a, ctx) => {
      ctx.openExternal(`mailto:${contact.email}`);
      return (
        <span>
          composing to <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
        </span>
      );
    },
  },
  {
    name: "theme",
    usage: "theme [dark|light]",
    summary: "switch colour scheme",
    args: () => ["dark", "light"],
    run: (args, ctx) => {
      const want = args[0];
      const next =
        want === "dark" || want === "light"
          ? want
          : ctx.currentTheme() === "dark"
            ? "light"
            : "dark";
      ctx.setTheme(next);
      return <Hint>theme → {next}</Hint>;
    },
  },
  {
    name: "history",
    usage: "history",
    summary: "commands you've run",
    run: (_a, ctx) =>
      ctx.history.length ? (
        <Rows>
          {ctx.history.map((h, i) => (
            <div key={i} className="flex gap-3">
              <span className="w-6 shrink-0 text-right text-muted-foreground">
                {i + 1}
              </span>
              <span>{h}</span>
            </div>
          ))}
        </Rows>
      ) : (
        <Hint>no history yet</Hint>
      ),
  },
  {
    name: "clear",
    usage: "clear",
    summary: "clear the screen",
    run: (_a, ctx) => {
      ctx.clear();
      return null;
    },
  },
  {
    name: "sudo",
    usage: "sudo <anything>",
    summary: "nice try",
    run: () => (
      <Rows>
        <span className="text-destructive">
          kd is not in the sudoers file. This incident has been reported.
        </span>
        <Hint>…to nobody. It&apos;s a portfolio.</Hint>
      </Rows>
    ),
  },
];

export const COMMAND_NAMES = COMMANDS.map((c) => c.name);

export function findCommand(name: string): Command | undefined {
  return COMMANDS.find((c) => c.name === name);
}

/** Longest common prefix of the candidates, for Tab completion. */
export function completionFor(input: string): {
  completed: string;
  options: string[];
} {
  const parts = input.split(/\s+/);
  const isFirstWord = parts.length === 1;
  const token = parts[parts.length - 1] ?? "";

  const pool = isFirstWord
    ? COMMAND_NAMES
    : (findCommand(parts[0])?.args?.() ?? []);

  const matches = pool.filter((c) => c.startsWith(token));
  if (matches.length === 0) return { completed: input, options: [] };

  let prefix = matches[0];
  for (const m of matches) {
    while (!m.startsWith(prefix)) prefix = prefix.slice(0, -1);
  }

  const head = parts.slice(0, -1);
  const completed = [...head, prefix].join(" ");
  return { completed, options: matches.length > 1 ? matches : [] };
}
