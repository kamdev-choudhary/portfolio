import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Divider,
  styled,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
  Settings,
  People,
  Dashboard,
} from "@mui/icons-material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const drawerWidth = 240;

  const mainItems = [
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "Users", icon: <People /> },
    { text: "Inbox", icon: <Inbox /> },
    { text: "Messages", icon: <Mail /> },
  ];

  const secondaryItems = [{ text: "Settings", icon: <Settings /> }];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? 56 : drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        "& .MuiDrawer-paper": {
          width: isCollapsed ? 56 : drawerWidth,
          overflowX: "hidden",
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List>
        {mainItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={isCollapsed ? item.text : ""} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isCollapsed ? "center" : "initial",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isCollapsed ? "auto" : 3,
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: isCollapsed ? 0 : 1 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {secondaryItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={isCollapsed ? item.text : ""} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isCollapsed ? "center" : "initial",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isCollapsed ? "auto" : 3,
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: isCollapsed ? 0 : 1 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
