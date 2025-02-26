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

  return (
    <button
      className="p-2  bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? "✈️ Midnight Wanderer" : "🏝️ Sunny Voyager"}
      {/* {currentTheme === "dark" ? "🌌 Night Explorer" : "🌞 Day Adventurer"} */}


    </button>
  );
};

export default ThemeSwitcher;

