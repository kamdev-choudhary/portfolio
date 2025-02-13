import React, { useState } from "react";
import {
  Box,
  Chip,
  Divider,
  Typography,
  Avatar,
  useTheme,
  IconButton,
  Collapse,
  styled,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ExpandMoreRounded,
  BusinessRounded,
  LocationOnRounded,
  AccessTimeRounded,
} from "@mui/icons-material";
import { work } from "../../data/data";

interface PositionProps {
  expanded: boolean;
}

const PositionCard = styled(Paper)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.02)"
      : "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  padding: "1.5rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
  },
}));

const ExpandButton = styled(IconButton)<PositionProps>(
  ({ theme, expanded }) => ({
    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  })
);

const WorkExperience: React.FC = () => {
  const theme = useTheme();
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedPosition(expandedPosition === index ? null : index);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 3 }}>
      {work?.map((company, cIndex) => (
        <motion.div
          key={cIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: cIndex * 0.1 }}
        >
          <Box
            sx={{
              background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, rgba(118, 53, 220, 0.1) 100%)`,
              borderRadius: "20px",
              p: 3,
              mb: 2,
              position: "relative",
              overflow: "hidden",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "4px",
                height: "100%",
                background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                  color: "white",
                }}
              >
                <BusinessRounded fontSize="large" />
              </Avatar>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {company.company}
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
                  <AccessTimeRounded fontSize="small" />
                  {company.duration}
                </Typography>
              </Box>
            </Box>

            <Divider
              sx={{
                borderColor: "rgba(255, 255, 255, 0.1)",
                mb: 1,
                "&:before, &:after": {
                  borderColor: "inherit",
                },
              }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {company.positions?.map((position, pIndex) => {
                const isExpanded = expandedPosition === pIndex;
                return (
                  <PositionCard key={pIndex} elevation={0}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {position.position}
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
                          <LocationOnRounded fontSize="small" />
                          {position.location}
                        </Typography>
                      </Box>
                      <ExpandButton
                        expanded={isExpanded}
                        onClick={() => handleExpand(pIndex)}
                        color="primary"
                      >
                        <ExpandMoreRounded />
                      </ExpandButton>
                    </Box>

                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                      <Box
                        sx={{
                          mt: 2,
                          pl: 1,
                          borderLeft: `2px solid ${theme.palette.primary.main}`,
                        }}
                      >
                        {position.description.map((desc, dIndex) => (
                          <Typography
                            key={dIndex}
                            variant="body2"
                            sx={{
                              mb: 2,
                              position: "relative",
                              pl: 2,
                              "&:before": {
                                content: '"•"',
                                position: "absolute",
                                left: 0,
                                color: theme.palette.primary.main,
                                fontWeight: "bold",
                              },
                            }}
                          >
                            {desc}
                          </Typography>
                        ))}
                      </Box>
                    </Collapse>

                    <Box sx={{ mt: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "text.secondary",
                        }}
                      >
                        Technologies Used
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {position.skills.map((skill, sIndex) => (
                          <Chip
                            key={sIndex}
                            label={skill}
                            variant="outlined"
                            sx={{
                              borderRadius: "6px",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                background: theme.palette.primary.main,
                                color: "white",
                                borderColor: "transparent",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </PositionCard>
                );
              })}
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default WorkExperience;
