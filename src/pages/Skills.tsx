import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Grid2 as Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { skills } from "../data/data";

const Skill: React.FC = () => {
  return (
    <Box sx={{ p: { sm: 2, xs: 1 } }}>
      <Grid container spacing={3}>
        {skills?.map((skill, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  height: "100%",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  ":hover": { boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)" },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {skill.name}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1">
                  <strong>Description:</strong> {skill.description}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Proficiency:</strong> {skill.proficiency}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Years of Experience:</strong>{" "}
                  {skill.yearsOfExperience}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Last Used:</strong> {skill.lastUsed}
                </Typography>

                {/* Related Projects */}
                <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
                  Related Projects:
                </Typography>
                <List dense>
                  {skill.relatedProjects.map((project, idx) => (
                    <ListItem key={idx}>
                      <ListItemText>{project}</ListItemText>
                    </ListItem>
                  ))}
                </List>

                {/* Certifications */}
                {skill?.certifications && skill?.certifications.length > 0 && (
                  <>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", mt: 2 }}
                    >
                      Certifications:
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
                    >
                      {skill?.certifications?.map((cert, idx) => (
                        <Chip
                          key={idx}
                          label={cert}
                          color="primary"
                          size="small"
                          sx={{
                            p: 2,
                            bgcolor: "primary.light",
                            color: "white",
                          }}
                        />
                      ))}
                    </Box>
                  </>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;
