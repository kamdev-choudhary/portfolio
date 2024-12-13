import React from "react";
import {
  Box,
  Chip,
  Divider,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ExpandMoreRounded,
  BusinessRounded,
  LocationOnRounded,
  AccessTimeRounded,
} from "@mui/icons-material";

import { work } from "../data/data";

const WorkExperience: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: { sm: 2, xs: 1 },
      }}
    >
      {work?.map((d, index) => (
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
              p: 2,
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
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {p.position}
                </Typography>
                <Typography
                  sx={{ mb: 1, display: "flex", alignItems: "center" }}
                >
                  <AccessTimeRounded sx={{ fontSize: 16, mr: 0.5 }} />
                  {p.startDate} to {p.endDate}
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
                <Accordion sx={{ borderRadius: 2, p: 0.5 }}>
                  <AccordionSummary
                    sx={{ borderRadius: 2 }}
                    expandIcon={<ExpandMoreRounded />}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", borderRadius: 2 }}
                    >
                      Job Description
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderRadius: 2 }}>
                    {Array.isArray(p.description) &&
                      p.description.map((desc, idx) => (
                        <Typography
                          key={idx}
                          sx={{
                            py: 1,
                            mb: 1,
                            borderBottom:
                              idx !== p?.description.length - 1
                                ? "1px dotted black"
                                : "",
                          }}
                          variant="body2"
                        >
                          {desc}
                        </Typography>
                      ))}
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
                            p: 2,
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
};

export default WorkExperience;
