"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		// Check if user has a preference stored
		const stored = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		
		if (stored) {
			setIsDark(stored === "dark");
		} else {
			setIsDark(prefersDark);
		}
	}, []);

	useEffect(() => {
		// Apply theme to document
		if (isDark) {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
		
		// Also apply theme to body for immediate effect
		if (isDark) {
			document.body.classList.add("dark");
			document.body.classList.remove("light");
		} else {
			document.body.classList.add("light");
			document.body.classList.remove("dark");
		}
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center h-10 w-44 rounded-full p-1 transition-colors duration-300 ${
        isDark
          ? "bg-zinc-900/90 border border-zinc-700/60 shadow-inner"
          : "bg-white/90 border border-zinc-200 shadow-sm"
      }`}
    >
      {/* Label that matches the current mode */}
      <span
        className={`flex-1 text-left text-sm font-semibold select-none ${
          isDark ? "text-white/90 pl-4 pr-12" : "text-zinc-800 pl-12 pr-4"
        }`}
      >
        {isDark ? "Dark mode" : "Light mode"}
      </span>
      {/* Knob slides left/right and uses brand gradient */}
      <span
        className={`absolute top-1 bottom-1 transition-all duration-300 ease-out ${
          isDark ? "right-1" : "left-1"
        }`}
      >
        <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full shadow-md bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400">
          {isDark ? (
            <Moon className="w-4 h-4 text-white/95" />
          ) : (
            <Sun className="w-4 h-4 text-white/95" />
          )}
        </span>
      </span>
    </button>
  );
};
