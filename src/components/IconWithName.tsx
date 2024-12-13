import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface IconWithNameProps {
  icon: string;
  iconAlt?: string;
  label: string;
  component?: React.ElementType;
  height?: number;
  href?: string;
}

const IconWithName: React.FC<IconWithNameProps> = ({
  icon,
  iconAlt = "image",
  label,
  component = "span",
  height = 20,
  href = "",
}) => {
  return (
    <motion.span
      initial={{ scale: 1, opacity: 1, padding: 10 }}
      whileHover={{ scale: 1.01, opacity: 0.95 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: "0.2rem",
          paddingX: "0.4rem",
          borderRadius: "8px",
          transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            transform: "scale(1.01)",
          },
        }}
      >
        <img src={icon} alt={iconAlt} height={height} />
        {label && (
          <Typography
            component={component}
            href={href || undefined} // Ensure href is undefined if not provided
            sx={{ textDecoration: "none", color: "inherit" }}
            target={href ? "_blank" : undefined} // Open in a new tab if href exists
            rel={href ? "noopener noreferrer" : undefined} // Prevent security vulnerabilities
          >
            {label}
          </Typography>
        )}
      </Box>
    </motion.span>
  );
};

export default IconWithName;
