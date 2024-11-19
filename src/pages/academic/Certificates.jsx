import React from "react";
import { Typography, Box, Paper, Divider, IconButton } from "@mui/material";
import { icons } from "../../constants/helper";
import { certificates } from "../../data/education.json";
import { motion } from "framer-motion";
import { LinkRounded } from "@mui/icons-material";

function Certificates() {
  return (
    <>
      <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
        <img
          src={icons.certificate}
          style={{
            height: "clamp(30px, 5vw, 45px)",
            width: "auto",
          }}
          alt="Certificate Icon"
        />
        <Typography
          sx={{
            ml: 2,
            fontSize: "clamp(1.8rem, 3vw, 3.5rem)",
          }}
          variant="h4"
        >
          Certificate Courses
        </Typography>
      </Box>

      {certificates?.map((cert, index) => (
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  {cert?.name}
                </Typography>
                <IconButton>
                  <LinkRounded />
                </IconButton>
              </Box>
              <Divider />
              <Typography>Couse Duration : {cert?.duration}</Typography>
              <Typography>Institute Name : {cert?.institute}</Typography>
              <Typography>Course Period : {cert?.period}</Typography>
            </Box>
          </motion.div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Certificates;
