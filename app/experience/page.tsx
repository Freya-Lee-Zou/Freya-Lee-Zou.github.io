"use client";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const workExperience = [
	{
		company: "Amazon",
		position: "Software Dev Engineer I",
		location: "Seattle, WA",
		period: "2025 - Current",
		description: "Developing and maintaining enterprise-scale applications and cloud services using Java, Python, and Vue.js framework. Working on cross-platform communication solutions and microservice architecture improvements.",
		achievements: [
			"Developing cross-platform communication solutions using Java, Python, and Vue.js framework",
			"Participating in code reviews, architecture discussions, and technical design decisions",
			"Working on microservice architecture improvements and AWS cloud services integration"
		]
	},
	{
		company: "Amazon",
		position: "Software Dev Engineer Intern",
		location: "Bellevue, WA",
		period: "June 2024 - September 2024",
		description: "Comprehensive software development internship working on enterprise-scale applications and cloud services.",
		achievements: [
			"Enabled communication between two platforms by utilizing Sharelink microservice as the intermediary, leveraging Java, Python, the Vue.js framework, and AWS services to enhance content-sharing capabilities",
			"Queried data from the S3 bucket using Athena, then implemented API calls to request a link from a microservice by embedding the queried data into the link, enabling users to click the share link on the Impact 2.0 UI to open the Sleuth app and copy the data to the clipboard",
			"Developed unit and integration tests using Mockito and JUnit, and created end-to-end tests for the UI using Cypress",
			"Deployed the project to production across multiple regions, including FE, NA, and EU, and executed the Manual Change Management (MCM) process to gain hands-on experience with the full deployment lifecycle"
		]
	}
];

export default function ExperiencePage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 light:from-white light:via-gray-50 light:to-white min-h-screen">
			<Navigation />
			<div className="container px-4 mx-auto py-20">
				<div className="w-full mx-auto mt-20 space-y-8 max-w-6xl">
					{/* Header */}
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 sm:text-6xl font-display">
							Work Experience
						</h1>

					</div>

					{/* Work Experience Section */}
					<div className="space-y-8">
						<h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 flex items-center gap-2">
							<Briefcase className="w-6 h-6 text-blue-400" />
							Professional Experience
						</h2>
						
						<div className="grid gap-6">
							{workExperience.map((work, index) => (
								<Card key={index}>
									<div className="p-6 space-y-4">
										<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
											<div className="space-y-2">
												<h3 className="text-xl font-semibold text-zinc-100">
													{work.position}
												</h3>
												<p className="text-lg text-zinc-300 font-medium">
													{work.company}
												</p>
												<div className="flex flex-col sm:flex-row gap-4 text-sm text-zinc-400">
													<div className="flex items-center gap-2">
														<MapPin className="w-4 h-4" />
														{work.location}
													</div>
													<div className="flex items-center gap-2">
														<Calendar className="w-4 h-4" />
														{work.period}
													</div>
												</div>
											</div>
										</div>
										
										<p className="text-zinc-300 leading-relaxed break-words">
											{work.description}
										</p>
										
										{work.achievements.length > 0 && (
											<div className="space-y-2">
												<h4 className="font-medium text-zinc-200">Key Accomplishments:</h4>
												<ul className="list-disc list-inside space-y-2 text-zinc-400">
													{work.achievements.map((achievement, idx) => (
														<li key={idx} className="break-words leading-relaxed">{achievement}</li>
													))}
												</ul>
											</div>
										)}
									</div>
								</Card>
							))}
						</div>
					</div>

					{/* Skills & Technologies Section */}
					<div className="space-y-8">
						<h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
							Technical Skills
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Card>
								<div className="p-6 space-y-3">
									<h3 className="text-lg font-semibold text-zinc-100">
										Programming Languages
									</h3>
									<div className="flex flex-wrap gap-2">
										{["Java", "Python", "JavaScript", "TypeScript", "C/C++", "Kotlin", "R"].map((skill) => (
											<span key={skill} className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full">
												{skill}
											</span>
										))}
									</div>
								</div>
							</Card>
							
							<Card>
								<div className="p-6 space-y-3">
									<h3 className="text-lg font-semibold text-zinc-100">
										Frameworks & Libraries
									</h3>
									<div className="flex flex-wrap gap-2">
										{["Vue.js", "React", "Node.js", "Express", "ASP.Net", "Spring Boot"].map((skill) => (
											<span key={skill} className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full">
												{skill}
											</span>
										))}
									</div>
								</div>
							</Card>
							
							<Card>
								<div className="p-6 space-y-3">
									<h3 className="text-lg font-semibold text-zinc-100">
										Cloud & Tools
									</h3>
									<div className="flex flex-wrap gap-2">
										{["AWS", "S3", "Athena", "Docker", "Git", "MongoDB", "SQLite", "Jest", "Cypress"].map((skill) => (
											<span key={skill} className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full">
												{skill}
											</span>
										))}
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
