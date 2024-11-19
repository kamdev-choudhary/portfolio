import React from "react";
import { basic } from "../../data/education.json";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { icons } from "../../constants/helper";

function Education() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <img
          alt="Work Experience"
          src={icons.education}
          style={{
            height: "clamp(40px, 5vw, 65px)", // Minimum: 40px, Maximum: 65px, Responsive: 5% of viewport width
            width: "auto",
          }}
        />
        <Typography
          sx={{
            ml: 2,
            fontSize: "clamp(1rem, 3vw, 3rem)", // Minimum: 1.5rem, Maximum: 2.5rem, Responsive: 3% of viewport width
          }}
          variant="h3"
        >
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
