import React from "react";
import data from "../../data/work.json";
import { icons } from "../../constants/helper";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

function WorkExperience() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          alt="Work Experience"
          src={icons.work}
          style={{
            height: "clamp(40px, 5vw, 65px)", // Minimum: 40px, Maximum: 65px, Responsive: 5% of viewport width
            width: "auto",
          }}
        />
        <Typography
          sx={{
            ml: 2,
            fontSize: "clamp(1.8rem, 3vw, 3.5rem)", // Minimum: 1.5rem, Maximum: 2.5rem, Responsive: 3% of viewport width
          }}
          variant="h3"
        >
          Work Experience
        </Typography>
      </Box>

      {data?.map((d, index) => (
        <React.Fragment key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card sx={{ width: "100%", boxShadow: 3 }}>
              <CardHeader title={d.company} subheader={d.duration} />
              <Divider />
              {d.positions?.map((p, index) => (
                <CardContent
                  sx={{ bgcolor: "#D0E8C5", mx: 2, my: 2, borderRadius: 2 }}
                  key={index}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start", // Align items to the start for proper wrapping
                      flexWrap: "wrap", // Enables wrapping on smaller screens
                      gap: 1, // Adds spacing between items when wrapping
                    }}
                  >
                    <Typography
                      sx={{
                        whiteSpace: "wrap", // Prevents breaking the "Position:" text
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>Position</span> :{" "}
                      {p.position} ({p.startDate} to {p.endDate})
                    </Typography>
                  </Box>

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
                        p.description.map((d, index) => (
                          <Typography
                            key={index}
                            sx={{ mt: index === 0 ? 0 : 1 }}
                          >
                            {d}
                          </Typography>
                        ))}
                    </Box>
                  </Box>
                </CardContent>
              ))}
            </Card>
          </motion.div>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default WorkExperience;
