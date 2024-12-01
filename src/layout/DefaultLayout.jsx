import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { pages } from "./pages";

export default function DefaultLayout({ toggleTheme, theme }) {
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
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          scrollToSection={scrollToSection}
        />
      </Box>

      {/* Main content */}
      <Box
        sx={{
          paddingTop: "80px",
          // background:
          //   "repeating-linear-gradient(9deg, #fff 0, #fff 5%, transparent 0, transparent 50%), repeating-linear-gradient(180deg, #fff 0, #fff 5%, transparent 0, transparent 50%)",
          // backgroundSize: "8em 8em",
          // bgcolor: "#000",
          // opacity: 1,
        }}
      >
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
    </Box>
  );
}
