import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CodeRounded, EmojiObjectsRounded } from "@mui/icons-material";
import { icons } from "../constants/helper";
import IconWithName from "../components/IconWithName";
import { website, projectGithub } from "../data/data.json";

const { packages, icon } = website;

function WebsiteInfo() {
  return (
    <Box sx={{ p: { sm: 3, xs: 2 } }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        About This Website
      </Typography>
      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 4,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          ":hover": { boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)" },
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          This website is built using React and Vite, ensuring a fast and smooth
          user experience. It leverages modern web development practices to
          provide a responsive and feature-rich interface.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
          Key Technologies and Packages Used:
        </Typography>
        <List>
          {packages.map((pkg, index) => (
            <ListItem key={index} sx={{ p: 0 }}>
              <ListItemIcon>
                <EmojiObjectsRounded sx={{ color: "secondary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary={pkg.name}
                secondary={pkg.description}
                primaryTypographyProps={{ fontWeight: "bold" }}
                secondaryTypographyProps={{ variant: "body2" }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
          Icons:
        </Typography>
        <List sx={{ m: 0, p: 0 }}>
          <ListItem>
            <ListItemIcon>
              <CodeRounded sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary={icon.name}
              secondary={icon.description}
              primaryTypographyProps={{ fontWeight: "bold" }}
              secondaryTypographyProps={{ variant: "body2" }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeRounded sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary="MUI Icons"
              secondary="MUI provides beutiful material icons"
              primaryTypographyProps={{ fontWeight: "bold" }}
              secondaryTypographyProps={{ variant: "body2" }}
            />
          </ListItem>
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          I am committed to continuously improving this portfolio website by
          integrating the best tools and libraries to meet modern web standards.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Explore the code:
          </Typography>
          <IconWithName
            component="a"
            label="GitHub Repository"
            icon={icons.github}
            href={projectGithub}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default WebsiteInfo;
