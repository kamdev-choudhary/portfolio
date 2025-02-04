import React from "react";
import {
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { CodeRounded, EmojiObjectsRounded, GitHub } from "@mui/icons-material";
import IconWithName from "../components/IconWithName";
import { website, projectGithub } from "../data/data";

const { packages, icon } = website;

const WebsiteInfo: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Paper>
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
              <ListItemText primary={pkg.name} secondary={pkg.description} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
          Icons:
        </Typography>
        <List sx={{ m: 0, p: 0 }}>
          {icon?.map((ic, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CodeRounded sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary={ic.name} secondary={ic.description} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          I am committed to continuously improving this portfolio website by
          integrating the best tools and libraries to meet modern web standards.
        </Typography>
        <IconWithName
          component="a"
          label="GitHub Repository"
          icon={GitHub}
          href={projectGithub}
        />
      </Paper>
    </Box>
  );
};

export default WebsiteInfo;
