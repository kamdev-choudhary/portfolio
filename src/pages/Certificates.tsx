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
  OpenInNewRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { CustomModal } from "../components/CustomModal";
import { certificates } from "../data/data";
import { Link } from "react-router-dom";
import { bgcolors } from "../constants/colors";

interface CertificateLink {
  name: string;
  link: string;
  title?: string;
  url?: string;
  links?: string;
}

const Certificates: React.FC = () => {
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const [showCertificatesLinks, setShowCertificatesLinks] =
    useState<boolean>(false);

  const [selectedCertificateLinks, setSelectedCertificateLinks] = useState<
    CertificateLink[]
  >([]);

  // Handling individual certificate link modal
  const handleCertificateLink = (link: string) => {
    setShowCertificate(true);
    setSelectedCertificate(link);
  };

  // Handling multiple links modal for a specific certificate
  const handleMultipleLinks = (links: any) => {
    setSelectedCertificateLinks(links);
    setShowCertificatesLinks(true);
  };

  return (
    <Box sx={{ p: { sm: 2, xs: 1 }, background: bgcolors.certificates }}>
      <Grid container spacing={3}>
        {certificates?.map((cert, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box>
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
                    {/* Link handling for individual certificate */}
                    {cert?.links?.length === 1 && (
                      <IconButton
                        onClick={() => {
                          if (cert.links[0].type === "Browser") {
                            window.open(cert?.links[0]?.url);
                          } else {
                            handleCertificateLink(cert?.links[0]?.url);
                          }
                        }}
                      >
                        <LinkRounded />
                      </IconButton>
                    )}
                    {/* Link handling for multiple certificate links */}
                    {cert?.links?.length > 1 && (
                      <IconButton
                        onClick={() => handleMultipleLinks(cert?.links)}
                      >
                        <LinkRounded />
                      </IconButton>
                    )}
                  </Box>
                  <Divider sx={{ mb: 1 }} />
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
                            key={idx}
                            label={skill}
                            color="primary"
                            size="small"
                            sx={{ p: 2 }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                  {/* Achievements */}
                  {cert?.achievements &&
                    Array.isArray(cert?.achievements) &&
                    cert?.achievements.length > 0 && (
                      <Typography
                        variant="body2"
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
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
                  {cert?.projects && cert?.projects.length > 0 && (
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <WorkspacePremium sx={{ mr: 1, flexShrink: 0 }} />
                      <strong style={{ flexShrink: 0, whiteSpace: "nowrap" }}>
                        Projects:
                      </strong>
                      <span style={{ marginLeft: 4, flexGrow: 1 }}>
                        {cert?.projects.map((project, index) => (
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

      {/* Modal for Single Certificate */}
      <CustomModal
        open={showCertificate}
        onClose={() => setShowCertificate(false)}
        // width="auto"
        // height="auto"
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src={selectedCertificate || ""}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "794px", // Optional max width constraint for larger screens
              maxHeight: "100vh", // Limit the iframe height to the viewport height
              borderRadius: "8px",
              minHeight: "281px",
            }}
            title="Certificate View"
          />
        </Box>
      </CustomModal>

      {/* Modal for Multiple Links */}
      <CustomModal
        open={showCertificatesLinks}
        onClose={() => setShowCertificatesLinks(false)}
        width="auto"
      >
        <Box sx={{ p: 2 }}>
          {selectedCertificateLinks?.map((certificate, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                mb: 2,
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
                boxShadow: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: 4,
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              {/* Title with FlexGrow to push icon to the right */}
              <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    mr: 1, // margin-right for spacing between title and icon
                    textDecoration: "none",
                  }}
                >
                  {certificate.title}
                </Typography>
              </Box>
              {/* Icon indicating new tab */}
              <Link
                to={certificate?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{
                    color: "primary.main",
                    fontSize: 18,
                    "&:hover": {
                      color: "primary.dark",
                    },
                  }}
                >
                  <OpenInNewRounded />
                </IconButton>
              </Link>
            </Box>
          ))}
        </Box>
      </CustomModal>
    </Box>
  );
};

export default Certificates;
