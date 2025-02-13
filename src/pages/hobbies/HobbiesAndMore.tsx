import React from "react";
import {
  Box,
  Chip,
  Divider,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import { hobbies, personal } from "../../data/data";

// Styled Components
const InfoCard = styled(Box)(({ theme }) => ({
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

const HobbiesAndMore: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { sm: 4, xs: 2 },
        mx: "auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <InfoCard>
          {/* Hobbies Section */}
          <SectionTitle>Hobbies</SectionTitle>
          <Divider
            sx={{
              borderColor: "rgba(255, 255, 255, 0.1)",
              mb: 2,
              "&:before, &:after": {
                borderColor: "inherit",
              },
            }}
          />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {hobbies?.map((hobby, index) => (
              <Chip
                key={index}
                label={hobby}
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

          {/* Personal Info Section */}
          <Box sx={{ mt: 3 }}>
            <SectionTitle>Personal Information</SectionTitle>
            <Divider
              sx={{
                borderColor: "rgba(255, 255, 255, 0.1)",
                mb: 2,
                "&:before, &:after": {
                  borderColor: "inherit",
                },
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                <strong>Date of Birth:</strong> {personal.dateOfBirth}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                <strong>Marital Status:</strong> {personal.marritalStatus}
              </Typography>
            </Box>
          </Box>
        </InfoCard>
      </motion.div>
    </Box>
  );
};

export default HobbiesAndMore;
