import React from "react";
import {
  Box,
  Divider,
  Paper,
  Typography,
  Grid2 as Grid,
  Avatar,
  CardContent,
} from "@mui/material";
import { School, CalendarToday, Grade, EmojiEvents } from "@mui/icons-material";
import { motion } from "framer-motion";
import { basicEducation } from "../../data/data";

// Define animation variants for the cards
const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.5,
    },
  },
};

const Education: React.FC = () => {
  return (
    <Box
      sx={{
        p: { sm: 3, xs: 2 },
      }}
    >
      <Grid container spacing={4}>
        {basicEducation?.map((d, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <motion.div
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Paper
                elevation={6}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  p: 2,
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #e6f0fa 100%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  height: "100%",
                }}
              >
                {/* Education Header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 48,
                      height: 48,
                    }}
                  >
                    <School />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {d?.level} {d.stream && `(${d.stream})`}
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: "grey.300" }} />

                {/* Education Details */}
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CalendarToday sx={{ mr: 1, color: "secondary.main" }} />
                    <Typography variant="body1" color="text.secondary">
                      <strong>Passing Year:</strong> {d?.year}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <School sx={{ mr: 1, color: "secondary.main" }} />
                    <Typography variant="body1" color="text.secondary" noWrap>
                      <strong>Institute:</strong>&nbsp; {d?.institute}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Grade sx={{ mr: 1, color: "secondary.main" }} />
                    <Typography variant="body1" color="text.secondary">
                      <strong>Grade System:</strong> {d?.gradeSystem}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EmojiEvents sx={{ mr: 1, color: "secondary.main" }} />
                    <Typography variant="body1" color="text.secondary">
                      <strong>Grade Obtained:</strong> {d?.grade}
                    </Typography>
                  </Box>
                </CardContent>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
