import { icons } from "../constants/helper";
import Home from "../pages/Home";
import WorkExperience from "../pages/WorkExperience";
import ContactUs from "../pages/ContactUs";
import Education from "../pages/Education";
import WebsiteInfo from "../pages/WebsiteInfo";
import Certificate from "../pages/Certificates";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import ExtraCurricular from "../pages/Extracurricular";
import HobbiesAndMore from "../pages/HobbiesAndMore";

export const pages = [
  {
    name: "Home",
    component: Home,
    key: "home",
    icon: icons.home,
    showHeader: false,
  },
  {
    name: "Work Experience",
    component: WorkExperience,
    key: "work",
    icon: icons.work,
    showHeader: true,
  },
  {
    name: "Projects",
    component: Projects,
    key: "project",
    icon: icons.project,
    showHeader: true,
  },
  {
    name: "Education",
    component: Education,
    key: "education",
    icon: icons.education,
    showHeader: true,
  },
  {
    name: "Certificates",
    component: Certificate,
    key: "certificate",
    icon: icons.certificate,
    showHeader: true,
  },
  {
    name: "Skills",
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
    name: "Contact Us",
    component: ContactUs,
    key: "contact",
    icon: icons.contactUs,
    showHeader: false,
  },
  {
    name: "Website Info",
    component: WebsiteInfo,
    key: "about",
    icon: icons.about,
    showHeader: true,
  },
];
