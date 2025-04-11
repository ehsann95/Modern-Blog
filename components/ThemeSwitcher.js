"use client";

import { useState } from "react";
import { useThemeColor } from "@/context/ThemeColorContext";

export default function ThemeSwitcher() {
  const { colorTheme, setColorTheme } = useThemeColor();
  const [open, setOpen] = useState(false);

  const themes = ["indigo", "red", "green"];

  return (
    <div className="relative">
      <button
        className="px-3 py-1 bg-blog-primary text-white rounded"
        onClick={() => setOpen(!open)}
      >
        Theme
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow rounded z-50 p-2">
          {themes.map((theme) => (
            <button
              key={theme}
              className={`block px-4 py-2 rounded w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === colorTheme ? "font-bold" : ""
              }`}
              onClick={() => {
                setColorTheme(theme);
                setOpen(false);
              }}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
