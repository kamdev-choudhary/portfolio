import React, { Suspense, useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
import Loader from "./components/Loader";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./constants/theme";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Retrieve theme from localStorage
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "light" || localTheme === "dark") {
      setTheme(localTheme);
    }
  }, []);

  // Memoize theme toggle function to prevent unnecessary re-renders
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
  }, [theme]);

  const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Suspense fallback={<Loader open={true} />}>
        <Router basename="/portfolio">
          <Routes>
            {/* Default route */}
            <Route
              path="/"
              element={<DefaultLayout toggleTheme={toggleTheme} />}
            />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
