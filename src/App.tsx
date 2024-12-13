import React from "react";
import Layout from "./layout/Layout";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./constants/theme"; // Adjust path as necessary
import { useGlobalContext } from "./GlobalProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App: React.FC = () => {
  const { theme } = useGlobalContext();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
