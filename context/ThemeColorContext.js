import { createContext, useContext, useState, useEffect } from "react";

const ThemeColorContext = createContext();

export const ThemeColorProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("indigo");

  useEffect(() => {
    const root = document.documentElement;
    const colorMap = {
      indigo: {
        "--primary-color": "79 70 229", // indigo-600
        "--accent-color": "55 48 163", // indigo-800
      },
      red: {
        "--primary-color": "239 68 68", // red-500
        "--accent-color": "220 38 38", // red-600
      },
      green: {
        "--primary-color": "34 197 94", // green-500
        "--accent-color": "22 163 74", // green-600
      },
    };

    const selectedColors = colorMap[colorTheme] || colorMap.indigo;
    Object.entries(selectedColors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [colorTheme]);

  return (
    <ThemeColorContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColor = () => {
  const context = useContext(ThemeColorContext);
  if (context === undefined) {
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  }
  return context;
};
