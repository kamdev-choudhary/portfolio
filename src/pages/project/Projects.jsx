import {
  Box,
  Divider,
  Grid2 as Grid,
  Paper,
  Typography,
  Chip,
} from "@mui/material";
import React from "react";
import { icons } from "../../constants/helper";
import projects from "../../data/project.json";

function Projects() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <img
          alt="Work Experience"
          src={icons.project}
          style={{
            height: "clamp(40px, 5vw, 65px)", // Minimum: 40px, Maximum: 65px, Responsive: 5% of viewport width
            width: "auto",
          }}
        />
        <Typography
          sx={{
            ml: 2,
            fontSize: "clamp(1.8rem, 3vw, 3.5rem)", // Minimum: 1.5rem, Maximum: 2.5rem, Responsive: 3% of viewport width
          }}
          variant="h3"
        >
          Projects
        </Typography>
      </Box>
      {projects?.map((p, index) => (
        <Box key={index} component={Paper} sx={{ p: 2, height: "100%" }}>
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
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {p.technologies_used.map((tech, i) => (
              <Chip key={i} label={tech} size="small" />
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
          <ul>
            {p.skills_gained.map((skill, i) => (
              <li key={i}>
                <Typography variant="body1">{skill}</Typography>
              </li>
            ))}
          </ul>

          <Divider sx={{ my: 1 }} />

          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Collaborators:
          </Typography>
          <ul>
            {p.collaborators.map((collaborator, i) => (
              <li key={i}>
                <Typography variant="body1">
                  {collaborator.name} ({collaborator.role})
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
            Completion Date:
          </Typography>
          <Typography variant="body1">{p.completion_date}</Typography>

          <Divider sx={{ my: 1 }} />

          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Project Links:
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              variant="body1"
              href={p.links.live_project}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
            >
              Live Project
            </Typography>
            <Typography
              variant="body1"
              component="a"
              href={p.links.github_repository}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ alignItems: "center", display: "flex", gap: 1 }}
            >
              <img src={icons.github} height={20} />
              GitHub Repository
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default Projects;
