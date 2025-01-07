import React, { useRef, useState, useEffect } from "react";
import { Box, Fab } from "@mui/material";
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
      {pages.map(({ component: Component, key }) => (
        <Box key={key}>
          <Box ref={pagesRefs[key]}>
            <Component />
          </Box>
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
