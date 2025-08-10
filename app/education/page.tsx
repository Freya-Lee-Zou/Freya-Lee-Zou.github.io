"use client";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const education = [
	{
		degree: "Bachelor of Science in Computer Science",
		school: "Oregon State University",
		location: "Corvallis, OR",
		period: "Sept 2021 - March 2025",
		description: "Currently pursuing a comprehensive computer science education with focus on software development, algorithms, and system design. Maintaining excellent academic performance while actively engaged in coursework and projects.",
		achievements: [
			"GPA: 3.95/4.0",
			"Dean's List"
		]
	},
	{
		degree: "Bachelor of Arts in Linguistics",
		school: "Saint-Petersburg State University",
		location: "Saint-Petersburg, Russia", 
		period: "May 2015 - May 2020",
		description: "Completed comprehensive studies in linguistics with focus on language structure, computational linguistics, and cross-cultural communication. Strong foundation in analytical thinking and research methodologies.",
		achievements: [
			"GPA: 4.73/5.0",
			"Graduated with Distinction"
		]
	}
];




export default function EducationPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 light:from-white light:via-gray-50 light:to-white min-h-screen">
			<Navigation />
			<div className="container px-4 mx-auto py-20">
				<div className="w-full mx-auto mt-20 space-y-8 max-w-6xl">
					{/* Header */}
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 sm:text-6xl font-display">
							Education
						</h1>

					</div>

					{/* Education Section */}
					<div className="space-y-8">
						<h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 flex items-center gap-2">
							<GraduationCap className="w-6 h-6 text-blue-400" />
							Academic Background
						</h2>
						
						<div className="grid gap-6">
							{education.map((edu, index) => (
								<Card key={index}>
									<div className="p-6 space-y-4">
										<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
											<div className="space-y-2">
												<h3 className="text-xl font-semibold text-zinc-100">
													{edu.degree}
												</h3>
												<p className="text-lg text-zinc-300 font-medium">
													{edu.school}
												</p>
												<div className="flex flex-col sm:flex-row gap-4 text-sm text-zinc-400">
													<div className="flex items-center gap-2">
														<MapPin className="w-4 h-4" />
														{edu.location}
													</div>
													<div className="flex items-center gap-2">
														<Calendar className="w-4 h-4" />
														{edu.period}
													</div>
												</div>
											</div>
										</div>
										
										<p className="text-zinc-300 leading-relaxed break-words">
											{edu.description}
										</p>
										
										<div className="space-y-2">
											<h4 className="font-medium text-zinc-200">Key Achievements:</h4>
											<ul className="list-disc list-inside space-y-2 text-zinc-400">
												{edu.achievements.map((achievement, idx) => (
													<li key={idx} className="break-words leading-relaxed">{achievement}</li>
												))}
											</ul>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
