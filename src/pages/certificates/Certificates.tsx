import React, { useState } from "react";
import {
  Typography,
  Box,
  IconButton,
  Chip,
  Grid,
  Divider,
  useTheme,
  styled,
  Paper,
} from "@mui/material";
import {
  LinkRounded,
  AccessTime,
  School,
  CalendarToday,
  Public,
  OpenInNewRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { CustomModal } from "../../components/CustomModal";
import { certificates } from "../../data/data";
import { Link } from "react-router-dom";

interface CertificateLink {
  name: string;
  link: string;
  title?: string;
  url?: string;
  links?: string;
}

// Styled Components
const CertificateCard = styled(Paper)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  padding: "2rem",
  height: "100%",
  transition: "all 0.3s ease",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"
  }`,
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[6],
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: 600,
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  mb: 1.5,
}));

const DetailItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "1rem",
  "& svg": {
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
  },
}));

const Certificates: React.FC = () => {
  const theme = useTheme();
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const [showCertificatesLinks, setShowCertificatesLinks] =
    useState<boolean>(false);
  const [selectedCertificateLinks, setSelectedCertificateLinks] = useState<
    CertificateLink[]
  >([]);

  const handleCertificateLink = (link: string) => {
    setShowCertificate(true);
    setSelectedCertificate(link);
  };

  const handleMultipleLinks = (links: any) => {
    setSelectedCertificateLinks(links);
    setShowCertificatesLinks(true);
  };

  return (
    <Box
      sx={{
        p: { sm: 4, xs: 2 },
        mx: "auto",
      }}
    >
      <Grid container spacing={4}>
        {certificates?.map((cert, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CertificateCard elevation={0}>
                {/* Certificate Header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {cert.name}
                    </Typography>
                  </Box>
                  {/* Link handling for individual certificate */}
                  {cert.links?.length === 1 && (
                    <IconButton
                      onClick={() => {
                        if (cert.links[0].type === "Browser") {
                          window.open(cert.links[0].url);
                        } else {
                          handleCertificateLink(cert.links[0].url);
                        }
                      }}
                      sx={{
                        color: "primary.main",
                        "&:hover": {
                          background: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      <LinkRounded />
                    </IconButton>
                  )}
                  {/* Link handling for multiple certificate links */}
                  {cert.links?.length > 1 && (
                    <IconButton
                      onClick={() => handleMultipleLinks(cert.links)}
                      sx={{
                        color: "primary.main",
                        "&:hover": {
                          background: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      <LinkRounded />
                    </IconButton>
                  )}
                </Box>

                <Divider
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    mb: 3,
                    "&:before, &:after": {
                      borderColor: "inherit",
                    },
                  }}
                />

                {/* Certificate Details */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <DetailItem>
                    <AccessTime />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Duration
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {cert.duration}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <School />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Institute
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {cert.institute}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <CalendarToday />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Period
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {cert.period}
                      </Typography>
                    </Box>
                  </DetailItem>

                  <DetailItem>
                    <Public />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Mode
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {cert.mode}
                      </Typography>
                    </Box>
                  </DetailItem>
                </Box>

                {/* Skills */}
                {cert.skills && (
                  <Box sx={{ mt: 3 }}>
                    <SectionTitle>Skills Gained</SectionTitle>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {cert.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          variant="outlined"
                          sx={{
                            borderRadius: "6px",
                            borderColor: theme.palette.primary.main,
                            background: "transparent",
                            "&:hover": {
                              background: theme.palette.primary.main,
                              color: "white",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Achievements */}
                {Array.isArray(cert?.achievements) &&
                  cert.achievements.map((achievement: any, idx: number) => (
                    <Chip
                      key={idx}
                      label={achievement}
                      variant="outlined"
                      sx={{
                        borderRadius: "6px",
                        borderColor: theme.palette.secondary.main,
                        background: "transparent",
                        mt: 2,
                        width: "100%",
                        "&:hover": {
                          background: theme.palette.secondary.main,
                          color: "white",
                        },
                      }}
                    />
                  ))}
              </CertificateCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Single Certificate */}
      <CustomModal
        open={showCertificate}
        onClose={() => setShowCertificate(false)}
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
              maxWidth: "794px",
              maxHeight: "100vh",
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
              <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    mr: 1,
                    textDecoration: "none",
                  }}
                >
                  {certificate.title}
                </Typography>
              </Box>
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
