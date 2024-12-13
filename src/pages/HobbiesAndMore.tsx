import React from "react";
import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import { hobbies, personal } from "../data/data";

const HobbiesAndMore: React.FC = () => {
  return (
    <Box sx={{ p: { sm: 2, xs: 1 } }}>
      <Box component={Paper} elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", py: 1 }}>
          Hobbies
        </Typography>
        <Divider />
        <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {hobbies?.map((hobby, index) => (
            <React.Fragment key={index}>
              <Chip sx={{ p: 1 }} label={hobby} />
            </React.Fragment>
          ))}
        </Box>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1" sx={{ py: 1 }}>
          <span style={{ fontWeight: "bold" }}>Date of Birth : </span>{" "}
          {personal.dateOfBirth}
        </Typography>
        <Typography variant="body1" sx={{ py: 1 }}>
          <strong>Marital Status :</strong> {personal.marritalStatus}
        </Typography>
      </Box>
    </Box>
  );
};

export default HobbiesAndMore;
