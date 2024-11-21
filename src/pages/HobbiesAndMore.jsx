import React from "react";
import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import { hobbies } from "../data/data.json";

function HobbiesAndMore() {
  return (
    <>
      <Box component={Paper} elevation={4} sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h5">Hobbies</Typography>
        <Divider />
        <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
          {hobbies?.map((hobby, index) => (
            <React.Fragment key={index}>
              <Chip label={hobby}>{hobby}</Chip>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default HobbiesAndMore;
