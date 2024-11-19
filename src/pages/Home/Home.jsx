import React from "react";
import { motion } from "framer-motion";
import { Box, Divider, Grid2 as Grid, Paper, Typography } from "@mui/material";
import photo from "/photo.jpg";
import TypingText from "./TypingText";
import { aboutMe, info } from "../../data/other.json";
import { icons } from "../../constants/helper";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              src={photo}
              alt="Profile"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                border: "4px solid #fff",
                marginLeft: 2,
                mixBlendMode: "multiply",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 8 }}>
          <Typography variant="h3">KAMDEV CHOUDHARY</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={icons.email} height={20} />
            <Typography
              sx={{ textDecoration: "none" }}
              component="a"
              href={`mailto:${info.email}`}
            >
              {info.email}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={icons.phone} height={20} />
            <Typography component="a" href={`tel:${info.phone}`}>
              {info.phone}
            </Typography>
          </Box>
          <Box sx={{ minHeight: 85 }}>
            <TypingText />
          </Box>
          <Divider />
          <Box component={Paper} sx={{ p: 1 }}>
            <Typography variant="h6">{aboutMe}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
