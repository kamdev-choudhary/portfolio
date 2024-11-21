import React from "react";
import { work as data } from "../../data/data.json";
import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

function WorkExperience() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                  <Typography sx={{ fontWeight: "bold" }}>
                    <span style={{ fontWeight: "bold" }}>Position</span> :{" "}
                    {p.position} ({p.startDate} to {p.endDate})
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Location :
                    </Typography>
                    <Typography sx={{ marginLeft: 1 }}>{p.location}</Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Job Description:
                    </Typography>
                    <Box sx={{ ml: 2 }}>
                      {Array.isArray(p.description) &&
                        p.description.map((desc, idx) => (
                          <Typography key={idx} sx={{ mt: idx === 0 ? 0 : 1 }}>
                            {desc}
                          </Typography>
                        ))}
                    </Box>
                  </Box>
                  <Typography sx={{ fontWeight: "bold" }}>Skills</Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ ml: 2, display: "flex", gap: 1 }}>
                      {Array.isArray(p.skills) &&
                        p.skills.map((skill, idx) => (
                          <Chip label={skill} key={idx} size="small" />
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
