import React, { useRef, useState, useEffect } from "react";
import { Box, Fab, Typography } from "@mui/material";
import { KeyboardArrowUp as ArrowUpIcon } from "@mui/icons-material";
import Navbar from "./Navbar";
import { pages } from "./pages";

// Define types for page references and the section keys
interface PagesRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export default function Layout() {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false); // Track scroll position for "Scroll to Top"

  // Create refs for all pages
  const pagesRefs = useRef<PagesRefs>(
    pages.reduce((acc, { key }) => {
      acc[key] = React.createRef();
      return acc;
    }, {} as PagesRefs)
  ).current;

  // Type for scrollToSection function
  const scrollToSection = (section: string, margin: number = 80): void => {
    const targetRef = pagesRefs[section];
    if (targetRef?.current) {
      const { top } = targetRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY + top - margin;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300); // Show button after 300px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
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
        <Navbar scrollToSection={scrollToSection} />
      </Box>

      {/* Main Content */}
      {pages.map(({ component: Component, key, showHeader, icon, name }) => (
        <Box key={key}>
          {showHeader && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: { xs: 2, sm: 3 },
                px: 2, // padding for better spacing
                py: 1, // padding for vertical space
              }}
              ref={pagesRefs[key]}
            >
              <img src={icon} alt={`${name} Icon`} height="50px" width="auto" />
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
          <Component />
        </Box>
      ))}

      {/* Scroll-to-Top Button */}
      {showScrollToTop && (
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Slight shadow for visibility
          }}
          aria-label="Scroll to Top"
        >
          <ArrowUpIcon />
        </Fab>
      )}
    </Box>
  );
}
