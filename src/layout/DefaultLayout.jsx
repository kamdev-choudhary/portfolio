import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import WorkExperience from "../pages/WorkExperience";
import ContactUs from "../pages/ContactUs";
import Education from "../pages/Education";
import AboutUs from "../pages/AboutUs";
import { motion } from "framer-motion";

function DefaultLayout() {
  const homeRef = useRef(null);
  const workExperienceRef = useRef(null);
  const contactUsRef = useRef(null);
  const educationRef = useRef(null);
  const aboutUsRef = useRef(null);
  const navbarRef = useRef(null);

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToSection = (section) => {
    let targetRef = null;
    // Determine which section to scroll to
    switch (section) {
      case "home":
        targetRef = homeRef;
        break;
      case "work":
        targetRef = workExperienceRef;
        break;
      case "contact":
        targetRef = contactUsRef;
        break;
      case "education":
        targetRef = educationRef;
        break;
      case "about":
        targetRef = aboutUsRef;
        break;
      default:
        console.warn(`Section "${section}" not found.`);
        return;
    }

    if (targetRef && targetRef.current) {
      // Scroll the target section into view with smooth behavior
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Ensure it scrolls to the top of the section
      });
    }
  };

  const animatedSections = [
    { name: "Home", element: <Home />, ref: homeRef },
    {
      name: "Work Experience",
      element: <WorkExperience />,
      ref: workExperienceRef,
    },
    { name: "Education", element: <Education />, ref: educationRef },
    { name: "Contact Us", element: <ContactUs />, ref: contactUsRef },
    { name: "About Us", element: <AboutUs />, ref: aboutUsRef },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#28844f",
        overflowY: "auto",
      }}
    >
      <motion.div
        ref={navbarRef} // Reference the Navbar to get its height
      >
        <Navbar scrollToSection={scrollToSection} />
      </motion.div>

      {/* Main content with animated sections */}
      <Box>
        {animatedSections.map((section, index) => (
          <motion.div
            key={section.name} // Unique key for each section
            style={{ height: "110vh", padding: "10px" }}
            ref={section.ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {section.element}
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default DefaultLayout;
