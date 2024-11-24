import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, Button, Fab } from "@mui/material";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { pages } from "./pages";
import { ArrowUpwardRounded } from "@mui/icons-material";

export default function DefaultLayout({ toggleTheme, theme }) {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  // Automatically create refs based on pages keys
  const pagesRefs = useRef(
    pages.reduce((acc, { key }) => {
      acc[key] = React.createRef();
      return acc;
    }, {})
  ).current;

  const scrollToSection = (section, margin = 140) => {
    const targetRef = pagesRefs[section];
    if (targetRef?.current) {
      const { top } = targetRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY + top - margin;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const homeRef = pagesRefs["home"];
    if (!homeRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 } // Adjust threshold as needed
    );

    observer.observe(homeRef.current);

    return () => {
      observer.disconnect();
    };
  }, [pagesRefs]);

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    marginLeft: { xs: 2, sm: 3 },
  };

  const iconStyles = {
    height: "clamp(35px, 5vw, 55px)",
    width: "auto",
  };

  const titleStyles = {
    marginLeft: "0.5rem",
    fontSize: "clamp(2rem, 3vw, 2.5rem)",
  };

  return (
    <Box
      sx={{
        bgcolor: "background.primary",
        overflowY: "auto",
      }}
    >
      {/* Fixed Navbar */}
      <Box>
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          scrollToSection={scrollToSection}
        />
      </Box>

      {/* Main content */}
      <Box>
        {pages.map(({ name, component, key, icon, showHeader }) => (
          <React.Fragment key={key}>
            {showHeader && (
              <Box sx={headerStyles}>
                <img src={icon} alt={`${name} Icon`} style={iconStyles} />
                <Typography sx={titleStyles}>{name}</Typography>
              </Box>
            )}
            <motion.div
              ref={pagesRefs[key]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {component}
            </motion.div>
          </React.Fragment>
        ))}
      </Box>

      {/* Conditional Button */}
      {!isHomeVisible && (
        <Fab
          onClick={() => scrollToSection("home")}
          color="primary"
          aria-label="top"
          sx={{ position: "fixed", bottom: 15, right: 16 }}
        >
          <ArrowUpwardRounded />
        </Fab>
      )}
    </Box>
  );
}
