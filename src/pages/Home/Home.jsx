import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Divider, Grid2 as Grid, Paper, Typography } from "@mui/material";
import photo from "/photo.jpg";
import TypingText from "./TypingText";
import { aboutMe, info } from "../../data/other.json";
import { icons } from "../../constants/helper";
import QRCode from "qrcode";

function Home() {
  const generateQRCode = async (text) => {
    try {
      const url = await QRCode.toDataURL(text);
      document.getElementById("qrcode").src = url;
    } catch (err) {
      console.error(err);
    }
  };

  // Call the function
  useEffect(() => {
    generateQRCode(info.email);
  }, []);

  return (
    <Box>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* Left Section: User Info */}
            <Box>
              <Typography variant="h3" sx={{ mb: 1 }}>
                KAMDEV CHOUDHARY
              </Typography>

              {/* Email */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <img src={icons.email} alt="Email Icon" height={20} />
                <Typography
                  component="a"
                  href={`mailto:${info.email}`}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {info.email}
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={icons.phone} alt="Phone Icon" height={20} />
                <Typography
                  component="a"
                  href={`tel:${info.phone}`}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {info.phone}
                </Typography>
              </Box>
            </Box>

            {/* Right Section: QR Code */}
            <Box
              sx={{
                display: { sm: "flex", xs: "none" },
                justifyContent: { xs: "flex-start", sm: "center" },
                alignItems: "center",
                flex: 1,
              }}
            >
              <img
                id="qrcode"
                alt="QR Code"
                style={{ maxWidth: "150px", width: "100%" }}
              />
            </Box>
          </Box>

          <Box sx={{ minHeight: 85 }}>
            <TypingText />
          </Box>

          <Divider sx={{ mb: 1 }} />
          <Box component={Paper} sx={{ p: 1 }}>
            <Typography variant="body1">{aboutMe}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
