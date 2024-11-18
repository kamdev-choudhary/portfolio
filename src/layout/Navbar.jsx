import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { icons } from "../constants/helper";
import useMediaQuery from "@mui/material/useMediaQuery";

const buttons = [
  { name: "Home", icon: icons.home, path: "home" },
  { name: "Work Experience", icon: icons.work, path: "work" },
  { name: "Education", icon: icons.education, path: "education" },
  { name: "Certificates", icon: icons.certificate, path: "certificate" },
  { name: "Contact Us", icon: icons.contactUs, path: "contact" },
];

function Navbar({ scrollToSection }) {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleOpenMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  const handleButtonClick = (path) => {
    handleCloseMenu(); // Close the menu
    scrollToSection(path);
  };

  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0,0,0,0.1)",
        m: 2,
        borderRadius: "10px",
        display: "flex",
        justifyContent: isSmallScreen ? "flex-start" : "flex-end",
      }}
    >
      {isSmallScreen ? (
        <>
          <IconButton onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleCloseMenu}
          >
            {buttons.map((b, index) => (
              <motion.button
                key={index}
                style={{
                  padding: "0.5rem 1rem",
                  margin: "4px",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  scrollToSection(b.path);
                  handleCloseMenu();
                }}
              >
                <div style={{ alignItems: "center", display: "flex" }}>
                  <img height="20px" src={b.icon} alt={b.name} />
                  <span style={{ marginLeft: "5px" }}>{b.name}</span>
                </div>
              </motion.button>
            ))}
          </Menu>
        </>
      ) : (
        buttons.map((b, index) => (
          <motion.button
            key={index}
            style={{
              padding: "0.5rem 1rem",
              margin: "4px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection(b.path)}
          >
            <div style={{ alignItems: "center", display: "flex" }}>
              <img height="20px" src={b.icon} alt={b.name} />
              <span style={{ marginLeft: "5px" }}>{b.name}</span>
            </div>
          </motion.button>
        ))
      )}
    </Box>
  );
}

export default Navbar;
