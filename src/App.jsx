import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
import Loader from "./components/Loader";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./constants/theme";
import { useGlobalProvider } from "./GlobalProvider";

function App() {
  const { isLoaded, theme } = useGlobalProvider();

  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  if (!isLoaded) {
    return <Loader open={true} />;
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Suspense fallback={<Loader open={true} />}>
        <BrowserRouter basename="/portfolio">
          <Routes>
            {/* Default route */}
            <Route path="/" element={<DefaultLayout />} />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
