import React, { useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
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

  return (
    <Box
      sx={{
        bgcolor: "background.primary",
        overflowY: "auto",
      }}
    >
      <Container maxWidth="xl" sx={{ p: 0.5 }}>
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
          }}
        >
          {pages.map(({ name, component, key, icon, showHeader }) => (
            <React.Fragment key={key}>
              {showHeader && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: { xs: 2, sm: 3 },
                    px: 2, // padding for better spacing
                    py: 1, // padding for vertical space
                  }}
                >
                  <img
                    src={icon}
                    alt={`${name} Icon`}
                    height="50px"
                    width="auto"
                  />
                  <Typography
                    sx={{
                      ml: 1, // equivalent to marginLeft
                      fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                      fontWeight: 600, // slightly bolder font for emphasis
                      color: "text.primary", // for text color
                      letterSpacing: 0.5, // a little letter spacing for readability
                    }}
                  >
                    {name}
                  </Typography>
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
      </Container>
    </Box>
  );
}
