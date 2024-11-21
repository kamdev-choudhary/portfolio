import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Box, Divider, Grid2 as Grid, Paper, Typography } from "@mui/material";
import photo from "/photo.jpg";
import TypingText from "./TypingText";
import { aboutMe, contact, name, location } from "../data/data.json";
const { permament: presentAddress } = location;
import { icons } from "../constants/helper";
import QRCode from "qrcode";

function Home() {
  const qrCodeRef = useRef(null);

  const generateQRCode = async (text) => {
    try {
      const url = await QRCode.toDataURL(text);
      if (qrCodeRef.current) {
        qrCodeRef.current.src = url;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (contact.email) {
      generateQRCode(contact.email);
    }
  }, [contact.email]);

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
            {/* Left Section: User contact */}
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
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
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
                  {presentAddress?.address1}, {presentAddress?.address2},
                  {presentAddress?.city}, {presentAddress?.state},
                  {presentAddress?.pincode}
                </Box>
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
                ref={qrCodeRef}
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
