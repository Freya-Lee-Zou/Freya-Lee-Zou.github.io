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
			className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 dark:bg-zinc-200/10 dark:hover:bg-zinc-200/20 transition-all duration-200 group"
			aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
		>
			<div className="relative w-5 h-5">
				{/* Sun icon */}
				<Sun
					className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 ${
						isDark
							? "scale-0 rotate-90 opacity-0"
							: "scale-100 rotate-0 opacity-100"
					}`}
				/>
				{/* Moon icon */}
				<Moon
					className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 ${
						isDark
							? "scale-100 rotate-0 opacity-100"
							: "scale-0 -rotate-90 opacity-0"
					}`}
				/>
			</div>
			
			{/* Hover glow effect */}
			<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-cyan-500/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
		</button>
	);
};
