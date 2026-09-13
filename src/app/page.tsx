import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
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

export default function Home() {
  return (
    <>
      <PersonSchema />
      <SiteHeader />
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
