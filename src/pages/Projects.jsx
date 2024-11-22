import {
  Box,
  Divider,
  Paper,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import { icons } from "../constants/helper";
import { projects } from "../data/data.json";

function Projects() {
  return (
    <Box sx={{ p: 2 }}>
      {projects?.map((p, index) => (
        <Box
          key={index}
          component={Paper}
          elevation={4}
          sx={{ p: 2, height: "100%", borderRadius: 2 }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {p.name}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Time Taken:
          </Typography>
          <Typography variant="body1">{p.time}</Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
            Description:
          </Typography>
          <Typography variant="body1" paragraph>
            {p.description}
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Technologies Used:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
            {p.technologies_used.map((tech, i) => (
              <Chip
                // variant="outlined"
                color="success"
                sx={{ p: 2 }}
                key={i}
                label={tech}
                size="small"
              />
            ))}
          </Box>

          <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
            Responsibilities:
          </Typography>
          <ul>
            {p.responsibilities.map((task, i) => (
              <li key={i}>
                <Typography variant="body1">{task}</Typography>
              </li>
            ))}
          </ul>

          <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
            Key Features:
          </Typography>
          <ul>
            {p.features.map((feature, i) => (
              <li key={i}>
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </ul>

          <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
            Outcome/Impact:
          </Typography>
          <Typography variant="body1" paragraph>
            {p.outcome_impact}
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
            Skills Gained:
          </Typography>

          <Box sx={{ display: "flex", gap: 2, my: 1.5, flexWrap: "wrap" }}>
            {p.skills_gained.map((skill, i) => (
              <Chip color="secondary" variant="outlined" label={skill} />
            ))}
          </Box>

          <Divider sx={{ my: 1 }} />

          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Collaborators:
          </Typography>
          <List sx={{ p: 0 }}>
            {p.collaborators.map((collaborator, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={collaborator.name}
                  secondary={collaborator.role}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Completion Date:
            </Typography>
            <Typography variant="body1">{p.completion_date}</Typography>
          </Box>

          <Divider sx={{ my: 1 }} />

          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Project Links:
            </Typography>
            <Typography
              variant="body1"
              href={p.links.live_project}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              sx={{
                alignItems: "center",
                display: "flex",
                gap: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img src={icons.live} height={20} />
              Live Project
            </Typography>
            <Typography
              variant="body1"
              component="a"
              href={p.links.github_repository}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                alignItems: "center",
                display: "flex",
                gap: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img src={icons.github} height={20} />
              GitHub Repository
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Projects;
