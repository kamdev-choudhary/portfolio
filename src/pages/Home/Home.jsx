import React from "react";
import { motion } from "framer-motion";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import photo from "/photo.jpg";
import TypingText from "./TypingText";

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
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 8 }}>
          <Typography variant="h3">KAMDEV CHOUDHARY</Typography>
          <TypingText />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
