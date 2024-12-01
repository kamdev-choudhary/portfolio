import React from "react";
import {
  Box,
  Divider,
  Paper,
  Typography,
  Grid2 as Grid,
  Avatar,
} from "@mui/material";
import { School, CalendarToday, Grade, EmojiEvents } from "@mui/icons-material";
import { motion } from "framer-motion";
import { education } from "../data/data.json";
const { basic } = education;

export default function Education() {
  return (
    <Box sx={{ p: { sm: 3, xs: 2 } }}>
      <Grid container spacing={3}>
        {basic?.map((d, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={index}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
              }}
            >
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 4,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  ":hover": {
                    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {/* Education Level */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    gap: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                    }}
                  >
                    <School />
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      lineHeight: 1.2,
                    }}
                  >
                    {d?.level} {d.stream && <>({d.stream})</>}
                  </Typography>
                </Box>

                <Divider sx={{ mb: 2, width: "100%" }} />

                {/* Details */}
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <CalendarToday sx={{ mr: 1, color: "secondary.main" }} />
                  <strong>Passing Year : </strong> {d?.year}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <School sx={{ mr: 1, color: "secondary.main" }} />
                  <strong>Institute Name : </strong> {d?.institute}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <Grade sx={{ mr: 1, color: "secondary.main" }} />
                  <strong>Grade System : </strong> {d?.gradeSystem}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <EmojiEvents sx={{ mr: 1, color: "secondary.main" }} />
                  <strong>Grade Obtained : </strong> {d?.grade}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
