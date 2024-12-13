import React from "react";
import { Button, CircularProgress } from "@mui/material";

interface CustomButtonProps {
  color?: string;
  label?: string;
  variant?: "text" | "outlined" | "contained"; // Restrict to valid MUI variants
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "#F96E2A",
  label = "Button",
  variant = "contained",
  onClick,
  type = "button",
  loading = false,
  disabled = false,
}) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        boxShadow: "none",
        bgcolor: color,
        minWidth: 150,
        py: 1,
        color: "#fff",
        "&:hover": {
          bgcolor: color,
          opacity: 0.9,
        },
      }}
      onClick={onClick}
      variant={variant}
      type={type}
      disabled={disabled || loading} // Disable the button when loading
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : label}
    </Button>
  );
};

export default CustomButton;
