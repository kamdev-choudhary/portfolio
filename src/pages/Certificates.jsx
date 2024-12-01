import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  IconButton,
  Chip,
  Grid2 as Grid,
  Avatar,
  Divider,
} from "@mui/material";
import {
  LinkRounded,
  AccessTime,
  School,
  CalendarToday,
  Public,
  WorkspacePremium,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { CustomModal } from "../components/CustomModal";
import { education } from "../data/data.json";

function Certificates() {
  const { certificates } = education;
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <Box sx={{ p: { sm: 3, xs: 2 } }}>
      <Grid container spacing={3}>
        {certificates?.map((cert, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  position: "relative",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  ":hover": {
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {/* Thumbnail */}
                {cert?.image && (
                  <Box sx={{ height: 140, overflow: "hidden" }}>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                )}

                <Box sx={{ p: 3 }}>
                  {/* Certificate Name and Link */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", lineHeight: 1.2 }}
                    >
                      {cert?.name}
                    </Typography>
                    {cert?.link && (
                      <IconButton
                        onClick={() => {
                          setShowCertificate(true);
                          setSelectedCertificate(cert.link);
                        }}
                      >
                        <LinkRounded />
                      </IconButton>
                    )}
                  </Box>
                  <Divider
                    sx={{
                      mb: 1,
                    }}
                  />
                  {/* Certificate Details */}
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <AccessTime sx={{ mr: 1 }} /> {cert?.duration}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <School sx={{ mr: 1 }} /> {cert?.institute}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <CalendarToday sx={{ mr: 1 }} /> {cert?.period}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Public sx={{ mr: 1 }} /> {cert?.mode}
                    </Typography>
                  </Box>

                  {/* Skills */}
                  {cert?.skills && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" fontWeight="bold">
                        Skills Gained:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 1,
                        }}
                      >
                        {cert?.skills.map((skill, idx) => (
                          <Chip
                            sx={{ p: 2 }}
                            key={idx}
                            label={skill}
                            color="primary"
                            size="small"
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* Achievements */}
                  {cert?.achievement && (
                    <Typography variant="body2" sx={{ display: "flex", mb: 1 }}>
                      <WorkspacePremium sx={{ mr: 1 }} />
                      <strong>Achievements : </strong> {cert?.achievement}
                    </Typography>
                  )}

                  {/* Projects */}
                  {cert?.projects && (
                    <Typography variant="body2" sx={{ display: "flex" }}>
                      <WorkspacePremium sx={{ mr: 1 }} />
                      <strong>Projects:</strong> {cert?.projects}
                    </Typography>
                  )}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <CustomModal
        open={showCertificate}
        onClose={() => setShowCertificate(false)}
        showHeader={false}
        width="auto"
      >
        <div
          style={{
            position: "relative",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            minWidth: "780px",
          }}
        >
          <iframe
            src={selectedCertificate}
            style={{
              maxWidth: "794px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "100%",
              minHeight: "100%",
            }}
            title="Responsive A4 PDF Viewer"
          ></iframe>
        </div>
      </CustomModal>
    </Box>
  );
}

export default Certificates;
