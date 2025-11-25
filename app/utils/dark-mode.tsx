"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const DarkMode = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default DarkMode;
