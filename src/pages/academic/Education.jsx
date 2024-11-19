import React from "react";
import { basic } from "../../data/education.json";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { icons } from "../../constants/helper";

function Education() {
  return (
    <>
      <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
        <img src={icons.education} height={45} />
        <Typography sx={{ ml: 2 }} variant="h4">
          Education
        </Typography>
      </Box>
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
              sx={{ p: 1, mb: 1, display: "grid", gap: 1 }}
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
