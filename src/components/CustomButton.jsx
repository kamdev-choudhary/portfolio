import { Button } from "@mui/material";
import React from "react";

function CustomButton({
  color = "#F96E2A",
  label = "Button",
  variant = "contained",
  onClick,
  type,
  loading,
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
      }}
      onClick={onClick}
      variant={variant}
      type={type}
      loading={loading}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
