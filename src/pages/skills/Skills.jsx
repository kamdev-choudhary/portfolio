import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, List, ListItem, Paper, Divider } from "@mui/material";
import { skills } from "../../data/education.json";

function Skill() {
  return (
    <Box>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
        >
          <Box component={Paper} sx={{ p: 2 }}>
            <Typography variant="h5">{skill.name}</Typography>
            <Divider />
            <Typography variant="body1">
              <strong>Description:</strong> {skill.description}
            </Typography>
            <Typography variant="body1">
              <strong>Proficiency:</strong> {skill.proficiency}
            </Typography>
            <Typography variant="body1">
              <strong>Years of Experience:</strong> {skill.yearsOfExperience}
            </Typography>
            <Typography variant="body1">
              <strong>Last Used:</strong> {skill.lastUsed}
            </Typography>
            <Typography variant="body1">
              <strong>Related Projects:</strong>
            </Typography>
            <List>
              {skill.relatedProjects.map((project, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Typography>{project}</Typography>
                </motion.li>
              ))}
            </List>
            <Typography variant="body1">
              <strong>Certifications:</strong>
            </Typography>
            <List>
              {skill.certifications.map((cert, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <Typography>{cert}</Typography>
                </motion.li>
              ))}
            </List>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}

export default Skill;
