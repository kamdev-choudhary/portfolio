import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { website } from "../data/data.json";
const { packages, icon } = website;
import { icons } from "../constants/helper";

function WebsiteInfo() {
  return (
    <Box sx={{ p: 2 }}>
      <Box component={Paper} elevation={4} sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Website Info
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography>
          This website is built using React and Vite, ensuring a fast and smooth
          user experience. It leverages modern web development practices to
          provide a responsive and feature-rich interface.
        </Typography>
        <Typography>
          Below are some of the key packages and technologies used to build this
          website:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          {packages.map((pkg, index) => (
            <li key={index}>
              <Typography variant="body1">
                <strong>{pkg.name}</strong>: {pkg.description}
              </Typography>
            </li>
          ))}
        </Box>
        <Divider />
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography variant="body1">
              <strong>Icons</strong> : {icon.name}
            </Typography>
          </li>
        </Box>
        <Typography>
          I am committed to continuously improving this portfolio website by
          integrating the best tools and libraries to meet modern web standards.
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <Typography
            variant="body1"
            component="a"
            href="https://github.com/kamdev-choudhary/portfolio"
            target="_blank"
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img src={icons.github} height={20} />
            <strong>Github Repository</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default WebsiteInfo;
