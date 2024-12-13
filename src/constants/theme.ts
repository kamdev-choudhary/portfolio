import { createTheme, ThemeOptions } from "@mui/material/styles";

// Common properties for both light and dark themes
const commonThemeOptions: ThemeOptions = {
  shape: {
    borderRadius: 8, // Set default border radius
  },
  typography: {
    fontFamily: "'Dosis','Roboto', 'Arial', sans-serif",
    fontSize: 14, // Default font size
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Prevent buttons from having uppercase text
          borderRadius: 8, // Use consistent border radius for buttons
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Slightly rounded corners for a modern look
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for modern elevation
          padding: 16, // Standardized padding for better content spacing
        },
      },
    },
  },
};

// Define light theme options
const lightThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: "light",
  },
};

// Define dark theme options
const darkThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: "dark",
  },
};

// Create themes
export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
