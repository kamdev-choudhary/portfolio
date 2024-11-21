import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { education } from "../data/data.json";
const { basic } = education;

function Education() {
  return (
    <>
      {basic?.map((d, index) => (
        <React.Fragment key={index}>
          <motion.div
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            <Box
              component={Paper}
              elevation={4}
              sx={{ p: 1, mb: 1, display: "grid", gap: 1, borderRadius: 2 }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                {d?.level} {d.level !== "10th" && <>({d.stream})</>}
              </Typography>
              <Divider />
              <Typography>Passing Year: {d?.year}</Typography>
              <Typography>Institute Name: {d?.institute}</Typography>
              <Typography>Grade System: {d?.gradeSystem}</Typography>
              <Typography>Grade Obtained: {d?.grade}</Typography>
            </Box>
          </motion.div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Education;
