import React, { useRef, useCallback, useEffect } from "react";
import {
  Box,
  Fab,
  useScrollTrigger,
  alpha,
  styled,
  Typography,
} from "@mui/material";
import { KeyboardArrowUp as ArrowUpIcon } from "@mui/icons-material";
import Navbar from "./Navbar";
import { pages } from "./pages";

interface PagesRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

interface ShapeType {
  type: any;
  color: any;
  size: any;
  x: any;
  y: any;
}

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export default function Layout() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  const navbarRef = useRef<HTMLDivElement>(null);
  const pagesRefs = useRef<PagesRefs>(
    pages.reduce((acc, { key }) => {
      acc[key] = React.createRef();
      return acc;
    }, {} as PagesRefs)
  ).current;

  const scrollToSection = useCallback((section: string): void => {
    const targetRef = pagesRefs[section];
    if (targetRef?.current) {
      const navbarHeight = navbarRef.current?.offsetHeight || 64;
      const top = targetRef.current.offsetTop - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const shapes = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 10,
      dx: (Math.random() - 0.5) * 0.5, // Slower movement
      dy: (Math.random() - 0.5) * 0.5, // Slower movement
      type: ["circle", "square", "triangle", "star"][
        Math.floor(Math.random() * 4)
      ],
      color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.8)`,
    }));

    const drawShape = (shape: ShapeType) => {
      ctx.fillStyle = shape.color;
      ctx.beginPath();
      if (shape.type === "circle") {
        ctx.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2);
      } else if (shape.type === "square") {
        ctx.rect(shape.x, shape.y, shape.size, shape.size);
      } else if (shape.type === "triangle") {
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + shape.size, shape.y + shape.size);
        ctx.lineTo(shape.x - shape.size, shape.y + shape.size);
        ctx.closePath();
      } else if (shape.type === "star") {
        for (let i = 0; i < 5; i++) {
          const angle = (Math.PI / 2.5) * i;
          ctx.lineTo(
            shape.x + Math.cos(angle) * shape.size,
            shape.y + Math.sin(angle) * shape.size
          );
        }
        ctx.closePath();
      }
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((shape) => {
        drawShape(shape);
        shape.x += shape.dx;
        shape.y += shape.dy;
        if (shape.x <= 0 || shape.x >= canvas.width) shape.dx *= -1;
        if (shape.y <= 0 || shape.y >= canvas.height) shape.dy *= -1;
      });
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
  }, []);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Dynamic Navbar */}
      <Box
        ref={navbarRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          transition: "all 0.3s ease",
          bgcolor: trigger ? alpha("#ffffff", 0.92) : "transparent",
          backdropFilter: trigger ? "blur(8px)" : "none",
          boxShadow: trigger ? 1 : 0,
        }}
      >
        <Navbar scrollToSection={scrollToSection} />
      </Box>

      {/* Main Content */}
      <Box component="main">
        {pages.map(({ component: Component, key, name, showHeader }) => (
          <Box key={key} ref={pagesRefs[key]}>
            {showHeader && (
              <GradientText
                variant="h3"
                sx={{ fontWeight: 800, mb: 2, textAlign: "center", pt: 8 }}
              >
                {name}
              </GradientText>
            )}
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
          transition: "opacity 0.3s ease, transform 0.2s ease",
          boxShadow: 3,
          "&:hover": { transform: "scale(1.1)" },
        }}
        aria-label="Scroll to Top"
        role="button"
        tabIndex={0}
      >
        <ArrowUpIcon />
      </Fab>
    </Box>
  );
}
