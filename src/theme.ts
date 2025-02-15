import { createTheme, ThemeOptions } from "@mui/material/styles";

// Common properties for both themes
const commonThemeOptions: ThemeOptions = {
  shape: {
    borderRadius: 10, // Slightly more rounded corners
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    fontSize: 15,
    fontWeightRegular: 400,
    fontWeightBold: 600,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          padding: "10px 20px",
          fontWeight: 600,
          transition: "all 0.3s ease-in-out",
          ":hover": {
            transform: "translateY(-2px)", // Modern hover effect
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: 24,
          background: "rgba(255, 255, 255, 0.75)", // Optimized glassmorphism effect
          backdropFilter: "blur(12px)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 12px 35px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            "& fieldset": {
              borderWidth: 1.5,
            },
            "&:hover fieldset": {
              borderColor: "#2563eb",
            },
          },
        },
      },
    },
  },
};

// Light Theme with optimized modern colors
const lightThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#ff4d4d", // Modern vibrant red
    },
    secondary: {
      main: "#3b82f6", // Sleek blue
    },
    background: {
      default: "#f9fafb", // Softer neutral background
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
    },
  },
};

// Dark Theme with optimized modern colors
const darkThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4d4d", // Consistent vibrant red
    },
    secondary: {
      main: "#3b82f6", // Sleek blue
    },
    background: {
      default: "#111827", // Darker, rich background
      paper: "#1f2937", // Deep modern dark gray
    },
    text: {
      primary: "#f3f4f6",
      secondary: "#9ca3af",
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
