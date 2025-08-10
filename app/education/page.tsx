"use client";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const education = [
	{
		degree: "Bachelor of Science in Computer Science",
		school: "Oregon State University",
		location: "Corvallis, OR",
		period: "Sept 2021 - Current",
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


const certifications = [
	{
		title: "AWS Certified Solutions Architect",
		issuer: "Amazon Web Services",
		date: "2023",
		credentialId: "AWS-SAA-123456"
	},
	{
		title: "Google Cloud Professional Developer",
		issuer: "Google Cloud",
		date: "2023",
		credentialId: "GCP-PD-789012"
	},
	{
		title: "React Developer Certification",
		issuer: "Meta",
		date: "2022",
		credentialId: "META-RD-345678"
	}
];

export default function EducationPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="w-full mx-auto mt-32 sm:mt-0 space-y-8 max-w-4xl">
					{/* Header */}
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 sm:text-6xl font-display">
							Education
						</h1>
						<p className="mt-6 text-lg leading-8 text-zinc-300">
							My academic journey and professional certifications
						</p>
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
										
										<p className="text-zinc-300 leading-relaxed">
											{edu.description}
										</p>
										
										<div className="space-y-2">
											<h4 className="font-medium text-zinc-200">Key Achievements:</h4>
											<ul className="list-disc list-inside space-y-1 text-zinc-400">
												{edu.achievements.map((achievement, idx) => (
													<li key={idx}>{achievement}</li>
												))}
											</ul>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>



					{/* Certifications Section */}
					<div className="space-y-8">
						<h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
							Professional Certifications
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{certifications.map((cert, index) => (
								<Card key={index}>
									<div className="p-6 space-y-3">
										<h3 className="text-lg font-semibold text-zinc-100">
											{cert.title}
										</h3>
										<p className="text-zinc-300">
											{cert.issuer}
										</p>
										<div className="flex justify-between items-center text-sm text-zinc-400">
											<span>{cert.date}</span>
											<span className="font-mono text-xs">
												{cert.credentialId}
											</span>
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
