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
        <img height={65} alt="Work Experience" src={icons.work} />
        <Typography sx={{ ml: 2 }} variant="h3">
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
                <CardContent sx={{ ml: 4 }} key={index}>
                  <Typography>
                    Position : {p.position} ({p.startDate} to {p.endDate})
                  </Typography>
                  <Typography>Location : {p.location}</Typography>
                  <Typography>
                    Description :{" "}
                    {typeof p.description === "object" &&
                      p?.description?.map((d, index) => (
                        <React.Fragment key={index}>
                          <Typography sx={{ ml: 4 }}>{d}</Typography>
                        </React.Fragment>
                      ))}
                  </Typography>
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
