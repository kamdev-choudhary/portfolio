import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState("light");

  const getInitialData = async () => {
    try {
      const response = await axios.get(
        "https://script.google.com/macros/s/AKfycbzehAxOZNoECDd8Jb_jYggBxVDmyoenx0K5JGKh-TWTAD_3L1w3cmj6sOxvSp2j1Yj-/exec"
      );
      setData(response?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

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
    <GlobalContext.Provider value={{ ...data, isLoaded, theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use GlobalContext
export const useGlobalProvider = () => {
  return useContext(GlobalContext);
};
