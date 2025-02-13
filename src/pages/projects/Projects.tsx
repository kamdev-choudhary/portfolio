import React from "react";
import {
  Box,
  Typography,
  Chip,
  Avatar,
  IconButton,
  useTheme,
  styled,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CodeRounded,
  LinkRounded,
  GitHub,
  ArrowOutwardRounded,
} from "@mui/icons-material";
import { projects } from "../../data/data";

const ProjectCard = styled(Paper)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  padding: "2rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[6],
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: 600,
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  mb: 1.5,
}));

const BulletList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  paddingLeft: "1.5rem",
  "& li": {
    position: "relative",
    marginBottom: "0.5rem",
    "&:before": {
      content: '"▹"',
      position: "absolute",
      left: "-1.5rem",
      color: theme.palette.primary.main,
    },
  },
}));

const Projects: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        p: 3,
        mx: "auto",
      }}
    >
      {projects?.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProjectCard elevation={0}>
            {/* Project Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                mb: 3,
              }}
            >
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: "transparent",
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                <CodeRounded fontSize="medium" />
              </Avatar>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.secondary",
                    mt: 0.5,
                  }}
                >
                  {project.time}
                </Typography>
              </Box>
            </Box>

            {/* Project Content */}
            <Box sx={{ display: "grid", gap: 3 }}>
              {/* Description */}
              <Box>
                <SectionTitle>Project Overview</SectionTitle>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: "text.secondary",
                  }}
                >
                  {project.description}
                </Typography>
              </Box>

              {/* Technologies & Skills */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ flex: 1, minWidth: "250px" }}>
                  <SectionTitle>Tech Stack</SectionTitle>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.technologies_used.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        variant="outlined"
                        sx={{
                          borderRadius: "6px",
                          borderColor: theme.palette.primary.main,
                          background: "transparent",
                          "&:hover": {
                            background: theme.palette.primary.main,
                            color: "white",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ flex: 1, minWidth: "250px" }}>
                  <SectionTitle>Skills Developed</SectionTitle>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.skills_gained.map((skill, i) => (
                      <Chip
                        key={i}
                        label={skill}
                        variant="outlined"
                        sx={{
                          borderRadius: "6px",
                          borderColor: theme.palette.secondary.main,
                          background: "transparent",
                          "&:hover": {
                            background: theme.palette.secondary.main,
                            color: "white",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Responsibilities & Features */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                <Box sx={{ flex: 1, minWidth: "300px" }}>
                  <SectionTitle>Key Contributions</SectionTitle>
                  <BulletList>
                    {project.responsibilities.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </BulletList>
                </Box>

                <Box sx={{ flex: 1, minWidth: "300px" }}>
                  <SectionTitle>Notable Features</SectionTitle>
                  <BulletList>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </BulletList>
                </Box>
              </Box>

              {/* Impact & Links */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                <Box sx={{ flex: 1, minWidth: "300px" }}>
                  <SectionTitle>Project Impact</SectionTitle>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      color: "text.secondary",
                    }}
                  >
                    {project.outcome_impact}
                  </Typography>
                </Box>

                <Box sx={{ flex: 1, minWidth: "300px" }}>
                  <SectionTitle>Project Links</SectionTitle>
                  <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                    <IconButton
                      href={project.links.github_repository}
                      target="_blank"
                      sx={{
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                          background: theme.palette.primary.main,
                          color: "white",
                        },
                      }}
                    >
                      <GitHub fontSize="medium" />
                    </IconButton>
                    <IconButton
                      href={project.links.live_project}
                      target="_blank"
                      sx={{
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                          background: theme.palette.secondary.main,
                          color: "white",
                        },
                      }}
                    >
                      <LinkRounded fontSize="medium" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              {/* Completion Date */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 2,
                }}
              >
                <ArrowOutwardRounded color="primary" />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "text.secondary",
                  }}
                >
                  Completed on {project.completion_date}
                </Typography>
              </Box>
            </Box>
          </ProjectCard>
        </motion.div>
      ))}
    </Box>
  );
};

export default Projects;
