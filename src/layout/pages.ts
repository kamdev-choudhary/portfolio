import { icons } from "../constants/helper";
import Home from "../pages/home/Home";
import WorkExperience from "../pages/work-experience/WorkExperience";
import ContactUs from "../pages/contact-me/ContactUs";
import Education from "../pages/education/Education";
import WebsiteInfo from "../pages/website-info/WebsiteInfo";
import Certificates from "../pages/certificates/Certificates";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";
import ExtraCurricular from "../pages/extra-curricular/Extracurricular";
import HobbiesAndMore from "../pages/hobbies/HobbiesAndMore";

export const pages = [
  {
    name: "Home",
    component: Home,
    key: "home",
    icon: icons.home,
    showHeader: false,
  },
  {
    name: "Professional Journey",
    component: WorkExperience,
    key: "work",
    icon: icons.work,
    showHeader: true,
  },
  {
    name: "Featured Projects",
    component: Projects,
    key: "project",
    icon: icons.project,
    showHeader: true,
  },
  {
    name: "Academic Journey",
    component: Education,
    key: "education",
    icon: icons.education,
    showHeader: true,
  },
  {
    name: "Certifications",
    component: Certificates,
    key: "certificate",
    icon: icons.certificate,
    showHeader: true,
  },
  {
    name: "Skills & Expertise",
    component: Skills,
    key: "skills",
    icon: icons.skill,
    showHeader: true,
  },
  {
    name: "Extra Curricular Activities",
    component: ExtraCurricular,
    key: "extra",
    icon: icons.extra,
    showHeader: true,
  },
  {
    name: "Hobbies and More",
    component: HobbiesAndMore,
    key: "hobbies",
    icon: icons.hobbies,
    showHeader: true,
  },

  {
    name: "Contact Me",
    component: ContactUs,
    key: "contact",
    icon: icons.contactUs,
    showHeader: true,
  },
  {
    name: "Website Info",
    component: WebsiteInfo,
    key: "about",
    icon: icons.about,
    showHeader: true,
  },
];
