import { createTheme } from "@mui/material/styles";

// Define the Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f1f3fb",
      paper: "#ffffff",
      secondary: "#F6F5F5",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          ":hover": {
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  },
});

// Define the Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Customize your primary color
    },
    secondary: {
      main: "#f48fb1", // Customize your secondary color
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
      secondary: "#2e2e2e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Customize border radius
          padding: "16px", // Default padding
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)", // Shadow style
        },
      },
    },
  },
});
