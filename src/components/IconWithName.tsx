import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface IconWithNameProps {
  icon: React.ElementType;
  label: string;
  component?: React.ElementType;
  height?: number;
  href?: string;
  color?: string;
  size?: number;
}

const IconWithName: React.FC<IconWithNameProps> = ({
  icon: Icon,
  label,
  component = "span",
  href = "",
  color = "#000",
  size = 25,
}) => {
  const theme = useTheme();

  return (
    <motion.span
      initial={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.005 }}
      whileFocus={{ scale: 1.005, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Box
        component={href ? "a" : "div"}
        href={href || undefined}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          padding: "0.5rem 1rem",
          borderRadius: "12px",
          textDecoration: "none",
          color: "inherit",
          transition: "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            boxShadow: `0 3px 6px ${theme.palette.divider}, 0 2px 4px ${theme.palette.action.disabledBackground}`,
            transform: "scale(1.001)",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        <Icon sx={{ color: color }} size={size} />

        <Typography
          component={component}
          sx={{
            fontWeight: 500,
            fontSize: "0.9rem",
            color: theme.palette.text.primary,
          }}
        >
          {label}
        </Typography>
      </Box>
    </motion.span>
  );
};

export default IconWithName;
