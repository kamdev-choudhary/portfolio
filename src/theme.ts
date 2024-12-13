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
          padding: 20, // Standardized padding for better content spacing
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          ":hover": {
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-1px)", // Subtle lift effect on hover
          },
          "&.MuiPaper-elevation1": {
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)", // Custom shadow for elevation 1
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12, // Smooth text field borders
          },
        },
      },
    },
  },
};

// Define vibrant light theme options
const lightThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#f57c00", // Vibrant orange for primary elements
    },
    secondary: {
      main: "#1976d2", // Strong blue for secondary elements
    },
    background: {
      default: "#f1f3fb", // Light gray background for the overall page
      paper: "#ffffff", // White background for Paper components
    },
    text: {
      primary: "#212121", // Dark text color for readability
      secondary: "#757575", // Subtle secondary text color
    },
  },
};

// Define vibrant dark theme options
const darkThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#f57c00", // Vibrant orange for primary elements
    },
    secondary: {
      main: "#1976d2", // Strong blue for secondary elements
    },
    background: {
      default: "#121212", // Dark background for the overall page
      paper: "#1d1d1d", // Slightly lighter dark background for Paper components
    },
    text: {
      primary: "#e0e0e0", // Light text color for readability in dark mode
      secondary: "#b0b0b0", // Subtle secondary text color in dark mode
    },
  },
};

// Create vibrant themes
export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
