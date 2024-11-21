import React from "react";
import { extra } from "../data/data.json";
import { Box, Divider, Paper, Typography } from "@mui/material";

function Extracurricular() {
  return (
    <Box sx={{ p: 2 }}>
      <Box component={Paper} sx={{ p: 2 }}>
        {extra?.map((e, index) => (
          <Box
            key={index}
            sx={{
              mb: 1,
              border: "1px solid rgba(0,0,0,0.2)",
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography>{e.name}</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1">
              <span style={{ fontWeight: "bold" }}>Duration : </span>
              {e.duration}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Description : </span>
              {e.description}
            </Typography>
            <Typography>{e.achievements}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Extracurricular;
