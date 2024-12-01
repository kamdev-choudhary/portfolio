import React from "react";
import { work as data } from "../data/data.json";
import {
  Box,
  Chip,
  Divider,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ExpandMoreRounded,
  StarRounded,
  BusinessRounded,
  LocationOnRounded,
  AccessTimeRounded,
} from "@mui/icons-material";

function WorkExperience() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: { sm: 3, xs: 2 },
      }}
    >
      {data?.map((d, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              p: 3,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
              ":hover": {
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {/* Company Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <Avatar sx={{ bgcolor: "primary.main", color: "white" }}>
                <BusinessRounded />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {d.company}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <AccessTimeRounded sx={{ fontSize: 16, mr: 0.5 }} />
                  {d.duration}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* Positions */}
            {d.positions?.map((p, idx) => (
              <Box
                key={idx}
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "background.default",
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Position Title */}
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {p.position} ({p.startDate} to {p.endDate})
                </Typography>

                {/* Location */}
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "text.secondary",
                    mb: 1,
                  }}
                >
                  <LocationOnRounded sx={{ fontSize: 16, mr: 0.5 }} />
                  {p.location}
                </Typography>

                {/* Job Description Accordion */}
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Job Description
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      {Array.isArray(p.description) &&
                        p.description.map((desc, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <StarRounded sx={{ color: "secondary.main" }} />
                            </ListItemIcon>
                            <Typography variant="body2">{desc}</Typography>
                          </ListItem>
                        ))}
                    </List>
                  </AccordionDetails>
                </Accordion>

                {/* Skills Section */}
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Skills
                  </Typography>
                  <Divider sx={{ mb: 1 }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {Array.isArray(p.skills) &&
                      p.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          sx={{
                            p: 1,
                            bgcolor: "primary.light",
                            color: "primary.contrastText",
                          }}
                        />
                      ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Paper>
        </motion.div>
      ))}
    </Box>
  );
}

export default WorkExperience;
