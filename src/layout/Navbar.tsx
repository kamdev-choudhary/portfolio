import { useState } from "react";
import {
  Paper,
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
import React from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { buttons } from "./buttons";
import { useGlobalContext } from "../GlobalProvider";

interface Button {
  name: string;
  path: string;
  icon: string;
}

interface NavbarProps {
  scrollToSection?: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection = () => {} }) => {
  const { theme } = useGlobalContext();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleButtonClick = (path: string) => {
    setDrawerOpen(false);
    setTimeout(() => scrollToSection(path), 200);
  };

  const handleMoreClose = () => setAnchorEl(null);

  // Define NavbarButton prop type
  const NavbarButton: React.FC<{ button: Button }> = ({ button }) => (
    <motion.div
      key={button?.name}
      style={{
        padding: "0.5rem 1rem",
        margin: "4px",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        borderRadius: 100,
      }}
      whileHover={{
        scale: 1.02,
        backgroundColor:
          theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
        borderRadius: 100,
      }}
      transition={{ duration: 0.4 }}
      onClick={() => scrollToSection(button.path)}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", alignContent: "center" }}
      >
        <img height="22px" src={button.icon} alt={button.name} />
        <Typography variant="body2" sx={{ ml: 1 }}>
          {button.name}
        </Typography>
      </Box>
    </motion.div>
  );

  // Define DrawerListItem prop type
  const DrawerListItem: React.FC<{ button: Button }> = ({ button }) => (
    <ListItem disablePadding>
      <ListItemButton onClick={() => handleButtonClick(button.path)}>
        <ListItemIcon>
          <img src={button.icon} alt={button.name} style={{ height: "28px" }} />
        </ListItemIcon>
        <ListItemText primary={button.name} />
      </ListItemButton>
    </ListItem>
  );

  return isSmallScreen ? (
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">Love</Typography>
            <Typography variant="h3"> Drawer. 💞</Typography>
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
        component={Paper}
        elevation={3}
        sx={{
          display: "flex",
          p: 1,
          backdropFilter: "blur(5px)",
          borderRadius: 10,
          paddingX: 4,
          alignItems: "center",
        }}
      >
        {buttons.map((button) => (
          <NavbarButton key={button.name} button={button} />
        ))}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMoreClose}
          disableScrollLock
        >
          {buttons.map((button) => (
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
      </Box>
    </>
  );
};

export default Navbar;
