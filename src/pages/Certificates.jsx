import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Divider,
  IconButton,
  Link,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { LinkRounded } from "@mui/icons-material";
import { useGlobalProvider } from "../GlobalProvider";
import { CustomModal } from "../components/CustomModal";

function Certificates() {
  const { education } = useGlobalProvider();
  const { certificates } = education;
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <Box sx={{ p: { sm: 2, xs: 1 } }}>
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
                    onClick={() => {
                      setShowCertificate(true);
                      setSelectedCertificate(cert.link);
                    }}
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
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 2, my: 1 }}
                  >
                    {cert?.skills.map((skill, idx) => (
                      <Chip key={idx} label={skill} />
                    ))}
                  </Box>
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
              maxWidth: "794px", // Cap at actual A4 width
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
