"use client";
import { Github, Mail, Linkedin } from "lucide-react";
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
		href: "mailto:freyaleezou1998@gmail.com",
		label: "Email",
		handle: "freyaleezou1998@gmail.com",
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
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 max-w-6xl">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center text-center px-2">
									<span className="text-lg sm:text-xl lg:text-2xl font-medium duration-150 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 font-display break-words max-w-full">
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
	);
}
