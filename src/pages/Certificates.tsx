import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  IconButton,
  Chip,
  Grid2 as Grid,
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
import { certificates } from "../data/data";

const Certificates: React.FC = () => {
  // const { certificates } = education;
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const [showCertificatesLinks, setShowCertificatesLinks] =
    useState<boolean>(false);

  return (
    <Box sx={{ p: { sm: 2, xs: 1 } }}>
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
                <Box sx={{ p: 2 }}>
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
                          setSelectedCertificate(cert?.link);
                        }}
                      >
                        <LinkRounded />
                      </IconButton>
                    )}
                    {cert?.links && (
                      <IconButton
                        onClick={() => {
                          setShowCertificatesLinks(true);
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
                  {cert?.achievements &&
                    Array.isArray(cert.achievements) &&
                    cert?.achievements?.length > 0 && (
                      <Typography
                        variant="body2"
                        sx={{
                          display: "flex",
                          flexWrap: "wrap", // Allows content to wrap if necessary
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <WorkspacePremium sx={{ mr: 1, flexShrink: 0 }} />
                        <strong style={{ flexShrink: 0, whiteSpace: "nowrap" }}>
                          Achievements:
                        </strong>
                        <span style={{ marginLeft: 4, flexGrow: 1 }}>
                          {cert.achievements.map((achievement, index) => (
                            <span
                              key={index}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
                            >
                              {achievement}
                            </span>
                          ))}
                        </span>
                      </Typography>
                    )}

                  {/* Projects */}
                  {cert?.projects && cert?.projects?.length > 0 && (
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        flexWrap: "wrap", // Allows wrapping of long content
                        alignItems: "center", // Aligns items vertically
                        mb: 1,
                      }}
                    >
                      <WorkspacePremium sx={{ mr: 1, flexShrink: 0 }} />
                      <strong style={{ flexShrink: 0, whiteSpace: "nowrap" }}>
                        Projects:
                      </strong>
                      <span style={{ marginLeft: 4, flexGrow: 1 }}>
                        {cert?.projects?.map((project, index) => (
                          <span
                            key={index}
                            style={{ display: "inline-block", marginRight: 8 }}
                          >
                            {project}
                          </span>
                        ))}
                      </span>
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
            src={selectedCertificate || ""}
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
      <CustomModal
        open={showCertificatesLinks}
        onClose={() => setShowCertificatesLinks(false)}
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
        ></div>
      </CustomModal>
    </Box>
  );
};

export default Certificates;
