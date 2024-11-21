import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
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
import Swal from "sweetalert2";

function DefaultLayout({ toggleTheme }) {
  const sectionRefs = {
    home: useRef(null),
    work: useRef(null),
    contact: useRef(null),
    education: useRef(null),
    about: useRef(null),
    certificate: useRef(null),
    project: useRef(null),
    skills: useRef(null),
    hobbies: useRef(null),
    extra: useRef(null),
  };

  const scrollToSection = (section, margin = 140) => {
    const targetRef = sectionRefs[section];
    if (targetRef?.current) {
      const { top } = targetRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY + top - margin;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    } else {
      Swal.fire(`Section "${section}" not found.`);
    }
  };

  const sections = [
    {
      name: "Home",
      component: <Home />,
      key: "home",
      icon: icons.home,
      showHeader: false,
    },
    {
      name: "Work Experience",
      component: <WorkExperience />,
      key: "work",
      icon: icons.work,
      showHeader: true,
    },
    {
      name: "Projects",
      component: <Projects />,
      key: "project",
      icon: icons.project,
      showHeader: true,
    },
    {
      name: "Education",
      component: <Education />,
      key: "education",
      icon: icons.education,
      showHeader: true,
    },
    {
      name: "Certificates",
      component: <Certificate />,
      key: "certificate",
      icon: icons.certificate,
      showHeader: true,
    },
    {
      name: "Skills",
      component: <Skills />,
      key: "skills",
      icon: icons.skill,
      showHeader: true,
    },
    {
      name: "Hobbies and More",
      component: <HobbiesAndMore />,
      key: "hobbies",
      icon: icons.hobbies,
      showHeader: true,
    },
    {
      name: "Extra Curricular Activities",
      component: <ExtraCurricular />,
      key: "extra",
      icon: icons.extra,
      showHeader: true,
    },
    {
      name: "Contact Us",
      component: <ContactUs />,
      key: "contact",
      icon: icons.contactUs,
      showHeader: false,
    },
    {
      name: "Website Info",
      component: <WebsiteInfo />,
      key: "about",
      icon: icons.about,
      showHeader: false,
    },
  ];

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    marginLeft: "2.5rem",
  };

  const iconStyles = {
    height: "clamp(35px, 5vw, 55px)",
    width: "auto",
  };

  const titleStyles = {
    marginLeft: "0.5rem",
    fontSize: "clamp(2rem, 3vw, 3rem)",
  };

  return (
    <Box
      sx={{
        bgcolor: "background.primary",
        overflowY: "auto",
      }}
    >
      {/* Fixed Navbar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Navbar toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
      </Box>

      {/* Main content */}
      <Box sx={{ paddingTop: "80px" }}>
        {sections.map(({ name, component, key, icon, showHeader }) => (
          <React.Fragment key={key}>
            {showHeader && (
              <Box sx={headerStyles}>
                <img src={icon} alt={`${name} Icon`} style={iconStyles} />
                <Typography sx={titleStyles}>{name}</Typography>
              </Box>
            )}
            <motion.div
              ref={sectionRefs[key]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ padding: { sm: 3, xs: 1.5 } }}>{component}</Box>
            </motion.div>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default DefaultLayout;
