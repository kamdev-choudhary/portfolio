import React from "react";
import { motion } from "framer-motion";
import { Box, Divider, Grid2 as Grid, Paper, Typography } from "@mui/material";
import photo from "/photo.jpg";
import TypingText from "./TypingText";
import { aboutMe, contact, name, location } from "../data/data.json";
const { present: presentAddress } = location;
import { icons } from "../constants/helper";

function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: 300, md: 450, lg: 400, xl: 450 },
            }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.2 }}
              src={photo}
              alt="Profile"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                border: "4px solid #fff",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 8 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              alignItems: "space-around",
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ mb: 1 }}>
                {name}
              </Typography>
              <Box
                sx={{
                  gap: 2,
                  display: "flex",
                  flexWrap: "wrap",
                  mt: 2,
                }}
              >
                {/* Email */}
                <Box
                  sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}
                >
                  <img src={icons.email} alt="Email Icon" height={20} />
                  <Typography
                    component="a"
                    href={`mailto:${contact.email}`}
                    sx={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.email}
                  </Typography>
                </Box>
                {/* Phone */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img src={icons.phone} alt="Phone Icon" height={20} />
                  <Typography
                    component="a"
                    href={`tel:${contact.phone}`}
                    sx={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.phone}
                  </Typography>
                </Box>
                {/* LinkedIn */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img src={icons.linkedIn} alt="LinkedIn Icon" height={20} />
                  <Typography
                    component="a"
                    href={contact.linkedIn}
                    sx={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.linkedIn}
                  </Typography>
                </Box>
                {/* Address */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img src={icons.location} alt="Location Icon" height={20} />
                  {`${presentAddress?.address1}, ${presentAddress?.address2},  ${presentAddress?.city}, ${presentAddress?.state}, ${presentAddress?.pincode}`}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              minHeight: 100,
              mt: 2,
              bgcolor: "#333",
              color: "#fff",
              p: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <TypingText />
          </Box>

          <Divider sx={{ mb: 1 }} />
          <Box component={Paper} elevation={4} sx={{ p: 2 }}>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              {aboutMe}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
