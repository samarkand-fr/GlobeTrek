"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure this runs only on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full" />; // Placeholder while loading

  const currentTheme = theme === "system" ? systemTheme : theme;

  // Handle theme toggling
  const handleThemeToggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded transition-all duration-300"
      onClick={handleThemeToggle}
    >
      {currentTheme === "dark" ? "✈️ Midnight Wanderer" : "🏝️ Sunny Voyager"}
    </button>
  );
};

export default ThemeSwitcher;
