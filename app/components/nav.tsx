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
				<div className="container flex items-center p-6 mx-auto">
					{/* Logo on the left */}
					<Link href="/" className="duration-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-cyan-500 hover:to-teal-400 flex items-center">
						<svg className="w-7 h-7 mr-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#60A5FA" />
									<stop offset="50%" stopColor="#06B6D4" />
									<stop offset="100%" stopColor="#14B8A6" />
								</linearGradient>
							</defs>
							<path d="M8 6h14v3h-11v3h9v3h-9v4h-3V6z" fill="url(#logoGradient)"/>
							<path d="M10 20h12l-12 6h12v-2l-10-2h10v-2h-12l12-6h-12v2l10 2h-10v2z" fill="url(#logoGradient)"/>
						</svg>
						<span className="text-xl font-bold">freyazou.com</span>
					</Link>

					{/* Navigation links moved to the right side */}
					<div className="flex gap-8 ml-auto mr-8">
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

					{/* Theme toggle at the absolute far right */}
					<div className="flex items-center">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
};
