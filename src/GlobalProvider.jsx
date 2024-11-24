import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
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

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use GlobalContext
export const useGlobalProvider = () => {
  return useContext(GlobalContext);
};
