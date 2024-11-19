import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { icons } from "../constants/helper";

const buttons = [
  { name: "Home", icon: icons.home, path: "home" },
  { name: "Work Experience", icon: icons.work, path: "work" },
  { name: "Education", icon: icons.education, path: "education" },
  { name: "Projects", icon: icons.project, path: "project" },
  { name: "Skills", icon: icons.skill, path: "skills" },
  { name: "Certificates", icon: icons.certificate, path: "certificate" },
  { name: "Contact Us", icon: icons.contactUs, path: "contact" },
];

const Navbar = ({ scrollToSection, toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [theme, setTheme] = useState("light");

  const getLocalTheme = () => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "light" || localTheme === "dark") {
      setTheme(localTheme);
    }
  };

  useEffect(() => {
    // Retrieve theme from localStorage
    getLocalTheme();
  }, []);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleButtonClick = (path) => {
    setDrawerOpen(false);
    setTimeout(() => scrollToSection(path), 200);
  };

  const NavbarButton = ({ button }) => (
    <motion.div
      key={button.name}
      style={{
        padding: "0.5rem 1rem",
        margin: "4px",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      onClick={() => scrollToSection(button.path)}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img height="25px" src={button.icon} alt={button.name} />
        <Typography variant="body2" sx={{ ml: 1 }}>
          {button.name}
        </Typography>
      </Box>
    </motion.div>
  );

  const DrawerListItem = ({ button }) => (
    <ListItem disablePadding>
      <ListItemButton onClick={() => handleButtonClick(button.path)}>
        <ListItemIcon>
          <img src={button.icon} alt={button.name} style={{ height: "24px" }} />
        </ListItemIcon>
        <ListItemText primary={button.name} />
      </ListItemButton>
    </ListItem>
  );

  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        m: 1,
        borderRadius: "10px",
        display: "flex",
        justifyContent: isSmallScreen ? "space-between" : "flex-end",
      }}
    >
      {isSmallScreen ? (
        <>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250, p: 2 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {buttons.map((button) => (
                  <DrawerListItem key={button.name} button={button} />
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        buttons.map((button) => (
          <NavbarButton key={button.name} button={button} />
        ))
      )}

      <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
        <IconButton
          onClick={() => {
            toggleTheme();
            getLocalTheme();
          }}
        >
          {theme === "light" ? <LightModeRounded /> : <DarkModeRounded />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
