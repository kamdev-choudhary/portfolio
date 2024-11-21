import React from "react";
import { extra } from "../data/data.json";
import { Box, Paper } from "@mui/material";

function Extracurricular() {
  return (
    <>
      <Box component={Paper} sx={{ p: 2 }}>
        {extra[0].name}
      </Box>
    </>
  );
}

export default Extracurricular;
