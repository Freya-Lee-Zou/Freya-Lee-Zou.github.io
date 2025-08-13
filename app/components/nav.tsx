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
					<Link href="/" aria-label="Go to home" className="duration-200 flex items-center hover:opacity-90">
						<div className="mr-2 relative w-10 h-10">
							{/* Spinning gradient ring */}
							<div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 animate-[spin_14s_linear_infinite] shadow-md">
								{/* Inner sphere */}
								<div className="w-full h-full rounded-full flex items-center justify-center bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100">
									<span className="text-sm font-black text-white leading-none">FZ</span>
								</div>
							</div>
						</div>
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
