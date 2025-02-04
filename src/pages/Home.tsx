import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Grid2 as Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import photo from "../assets/photo.jpg";
import TypingText from "../components/TypingText";
import IconWithName from "../components/IconWithName";
import { aboutMe, contact, name } from "../data/data";

import { Email } from "@mui/icons-material";

const Home: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width:650px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: { xs: "80px 10px 10px 10px", md: "80px 15px 15px 15px " },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
                // border: "4px solid #fff",
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
              <Typography>Hello, I am</Typography>
              <Typography variant="h3" sx={{ mb: 1, fontWeight: "bold" }}>
                {name}
              </Typography>
              <TypingText />
              <Box
                sx={{
                  gap: isSmallScreen ? 0 : 1,
                  display: "flex",
                  flexWrap: "wrap",
                  mt: 1,
                }}
              >
                <IconWithName
                  icon={Email}
                  color="#666"
                  href={contact.email.href}
                  label={contact.email.name}
                  component="a"
                />
                {/* Email */}
                {/* 
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
                /> */}
              </Box>
            </Box>
          </Box>

          <Box
            component={Paper}
            elevation={3}
            sx={{ p: 2, mt: 2, borderRadius: 2 }}
          >
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              {aboutMe}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
