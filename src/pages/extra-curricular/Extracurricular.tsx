import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import { extra } from "../../data/data";

// Styled Components
const ActivityCard = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  padding: "2rem",
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

const AchievementList = styled("ul")(({ theme }) => ({
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

const Extracurricular: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { sm: 4, xs: 2 },
        mx: "auto",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {extra?.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ActivityCard>
              {/* Activity Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: "transparent",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    padding: "0.5rem",
                  }}
                >
                  <img
                    src={activity.logo}
                    alt="logo"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {activity.name}
                  </Typography>
                </Box>
              </Box>

              <Divider
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  mb: 3,
                  "&:before, &:after": {
                    borderColor: "inherit",
                  },
                }}
              />

              {/* Activity Details */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box>
                  <SectionTitle>Duration</SectionTitle>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {activity.duration}
                  </Typography>
                </Box>

                <Box>
                  <SectionTitle>Description</SectionTitle>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {activity.description}
                  </Typography>
                </Box>

                {/* Achievements */}
                <Box>
                  <SectionTitle>Achievements</SectionTitle>
                  <AchievementList>
                    {activity.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </AchievementList>
                </Box>
              </Box>
            </ActivityCard>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Extracurricular;
