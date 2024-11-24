import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  List,
  ListItem,
  Paper,
  Divider,
  ListItemText,
} from "@mui/material";
import { useGlobalProvider } from "../GlobalProvider";

function Skill() {
  const { education } = useGlobalProvider();
  const { skills } = education;
  return (
    <Box
      sx={{
        p: { sm: 2, xs: 1 },
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
        >
          <Box
            component={Paper}
            elevation={4}
            sx={{
              p: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
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
                <ListItem key={idx}>
                  <ListItemText>{project}</ListItemText>
                </ListItem>
              ))}
            </List>
            <Typography variant="body1">
              <strong>Certifications:</strong>
            </Typography>
            <List dense={true} sx={{ p: 0 }}>
              {skill?.certifications?.map((cert, idx) => (
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
