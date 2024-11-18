import React, { useRef } from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Home from "../pages/Home/Home";
import WorkExperience from "../pages/work/WorkExperience";
import ContactUs from "../pages/contact/ContactUs";
import Education from "../pages/academic/Education";
import AboutUs from "../pages/about/AboutUs";
import Certificate from "../pages/academic/Certificates";
import { motion } from "framer-motion";

function DefaultLayout() {
  const homeRef = useRef(null);
  const workExperienceRef = useRef(null);
  const contactUsRef = useRef(null);
  const educationRef = useRef(null);
  const aboutUsRef = useRef(null);
  const certificateRef = useRef(null);

  // Scroll function with a switch case for smooth scroll to target section
  const scrollToSection = (section) => {
    const targetRefMap = {
      home: homeRef,
      work: workExperienceRef,
      contact: contactUsRef,
      education: educationRef,
      about: aboutUsRef,
      certificate: certificateRef,
    };

    const targetRef = targetRefMap[section];

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Ensure it scrolls to the top of the section
      });
    } else {
      console.warn(`Section "${section}" not found.`);
    }
  };

  const sections = [
    { name: "Home", component: <Home />, ref: homeRef },
    {
      name: "Work Experience",
      component: <WorkExperience />,
      ref: workExperienceRef,
    },
    { name: "Education", component: <Education />, ref: educationRef },
    { name: "Certificate", component: <Certificate />, ref: certificateRef },
    { name: "Contact Us", component: <ContactUs />, ref: contactUsRef },
    { name: "About Us", component: <AboutUs />, ref: aboutUsRef },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#CB9DF0", // Optimized gradient background
        overflowY: "auto",
      }}
    >
      <motion.div>
        <Navbar scrollToSection={scrollToSection} />
      </motion.div>

      {/* Main content with animated sections */}
      <Box>
        {sections.map((section) => (
          <motion.div
            key={section.name}
            ref={section.ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ padding: "20px" }} // Added more space for visual balance
          >
            {section.component}
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default DefaultLayout;
