"use client"
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeSwitcher;