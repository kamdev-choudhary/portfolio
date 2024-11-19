import React from "react";
import data from "../../data/work.json";
import { icons } from "../../constants/helper";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

function WorkExperience() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          alt="Work Experience"
          src={icons.work}
          style={{
            height: "clamp(35px, 5vw, 55px)", // Minimum: 40px, Maximum: 65px, Responsive: 5% of viewport width
            width: "auto",
          }}
        />
        <Typography
          sx={{
            ml: 2,
            fontSize: "clamp(1.2rem, 3vw, 3rem)", // Minimum: 1.5rem, Maximum: 2.5rem, Responsive: 3% of viewport width
          }}
          variant="h3"
        >
          Work Experience
        </Typography>
      </Box>

      {data.map((d, index) => (
        <React.Fragment key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Box component={Paper} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {d.company}
              </Typography>
              <Typography variant="body2">{d.duration}</Typography>
              <Divider sx={{ my: 1 }} />
              {d.positions?.map((p, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    border: "1px solid rgba(0,0,0,0.2)",
                    mb: 1,
                    p: 1,
                    borderRadius: 2,
                  }}
                  key={index}
                >
                  <Typography sx={{ fontWeight: "bold", color: "#3C3C3C" }}>
                    <span style={{ fontWeight: "bold" }}>Position</span> :{" "}
                    {p.position} ({p.startDate} to {p.endDate})
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Location :
                    </Typography>
                    <Typography sx={{ marginLeft: 1, color: "#616161" }}>
                      {p.location}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: "bold", color: "#3C3C3C" }}>
                      Job Description:
                    </Typography>
                    <Box sx={{ ml: 2 }}>
                      {Array.isArray(p.description) &&
                        p.description.map((desc, idx) => (
                          <Typography
                            key={idx}
                            sx={{ mt: idx === 0 ? 0 : 1, color: "#424242" }}
                          >
                            {desc}
                          </Typography>
                        ))}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default WorkExperience;
