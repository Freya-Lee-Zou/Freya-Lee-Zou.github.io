"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div className="fixed inset-x-0 top-0 z-50 duration-200 bg-gradient-to-b from-zinc-900/50 via-zinc-900/20 to-transparent dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-transparent light:from-white/80 light:via-white/40 light:to-transparent">
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex items-center gap-6">
						<ThemeToggle />
						<div className="flex justify-between gap-8">
						<Link
							href="/education"
							className="text-lg font-semibold duration-200 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:scale-105 transition-transform"
						>
							Education
						</Link>
						<Link
							href="/experience"
							className="text-lg font-semibold duration-200 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:scale-105 transition-transform"
						>
							Experience
						</Link>
						<Link
							href="/projects"
							className="text-lg font-semibold duration-200 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:scale-105 transition-transform"
						>
							Projects
						</Link>


						</div>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-cyan-500 hover:to-teal-400 flex items-center"
					>
						<svg 
							width="32" 
							height="32" 
							viewBox="0 0 32 32" 
							className="transition-all duration-200 hover:scale-110"
							fill="none" 
							xmlns="http://www.w3.org/2000/svg"
						>
							{/* Outer circle with gradient stroke */}
							<circle 
								cx="16" 
								cy="16" 
								r="14" 
								stroke="url(#gradient)" 
								strokeWidth="2" 
								fill="none"
							/>
							
							{/* Inner geometric pattern */}
							<path 
								d="M8 16L14 10L18 14L24 8" 
								stroke="url(#gradient)" 
								strokeWidth="2" 
								strokeLinecap="round" 
								strokeLinejoin="round"
								fill="none"
							/>
							
							{/* Central diamond */}
							<path 
								d="M16 12L20 16L16 20L12 16Z" 
								fill="url(#gradient)" 
								opacity="0.6"
							/>
							
							{/* Small accent dots */}
							<circle cx="16" cy="6" r="1.5" fill="url(#gradient)" />
							<circle cx="26" cy="16" r="1.5" fill="url(#gradient)" />
							<circle cx="16" cy="26" r="1.5" fill="url(#gradient)" />
							<circle cx="6" cy="16" r="1.5" fill="url(#gradient)" />
							
							{/* Gradient definition */}
							<defs>
								<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#60a5fa" />
									<stop offset="50%" stopColor="#06b6d4" />
									<stop offset="100%" stopColor="#2dd4bf" />
								</linearGradient>
							</defs>
						</svg>
					</Link>
				</div>
			</div>
		</header>
	);
};
