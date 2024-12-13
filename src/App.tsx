import React, { useMemo, Suspense } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme"; // Adjust path as necessary
import { useGlobalContext } from "./GlobalProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load the Layout component
const LayoutLazy = React.lazy(() => import("./layout/Layout"));

const App: React.FC = () => {
  const { theme } = useGlobalContext();

  // Memoize theme to prevent unnecessary recalculations
  const currentTheme = useMemo(
    () => (theme === "light" ? lightTheme : darkTheme),
    [theme]
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <BrowserRouter basename="/portfolio">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LayoutLazy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
