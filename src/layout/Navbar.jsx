import React, { useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { icons } from "../constants/helper";
import useMediaQuery from "@mui/material/useMediaQuery";

const buttons = [
  { name: "Home", icon: icons.home, path: "home" },
  { name: "Work Experience", icon: icons.work, path: "work" },
  { name: "Education", icon: icons.education, path: "education" },
  { name: "Projects", icon: icons.project, path: "project" },
  { name: "Certificates", icon: icons.certificate, path: "certificate" },
  { name: "Contact Us", icon: icons.contactUs, path: "contact" },
];

function Navbar({ scrollToSection }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleButtonClick = (path) => {
    setDrawerOpen(false); // Close the drawer
    setTimeout(() => scrollToSection(path), 200);
  };

  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        m: 1,
        borderRadius: "10px",
        display: "flex",
        justifyContent: isSmallScreen ? "flex-start" : "flex-end",
      }}
    >
      {isSmallScreen ? (
        <>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: 250,
                p: 2,
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {buttons.map((b, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => handleButtonClick(b.path)}>
                      <ListItemIcon>
                        <img
                          src={b.icon}
                          alt={b.name}
                          style={{ height: "24px" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={b.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
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
