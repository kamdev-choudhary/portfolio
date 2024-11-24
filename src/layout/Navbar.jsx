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
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ArrowDropDownRounded,
  DarkModeRounded,
  LightModeRounded,
} from "@mui/icons-material";
import { icons } from "../constants/helper";
import { useGlobalProvider } from "../GlobalProvider";

const buttons = [
  { name: "Home", icon: icons.home, path: "home" },
  { name: "Work Experience", icon: icons.work, path: "work" },
  { name: "Projects", icon: icons.project, path: "project" },
  { name: "Education", icon: icons.education, path: "education" },
  { name: "Certificates", icon: icons.certificate, path: "certificate" },
  { name: "Skills", icon: icons.skill, path: "skills" },
  { name: "Extra Curricular", icon: icons.extra, path: "extra" },
  { name: "Hobbies and More", icon: icons.hobbies, path: "hobbies" },
  { name: "Contact Us", icon: icons.contactUs, path: "contact" },
];

const Navbar = ({ scrollToSection }) => {
  const { theme, toggleTheme } = useGlobalProvider();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [visibleButtonsCount, setVisibleButtonCount] = useState(4);

  const isSmallScreen = useMediaQuery(
    "(min-width: 350px) and (max-width: 600px)"
  ); // Mobile landscape and small tablets
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 900px)"
  ); // Tablets
  const isLargeScreen = useMediaQuery(
    "(min-width: 901px) and (max-width: 1200px)"
  ); // Small desktops
  const isExtraLargeScreen = useMediaQuery(
    "(min-width: 1201px) and (max-width: 1549px)"
  ); // Large desktops
  const isUltraWideScreen = useMediaQuery("(min-width: 1550px)");

  // Adjust `visibleButtonsCount` based on screen size
  useEffect(() => {
    if (isMediumScreen) {
      setVisibleButtonCount(3);
    } else if (isLargeScreen) {
      setVisibleButtonCount(5);
    } else if (isExtraLargeScreen) {
      setVisibleButtonCount(8);
    } else if (isUltraWideScreen) {
      setVisibleButtonCount(buttons.length);
    }
  }, [isMediumScreen, isLargeScreen, isExtraLargeScreen, isUltraWideScreen]);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleButtonClick = (path) => {
    setDrawerOpen(false);
    setTimeout(() => scrollToSection(path), 200);
  };

  const handleMoreClick = (event) => setAnchorEl(event.currentTarget);

  const handleMoreClose = () => setAnchorEl(null);

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
      transition={{ duration: 0.4 }}
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
        // backgroundColor: "rgba(255, 255, 255, 0.6)",
        // backdropFilter: "blur(10px)",
        // border: "1px solid rgba(0, 0, 0, 0.1)",
        m: 0.8,
        borderRadius: "10px",
        display: "flex",
        justifyContent: isSmallScreen ? "space-between" : "flex-end",
        alignItems: "center",
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
        <>
          {buttons.slice(0, visibleButtonsCount).map((button) => (
            <NavbarButton key={button.name} button={button} />
          ))}
          {visibleButtonsCount < buttons.length && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              style={{ cursor: "pointer", margin: "4px" }}
              onClick={handleMoreClick}
            >
              <Typography
                variant="body2"
                sx={{ alignItems: "center", display: "flex" }}
              >
                <ArrowDropDownRounded />
                More
              </Typography>
            </motion.div>
          )}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMoreClose}
            disableScrollLock
          >
            {buttons.slice(visibleButtonsCount).map((button) => (
              <MenuItem
                key={button.name}
                onClick={() => {
                  handleMoreClose();
                  scrollToSection(button.path);
                }}
              >
                <ListItemIcon>
                  <img
                    src={button.icon}
                    alt={button.name}
                    style={{ height: "24px" }}
                  />
                </ListItemIcon>
                <Typography>{button.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}

      <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
        <IconButton onClick={toggleTheme}>
          {theme === "light" ? <LightModeRounded /> : <DarkModeRounded />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
