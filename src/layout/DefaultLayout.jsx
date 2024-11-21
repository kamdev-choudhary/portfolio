import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import WorkExperience from "../pages/WorkExperience";
import ContactUs from "../pages/ContactUs";
import Education from "../pages/Education";
import WebsiteInfo from "../pages/WebsiteInfo";
import Certificate from "../pages/Certificates";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { motion } from "framer-motion";
import { icons } from "../constants/helper";

function DefaultLayout({ toggleTheme }) {
  const homeRef = useRef(null);
  const workExperienceRef = useRef(null);
  const contactUsRef = useRef(null);
  const educationRef = useRef(null);
  const aboutUsRef = useRef(null);
  const certificateRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);

  // Scroll function with a switch case for smooth scroll to target section
  const scrollToSection = (section, margin = 140) => {
    const targetRefMap = {
      home: homeRef,
      work: workExperienceRef,
      contact: contactUsRef,
      education: educationRef,
      about: aboutUsRef,
      certificate: certificateRef,
      project: projectRef,
      skills: skillRef,
    };

    const targetRef = targetRefMap[section];

    if (targetRef && targetRef.current) {
      const offsetTop = targetRef.current.offsetTop;
      const scrollPosition = offsetTop - margin;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Section "${section}" not found.`);
    }
  };

  const sections = [
    {
      name: "Home",
      component: <Home />,
      ref: homeRef,
      icon: icons.home,
      showHeader: false,
    },
    {
      name: "Work Experience",
      component: <WorkExperience />,
      ref: workExperienceRef,
      icon: icons.work,
      showHeader: true,
    },
    {
      name: "Projects",
      component: <Projects />,
      ref: projectRef,
      icon: icons.project,
      showHeader: true,
    },
    {
      name: "Education",
      component: <Education />,
      ref: educationRef,
      icon: icons.education,
      showHeader: true,
    },
    {
      name: "Certificate",
      component: <Certificate />,
      ref: certificateRef,
      icon: icons.certificate,
      showHeader: true,
    },
    {
      name: "Skills",
      component: <Skills />,
      ref: skillRef,
      icon: icons.skill,
      showHeader: true,
    },

    {
      name: "Contact Us",
      component: <ContactUs />,
      ref: contactUsRef,
      icon: icons.contactUs,
      showHeader: false,
    },
    {
      name: "About Us",
      component: <WebsiteInfo />,
      ref: aboutUsRef,
      icon: icons.about,
      showHeader: false,
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.primary", //backgrou Optimized gradient background
        overflowY: "auto",
      }}
    >
      {/* Navbar with fixed positioning */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000, // Ensure it stays on top of other elements
        }}
      >
        <Navbar toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
      </Box>

      {/* Main content with padding to account for the fixed Navbar */}
      <Box
        sx={{
          paddingTop: "80px",
        }}
      >
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {section.showHeader && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  ml: 2.5,
                }}
              >
                <img
                  src={section?.icon}
                  style={{
                    height: "clamp(30px, 5vw, 45px)",
                    width: "auto",
                  }}
                  alt={`${section.name} Icon`}
                />
                <Typography
                  sx={{
                    ml: 2,
                    fontSize: "clamp(1.8rem, 3vw, 3.5rem)",
                  }}
                  variant="h4"
                >
                  {section.name}
                </Typography>
              </Box>
            )}
            <motion.div
              key={section.name}
              ref={section.ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ padding: { sm: 3, xs: 1.5 } }}>
                {section.component}
              </Box>
            </motion.div>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default DefaultLayout;
