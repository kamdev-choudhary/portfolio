import { Button, CircularProgress } from "@mui/material";
import React from "react";

function CustomButton({
  color = "#F96E2A",
  label = "Button",
  variant = "contained",
  onClick,
  type,
  loading = false,
  disabled,
}) {
  return (
    <Button
      sx={{
        textTransform: "none",
        boxShadow: "none",
        bgcolor: color,
        minWidth: 150,
        py: 1,
        color: "#fff",
      }}
      onClick={onClick}
      variant={variant}
      type={type}
      disabled={disabled || loading} // Disable the button when loading
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : label}
    </Button>
  );
}

export default CustomButton;
