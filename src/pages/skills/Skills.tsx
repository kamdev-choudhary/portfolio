import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  useTheme,
  styled,
  Paper,
} from "@mui/material";
import { skills } from "../../data/data";

// Styled Components
const SkillCard = styled(Paper)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  padding: "2rem",
  height: "100%",
  transition: "all 0.3s ease",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"
  }`,
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

const DetailItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "1rem",
  "& svg": {
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
  },
}));

const Skill: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { sm: 4, xs: 2 },
        mx: "auto",
      }}
    >
      <Grid container spacing={4}>
        {skills?.map((skill, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillCard elevation={0}>
                {/* Skill Header */}
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  {skill.name}
                </Typography>

                <Divider
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    mb: 3,
                    "&:before, &:after": {
                      borderColor: "inherit",
                    },
                  }}
                />

                {/* Skill Details */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <DetailItem>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Description
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {skill.description}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Proficiency
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {skill.proficiency}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Years of Experience
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {skill.yearsOfExperience}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Last Used
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {skill.lastUsed}
                      </Typography>
                    </Box>
                  </DetailItem>
                </Box>

                {/* Related Projects */}
                <Box sx={{ mt: 3 }}>
                  <SectionTitle>Related Projects</SectionTitle>
                  <List dense sx={{ pl: 2 }}>
                    {skill.relatedProjects.map((project, idx) => (
                      <ListItem key={idx} sx={{ p: 0 }}>
                        <ListItemText
                          primary={project}
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: "0.9rem",
                              color: "text.secondary",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Certifications */}
                {skill.certifications && skill.certifications.length > 0 && (
                  <Box sx={{ mt: 3 }}>
                    <SectionTitle>Certifications</SectionTitle>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skill.certifications.map((cert, idx) => (
                        <Chip
                          key={idx}
                          label={cert}
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
                )}
              </SkillCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;
