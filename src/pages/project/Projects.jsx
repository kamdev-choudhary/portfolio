import { Box, Typography } from "@mui/material";
import React from "react";
import { icons } from "../../constants/helper";

function Projects() {
  return (
    <>
      <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
        <img src={icons.project} height={45} />
        <Typography sx={{ ml: 2 }} variant="h4">
          Projects
        </Typography>
      </Box>
    </>
  );
}

export default Projects;
