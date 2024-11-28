import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useGlobalProvider } from "../GlobalProvider";
import { education } from "../data/data.json";
const { basic } = education;

export default function Education() {
  return (
    <Box sx={{ p: { sm: 2, xs: 1 } }}>
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
              sx={{
                p: 2,
                mb: 1,
                display: "grid",
                gap: 1,
                borderRadius: 2,
                bgcolor: "#fff",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                {d?.level} {d.stream && <>({d.stream})</>}
              </Typography>
              <Divider />
              <Typography>
                <span style={{ fontWeight: "bold" }}>Passing Year : </span>
                {d?.year}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Instutute Name : </span>
                {d?.institute}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Grade System : </span>
                {d?.gradeSystem}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Grade Obtained : </span>
                {d?.grade}
              </Typography>
            </Box>
          </motion.div>
        </React.Fragment>
      ))}
    </Box>
  );
}
