import React from "react";
import {
  Typography,
  Box,
  Paper,
  Divider,
  IconButton,
  Link,
} from "@mui/material";
import { education } from "../data/data.json";
const { certificates } = education;
import { motion } from "framer-motion";
import { LinkRounded } from "@mui/icons-material";

function Certificates() {
  return (
    <>
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
              elevation={4}
              sx={{
                p: 2,
                mb: 2,
                display: "grid",
                gap: 1,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              {/* Certificate Name and Link */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  {cert?.name}
                </Typography>
                {cert?.link && (
                  <IconButton
                    component={Link}
                    href={cert?.link}
                    target="_blank"
                  >
                    <LinkRounded />
                  </IconButton>
                )}
              </Box>

              <Divider sx={{ mb: 1 }} />

              {/* Certificate Details */}
              <Typography variant="body1">
                <strong>Course Duration:</strong> {cert?.duration}
              </Typography>
              <Typography variant="body1">
                <strong>Institute:</strong> {cert?.institute}
              </Typography>
              <Typography variant="body1">
                <strong>Course Period:</strong> {cert?.period}
              </Typography>
              <Typography variant="body1">
                <strong>Mode:</strong> {cert?.mode}
              </Typography>

              {/* Skills */}
              {cert?.skills && (
                <Box>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    Skills Gained:
                  </Typography>
                  <ul>
                    {cert?.skills.map((skill, idx) => (
                      <li key={idx}>
                        <Typography variant="body1">{skill}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}

              {/* Achievements */}
              {cert?.achievement && (
                <Typography variant="body1" color="text.primary">
                  <strong>Achievements:</strong> {cert?.achievement}
                </Typography>
              )}

              {/* Projects */}
              {cert?.projects && (
                <Typography variant="body1" color="text.primary">
                  <strong>Projects:</strong> {cert?.projects}
                </Typography>
              )}
            </Box>
          </motion.div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Certificates;
