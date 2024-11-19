import { Box, Typography } from "@mui/material";
import React from "react";
import { icons } from "../../constants/helper";
import projects from "../../data/project.json";

function Projects() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          alt="Work Experience"
          src={icons.project}
          style={{
            height: "clamp(40px, 5vw, 65px)", // Minimum: 40px, Maximum: 65px, Responsive: 5% of viewport width
            width: "auto",
          }}
        />
        <Typography
          sx={{
            ml: 2,
            fontSize: "clamp(1.8rem, 3vw, 3.5rem)", // Minimum: 1.5rem, Maximum: 2.5rem, Responsive: 3% of viewport width
          }}
          variant="h3"
        >
          Projects
        </Typography>
      </Box>
    </>
  );
}

export default Projects;
