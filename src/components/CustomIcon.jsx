import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function CustomIcon({ icon, href, size = 30 }) {
  return (
    <motion.img
      whileHover={{ scale: 1.1, opacity: 0.9 }}
      style={{
        cursor: "pointer",
        border: "1px solid gradient(right #145887 #411474)",
      }}
      src={icon || ""}
      alt="icon"
      height={size}
      width={size}
    />
  );
}

export default CustomIcon;
