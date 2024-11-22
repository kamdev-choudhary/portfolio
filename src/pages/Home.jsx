import React from "react";
import { motion } from "framer-motion";
import { Box, Divider, Grid2 as Grid, Paper, Typography } from "@mui/material";
import photo from "/photo.jpg";
import TypingText from "./TypingText";
import { aboutMe, contact, name, location } from "../data/data.json";
const { present: presentAddress } = location;
import { icons } from "../constants/helper";
import IconWithName from "../components/IconWithName";

function Home() {
  return (
    <Box sx={{ p: 2 }}>
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
              <Typography variant="h3" sx={{ mb: 1, fontWeight: "bold" }}>
                {name}
              </Typography>
              <Box
                sx={{
                  gap: 2,
                  display: "flex",
                  flexWrap: "wrap",
                  mt: 1,
                }}
              >
                {/* Email */}
                <IconWithName
                  icon={icons.email}
                  href={contact.email.href}
                  label={contact.email.name}
                  component="a"
                />
                <IconWithName
                  icon={icons.phone}
                  href={contact.phone.href}
                  label={contact.phone.name}
                  component="a"
                />
                <IconWithName
                  icon={icons.linkedIn}
                  href={contact.linkedIn.href}
                  label={contact.linkedIn.name}
                  component="a"
                />
                <IconWithName
                  icon={icons.location}
                  href={presentAddress.url}
                  label={`${presentAddress?.address1}, ${presentAddress?.address2},  ${presentAddress?.city}, ${presentAddress?.state}, ${presentAddress?.pincode}`}
                  component="a"
                />
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
            component={Paper}
            elevation={4}
          >
            <TypingText />
          </Box>

          <Box component={Paper} elevation={4} sx={{ p: 2, mt: 2 }}>
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
