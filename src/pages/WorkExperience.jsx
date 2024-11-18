import React from "react";
import data from "../data/work.json"; // Assuming this contains an array of work experience data
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

function WorkExperience() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {data?.map((d, index) => (
        <Card key={index} sx={{ width: "100%", boxShadow: 3 }}>
          <CardHeader title={d.company} subheader={d.duration} />
          <Divider />
          {d.positions?.map((p, index) => (
            <CardContent key={index}>
              <Typography>{p.position}</Typography>
            </CardContent>
          ))}
        </Card>
      ))}
    </Box>
  );
}

export default WorkExperience;
