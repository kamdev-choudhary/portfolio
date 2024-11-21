import React from "react";
import { extra } from "../data/data.json";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { icons } from "../constants/helper";

function Extracurricular() {
  return (
    <Box sx={{ p: 2 }}>
      <Box component={Paper} sx={{ p: 2 }}>
        {extra?.map((e, index) => (
          <Box
            key={index}
            sx={{
              mb: 1,
              border: "1px solid rgba(0,0,0,0.2)",
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {e.name}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1">
              <span style={{ fontWeight: "bold" }}>Duration : </span>
              {e.duration}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Description : </span>
              {e.description}
            </Typography>
            <List>
              {Array.isArray(e.achievements) &&
                e.achievements.map((a, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <img src={icons.list} alt="icon" height={20} />
                    </ListItemIcon>
                    <ListItemText primary={a} />
                  </ListItem>
                ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Extracurricular;
