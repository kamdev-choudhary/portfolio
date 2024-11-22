import React from "react";
import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import { hobbies, personal } from "../data/data.json";

function HobbiesAndMore() {
  return (
    <Box sx={{ p: 2 }}>
      <Box component={Paper} elevation={4} sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", py: 1 }}>
          Hobbies
        </Typography>
        <Divider />
        <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
          {hobbies?.map((hobby, index) => (
            <React.Fragment key={index}>
              <Chip label={hobby} />
            </React.Fragment>
          ))}
        </Box>
        <Divider sx={{ my: 1 }} />
        <Typography variant="h6" sx={{ py: 1 }}>
          <span style={{ fontWeight: "bold" }}>Date of Birth : </span>{" "}
          {personal.dateOfBirth}
        </Typography>
      </Box>
    </Box>
  );
}

export default HobbiesAndMore;
