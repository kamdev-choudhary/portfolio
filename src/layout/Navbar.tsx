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
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowDropDownRounded } from "@mui/icons-material";
import { useGlobalContext } from "../GlobalProvider";
import { buttons } from "./buttons";

// Define types for button and props

interface NavbarProps {
  scrollToSection: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const { theme } = useGlobalContext();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [visibleButtonsCount, setVisibleButtonCount] = useState<number>(4);

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

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleButtonClick = (path: string) => {
    setDrawerOpen(false);
    setTimeout(() => scrollToSection(path), 200);
  };

  const handleMoreClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleMoreClose = () => setAnchorEl(null);

  const NavbarButton: React.FC<{ button: any }> = ({ button }) => (
    <motion.div
      key={button.name}
      style={{
        padding: "0.5rem 1rem",
        margin: "4px",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        borderRadius: 100,
      }}
      whileHover={{
        scale: 1.03,
        backgroundColor: theme === "dark" ? "rgba(255,255,255,0.2)" : "#EBEAFF",
        borderRadius: 100,
      }}
      transition={{ duration: 0.4 }}
      onClick={() => scrollToSection(button.path)}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", alignContent: "center" }}
      >
        <button.icon sx={{ color: button.color }} size={button.size} />
        <Typography
          variant="body2"
          sx={{ ml: 1, mixBlendMode: "difference", color: "white" }}
        >
          {button.name}
        </Typography>
      </Box>
    </motion.div>
  );

  const DrawerListItem: React.FC<{ button: any }> = ({ button }) => (
    <ListItem
      sx={{ bgcolor: "#f1f3fb", mb: 0.5, borderRadius: 1 }}
      disablePadding
    >
      <ListItemButton onClick={() => handleButtonClick(button.path)}>
        <ListItemIcon>
          <button.icon sx={{ color: button.color }} size={button.size} />
        </ListItemIcon>
        <ListItemText primary={button.name} />
      </ListItemButton>
    </ListItem>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        m: 1,
        borderRadius: isSmallScreen ? 10 : 2,
        p: isSmallScreen ? 1 : "inherit",
      }}
    >
      {isSmallScreen ? (
        <>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#1565c0",
                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
                  }}
                  variant="h4"
                >
                  Portfolio
                </Typography>
              </Box>
              <Divider />
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
          <Box
            sx={{
              display: "flex",
              py: 0.5,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
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
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    mixBlendMode: "difference",
                    color: "white",
                  }}
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
                    <button.icon
                      size={button.size}
                      sx={{ color: button.color }}
                    />
                  </ListItemIcon>
                  <Typography>{button.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Navbar;
