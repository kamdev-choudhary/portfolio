import { BootGate } from "@/components/boot-gate";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { About } from "@/components/sections/about";
import { HeroMinimal } from "@/components/variants/hero-minimal";
import { HeroTerminal } from "@/components/variants/hero-terminal";
import { HeroRepl } from "@/components/variants/hero-repl";
import { ExperienceMinimal } from "@/components/variants/experience-minimal";
import { ExperienceTerminal } from "@/components/variants/experience-terminal";
import { ExperienceGitLog } from "@/components/variants/experience-gitlog";
import { getVariant } from "@/lib/variant.server";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Certificates } from "@/components/sections/certificates";
import { Community } from "@/components/sections/community";
import { Contact } from "@/components/sections/contact";
import { contact, education, experience, profile } from "@/content/profile";
import { siteUrl } from "@/lib/env";

/** JSON-LD so search engines and AI crawlers get structured facts. */
function PersonSchema() {
  // single source of truth: "City, Region, Country" in profile.location
  const [locality, region] = profile.location.split(",").map((p) => p.trim());

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${contact.email}`,
    telephone: contact.phoneHref.replace("tel:", ""),
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressRegion: region,
      addressCountry: "IN",
    },
    sameAs: [contact.github, contact.linkedin],
    worksFor: {
      "@type": "Organization",
      name: experience[0].company,
    },
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institute,
    })),
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Full-Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function Home() {
  const variant = await getVariant();

  const Hero =
    variant === "terminal-pro"
      ? HeroRepl
      : variant === "terminal"
        ? HeroTerminal
        : HeroMinimal;

  const Experience =
    variant === "terminal-pro"
      ? ExperienceGitLog
      : variant === "terminal"
        ? ExperienceTerminal
        : ExperienceMinimal;

  return (
    <>
      <PersonSchema />
      {/* the boot screen belongs to the fully-interactive shell only */}
      {variant === "terminal-pro" ? <BootGate /> : null}
      <SiteHeader variant={variant} />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Community />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
