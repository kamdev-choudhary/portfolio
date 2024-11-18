import { Box, Button } from "@mui/material";
import React from "react";
import { icons } from "../constants/helper";
import { motion } from "framer-motion";

const buttons = [
  { name: "Home", icon: icons.home, path: "home" },
  { name: "Work Experience", icon: icons.work, path: "work" },
  { name: "Education", icon: icons.education, path: "education" },
  { name: "Certificates", icon: icons.certificate, path: "certificate" },
  { name: "Contact Us", icon: icons.contactUs, path: "contact" },
  // { name: "About", icon: icons.about, path: "about" },
];

function Navbar({ scrollToSection }) {
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0,0,0,0.1)",
        m: 2,
        borderRadius: "10px",
      }}
    >
      {buttons?.map((b, index) => (
        <React.Fragment key={index}>
          <motion.button
            style={{
              padding: "0.5rem 1rem",
              margin: "4px",
              border: "none",
              backgroundColor: "transparent",

              cursor: "pointer",
            }}
            whileHover={{ scale: 1.1 }}
            initial={{}}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection(b.path)}
          >
            <div style={{ alignItems: "center", display: "flex" }}>
              {<img height="20px" src={b.icon} />}
              <span style={{ marginLeft: "5px" }}>{b.name}</span>
            </div>
          </motion.button>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default Navbar;
