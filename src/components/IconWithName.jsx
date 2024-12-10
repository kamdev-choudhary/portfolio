import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function IconWithName({
  icon,
  iconAlt = "image",
  label,
  component = "",
  height = 20,
  href = "",
}) {
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
          padding: "0.2rem", // Ensure padding is constant
          paddingX: "0.4rem",
          borderRadius: "8px", // Rounded corners for hover effect
          transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Subtle shadow
            transform: "scale(1.01)", // Use transform for a zoom effect
            paddingX: "0.4rem",
          },
        }}
      >
        <img src={icon} alt={iconAlt} height={height} />
        {label && (
          <Typography
            component={component}
            href={href}
            sx={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </Typography>
        )}
      </Box>
    </motion.span>
  );
}

export default IconWithName;
