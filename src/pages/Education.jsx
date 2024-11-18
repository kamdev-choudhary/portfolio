import React from "react";
import data from "../data/education.json";
import { Box, Divider, Paper, Typography } from "@mui/material";

function Education() {
  return (
    <>
      <Box>
        <Typography variant="h4">Education</Typography>
      </Box>
      {data?.basic?.map((d, index) => (
        <React.Fragment key={index}>
          <Box component={Paper} sx={{ p: 1, mb: 1 }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              {d.level} {d.level !== "10th" && <>({d.stream})</>}
            </Typography>
            <Divider />
            <Typography>Passing Year : {d?.year}</Typography>
            <Typography>Institute Name : {d?.institute}</Typography>
            <Typography>Grade System : {d?.gradeSystem}</Typography>
            <Typography>Grade Obtained : {d?.grade}</Typography>
          </Box>
        </React.Fragment>
      ))}
    </>
  );
}

export default Education;
