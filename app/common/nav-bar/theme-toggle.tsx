"use client";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <BsFillBrightnessHighFill onClick={toggleTheme} className={className} style={{ cursor: "pointer" }} />;
};

export default ThemeToggle;
