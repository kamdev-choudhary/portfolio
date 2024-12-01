import React from "react";
import {
  Box,
  Divider,
  ListItemIcon,
  Paper,
  Typography,
  Grid2 as Grid,
  Chip,
} from "@mui/material";
import { icons } from "../constants/helper";
import { extra } from "../data/data.json";

function Extracurricular() {
  return (
    <Box sx={{ p: { sm: 3, xs: 2 } }}>
      <Paper
        elevation={6}
        sx={{
          p: 3,
          borderRadius: 4,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          ":hover": { boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)" },
        }}
      >
        {extra?.map((e, index) => (
          <Box
            key={index}
            sx={{
              mb: 3,
              border: "1px solid rgba(0,0,0,0.1)",
              p: 3,
              borderRadius: 2,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
              ":hover": { boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)" },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {e.name}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Duration: {e.duration}
            </Typography>
            <Typography variant="body2" paragraph sx={{ mt: 1 }}>
              <strong>Description:</strong> {e.description}
            </Typography>

            {/* Achievements List with Chips */}
            <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
              Achievements:
            </Typography>
            <ul>
              {Array.isArray(e.achievements) &&
                e.achievements.map((a, idx) => (
                  <li sx={{ mb: 1 }} key={idx}>
                    {a}
                  </li>
                ))}
            </ul>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}

export default Extracurricular;
