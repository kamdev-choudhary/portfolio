import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  CancelRounded,
  FullscreenExitRounded,
  FullscreenRounded,
} from "@mui/icons-material";

interface CustomModalProps {
  open: boolean;
  autoClose?: boolean;
  children: React.ReactNode;
  header?: string;
  onClose: () => void;
  height?: string;
  width?: string;
  showHeader?: boolean;
  showFullScreenButton?: boolean;
  minHeight?: string | number;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  open,
  autoClose = true,
  children,
  header = "",
  onClose,
  height = "90vh",
  width = "80vw",
  showHeader = true,
  showFullScreenButton = false,
  minHeight = "",
}) => {
  const [fullScreen, setFullScreen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = "light"; // Replace with theme context if necessary

  return (
    <Modal open={open} onClose={autoClose ? onClose : undefined}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: theme === "light" ? "#f0f3fb" : "#222",
          borderRadius: 2,
          boxShadow: 24,
          width: fullScreen || isSmallScreen ? "97vw" : width,
          height: fullScreen ? "100vh" : height,
          display: "flex",
          flexDirection: "column",
          p: 1,
          minHeight: minHeight || "",
        }}
      >
        {showHeader && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontSize: 23 }}>
                {header}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {showFullScreenButton && (
                  <IconButton onClick={() => setFullScreen((prev) => !prev)}>
                    {fullScreen ? (
                      <FullscreenExitRounded />
                    ) : (
                      <FullscreenRounded />
                    )}
                  </IconButton>
                )}
                <IconButton onClick={onClose}>
                  <CancelRounded />
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ mb: 1 }} />
          </>
        )}

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            maxHeight: fullScreen
              ? "calc(100vh - 70px)"
              : `calc(${height} - 70px)`,
          }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
};
