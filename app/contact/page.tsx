"use client";
import { Github, Mail, Linkedin, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/freya-zou-068615252/",
		label: "LinkedIn",
		handle: "Freya Zou",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:freyazou1@gmail.com",
		label: "Email",
		handle: "freyazou1@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Freya-Lee-Zou",
		label: "Github",
		handle: "Freya-Lee-Zou",
	},
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 light:bg-gradient-to-tl light:from-white light:via-gray-50 light:to-white min-h-screen">
			<Navigation />
			<div className="container px-4 mx-auto py-20">
				<div className="w-full mx-auto mt-20 space-y-8 max-w-6xl">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 sm:text-6xl font-display">
							Contact
						</h1>

					</div>

					{/* Download Resume Button */}
					<div className="text-center">
						<div className="relative inline-block group">
							{/* Gradient Border Effect */}
							<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
							
							{/* Main Button */}
							<a
								href="/Freya_Zou_Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="relative inline-flex items-center justify-center px-8 py-4 bg-black border border-zinc-800 rounded-2xl text-white font-semibold text-lg transition-all duration-300 group-hover:bg-zinc-900 group-hover:border-zinc-700 group-hover:scale-105 shadow-2xl"
							>
								<span className="mr-3">Download Resume</span>
								<Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-400" />
								
								{/* Hover Glow Effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</a>
						</div>
					</div>

					<div className="w-full h-px bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200" />

					<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-6 md:py-16 md:p-12"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center text-center px-2 w-full">
									<span className={`text-base sm:text-lg lg:text-xl font-medium duration-150 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 font-display break-words max-w-full leading-tight ${s.label === 'Email' ? 'text-sm sm:text-base lg:text-lg' : ''}`}>
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
					</div>


				</div>
			</div>
		</div>
	);
}
