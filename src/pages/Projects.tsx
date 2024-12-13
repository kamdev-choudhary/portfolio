import React from "react";
import {
  Box,
  Divider,
  Paper,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { icons } from "../constants/helper";
import IconWithName from "../components/IconWithName";
import { projects } from "../data/data";

const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        p: { sm: 2, xs: 1 },
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {projects?.map((p, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 2,
              borderRadius: 4,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
              ":hover": { boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)" },
            }}
          >
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 48,
                  height: 48,
                  color: "white",
                }}
              >
                {p.name.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {p.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {p.time}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Description */}
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
              Description:
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {p.description}
            </Typography>

            {/* Technologies Used */}
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
              Technologies Used:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {p.technologies_used.map((tech, i) => (
                <Chip
                  key={i}
                  label={tech}
                  color="success"
                  size="small"
                  sx={{
                    p: 2,
                    bgcolor: "success.light",
                    color: "white",
                  }}
                />
              ))}
            </Box>

            {/* Responsibilities */}
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
              Responsibilities:
            </Typography>
            <List sx={{ pl: 2, mb: 2 }}>
              {p.responsibilities.map((task, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemText primary={`• ${task}`} />
                </ListItem>
              ))}
            </List>

            {/* Features */}
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
              Key Features:
            </Typography>
            <List sx={{ pl: 2, mb: 2 }}>
              {p.features.map((feature, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemText primary={`• ${feature}`} />
                </ListItem>
              ))}
            </List>

            {/* Outcome/Impact */}
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
              Outcome/Impact:
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {p.outcome_impact}
            </Typography>

            {/* Skills Gained */}
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
              Skills Gained:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {p.skills_gained.map((skill, i) => (
                <Chip
                  key={i}
                  label={skill}
                  size="small"
                  sx={{ p: 2, bgcolor: "info.light", color: "white" }}
                />
              ))}
            </Box>

            {/* Collaborators */}
            {p?.collaborators && (
              <>
                <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
                  Collaborators:
                </Typography>
                <List sx={{ m: 0, p: 0 }}>
                  {p.collaborators.map((collaborator, i) => (
                    <ListItem key={i}>
                      <ListItemText
                        primary={collaborator.name}
                        secondary={collaborator.role}
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            )}

            {/* Completion Date */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                mb: 2,
                alignItems: "center",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Completion Date:
              </Typography>
              <Typography variant="body2">{p.completion_date}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Project Links */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Project Links:
              </Typography>
              <IconWithName
                icon={icons.live}
                label="Live Project"
                href={p.links.live_project}
                component="a"
              />
              <IconWithName
                icon={icons.github}
                label="GitHub Repository"
                href={p.links.github_repository}
                component="a"
              />
            </Box>
          </Paper>
        </motion.div>
      ))}
    </Box>
  );
};

export default Projects;
