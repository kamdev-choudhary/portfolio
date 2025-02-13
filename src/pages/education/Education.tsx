import React from "react";
import {
  Box,
  Divider,
  Typography,
  Grid2 as Grid,
  Avatar,
  useTheme,
  styled,
  Paper,
} from "@mui/material";
import {
  School,
  CalendarToday,
  Grade,
  EmojiEvents,
  ArrowRightAlt,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { basicEducation } from "../../data/data";

// Styled Components
const EducationCard = styled(Paper)(({ theme }) => ({
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

const Education: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { sm: 4, xs: 2 },
        mx: "auto",
      }}
    >
      <Grid container spacing={4}>
        {basicEducation?.map((education, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <EducationCard elevation={0}>
                {/* Education Header */}
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
                      color: "white",
                    }}
                  >
                    <School fontSize="medium" />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {education.level}
                    </Typography>
                    {education.stream && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mt: 0.5,
                        }}
                      >
                        {education.stream}
                      </Typography>
                    )}
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

                {/* Education Details */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <DetailItem>
                    <CalendarToday />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Passing Year
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {education.year}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <School />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Institute
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {education.institute}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <Grade />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Grade System
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {education.gradeSystem}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <EmojiEvents />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Grade Obtained
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {education.grade}
                      </Typography>
                    </Box>
                  </DetailItem>
                </Box>

                {/* Completion Indicator */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 3,
                    color: "text.secondary",
                  }}
                >
                  <ArrowRightAlt color="primary" />
                  <Typography variant="body2">
                    Completed in {education.year}
                  </Typography>
                </Box>
              </EducationCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
