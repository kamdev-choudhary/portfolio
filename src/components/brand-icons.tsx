import * as React from "react";
import type { IconType } from "react-icons";
import { FaAws, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  SiAxios,
  SiCoursera,
  SiCss,
  SiExpo,
  SiExpress,
  SiFramer,
  SiGit,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLodash,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiGooglemaps,
  SiSocketdotio,
} from "react-icons/si";

/** Social/brand marks used in headers, footers and contact cards.
 *  Simple Icons dropped LinkedIn and AWS over trademark requests, so those
 *  two come from Font Awesome's brand set instead. */
export const Brand = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  aws: FaAws,
} satisfies Record<string, IconType>;

/** Lowercased technology name -> brand mark. Anything not listed here simply
 *  renders as a text badge, which is the correct fallback for trademark-
 *  restricted marks (Microsoft, Adobe) and for non-software skills. */
const TECH: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss,
  sql: SiMysql,
  react: SiReact,
  "react native": SiExpo,
  "next.js": SiNextdotjs,
  "next.js 16": SiNextdotjs,
  "react 19": SiReact,
  redux: SiRedux,
  mui: SiMui,
  "tailwind css": SiTailwindcss,
  "tailwind css v4": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "framer motion": SiFramer,
  "node.js": SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  "jwt / crypto": SiJsonwebtokens,
  crypto: SiJsonwebtokens,
  "aws s3": FaAws,
  vercel: SiVercel,
  git: SiGit,
  github: FaGithub,
  "google cloud console": SiGooglecloud,
  "google cloud": SiGooglecloud,
  axios: SiAxios,
  lodash: SiLodash,
  coursera: SiCoursera,
  vite: SiVite,
  "google maps": SiGooglemaps,
  "socket.io": SiSocketdotio,
  "llm apis": SiJsonwebtokens,
};

export function techIcon(name: string): IconType | undefined {
  return TECH[name.trim().toLowerCase()];
}

/** Renders a looked-up brand mark.
 *  Passing the component in as a lowercase prop keeps it out of render-time
 *  component creation, which React's compiler lint rules flag. */
export function BrandGlyph({
  icon,
  className,
}: {
  icon: IconType;
  className?: string;
}) {
  return React.createElement(icon, { className, "aria-hidden": true });
}
