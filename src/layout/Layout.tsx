import React, { useRef, useState, useEffect } from "react";
import { Box, Fab, useScrollTrigger, alpha } from "@mui/material";
import { KeyboardArrowUp as ArrowUpIcon } from "@mui/icons-material";
import Navbar from "./Navbar";
import { pages } from "./pages";

interface PagesRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export default function Layout() {
  const [navBackground, setNavBackground] = useState<boolean>(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  const pagesRefs = useRef<PagesRefs>(
    pages.reduce((acc, { key }) => {
      acc[key] = React.createRef();
      return acc;
    }, {} as PagesRefs)
  ).current;

  const scrollToSection = (section: string): void => {
    const targetRef = pagesRefs[section];
    if (targetRef?.current) {
      const navbarHeight = 64; // Match your Navbar height
      const top = targetRef.current.offsetTop - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,rgba(187, 234, 245, 0.76),rgb(242, 234, 250))",
      }}
    >
      {/* Fixed Navbar with smooth transitions */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          transition: "all 0.3s ease",
          bgcolor: navBackground ? alpha("#ffffff", 0.92) : "transparent",
          backdropFilter: navBackground ? "blur(8px)" : "none",
          boxShadow: navBackground ? 1 : 0,
        }}
      >
        <Navbar scrollToSection={scrollToSection} />
      </Box>

      {/* Main Content with proper spacing */}
      <Box component="main">
        {pages.map(({ component: Component, key }) => (
          <Box key={key} ref={pagesRefs[key]}>
            <Component />
          </Box>
        ))}
      </Box>

      {/* Scroll-to-Top Button */}
      <Fab
        color="primary"
        size="medium"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          opacity: trigger ? 1 : 0,
          transition: "opacity 0.3s ease",
          boxShadow: 3,
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        aria-label="Scroll to Top"
      >
        <ArrowUpIcon />
      </Fab>
    </Box>
  );
}
