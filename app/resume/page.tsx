"use client";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { ThemeToggle } from "../components/theme-toggle";

export default function Resume() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 light:from-white light:via-gray-50 light:to-white min-h-screen">
      <Navigation />
      
      {/* Theme toggle in top right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="container px-4 mx-auto py-20">
        <div className="w-full mx-auto mt-20 space-y-8 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 sm:text-6xl font-display">
              Resume
            </h1>
          </div>

          {/* Resume Content */}
          <div className="space-y-8">
            {/* Download Resume Button */}
            <div className="text-center">
              <a
                href="/Freya_Zou_Resume copy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-100 transition-colors duration-300 transform hover:scale-105"
              >
                📄 Download PDF Resume
              </a>
            </div>

            {/* Contact Information */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-2 text-zinc-300">
                  <p><strong>Email:</strong> freyaleezou1998@gmail.com</p>
                  <p><strong>GitHub:</strong> <a href="https://github.com/Freya-Lee-Zou" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">github.com/Freya-Lee-Zou</a></p>
                  <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/freya-zou-068615252/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">linkedin.com/in/freya-zou-068615252/</a></p>
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 mb-4">
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Oregon State University</h3>
                    <p className="text-zinc-400">Bachelor of Science in Computer Science</p>
                    <p className="text-zinc-500">Sept 2021 - March 2025</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Saint-Petersburg State University</h3>
                    <p className="text-zinc-400">Bachelor of Science in Computer Science</p>
                    <p className="text-zinc-500">2018 - 2021</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 mb-4">
                  Work Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Software Dev Engineer I - Amazon</h3>
                    <p className="text-zinc-400">Seattle, WA</p>
                    <p className="text-zinc-500">2025 - Current</p>
                    <ul className="mt-2 text-zinc-300 space-y-1">
                      <li>• Enabled communication between two platforms by utilizing Sharelink microservice as the intermediary</li>
                      <li>• Leveraged Java, Python, Vue.js framework, and AWS services to enhance content-sharing capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Software Development Engineer Intern - Amazon</h3>
                    <p className="text-zinc-400">Seattle, WA</p>
                    <p className="text-zinc-500">June 2024 - September 2024</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Technical Skills */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 mb-4">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Programming Languages</h3>
                    <p className="text-zinc-300">Java, Python, JavaScript, TypeScript, C++, C</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Web Technologies</h3>
                    <p className="text-zinc-300">React, Vue.js, Node.js, HTML, CSS, Tailwind CSS</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h3>
                    <p className="text-zinc-300">AWS, Docker, Git, CI/CD</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Databases</h3>
                    <p className="text-zinc-300">MySQL, PostgreSQL, MongoDB</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">AI/ML</h3>
                    <p className="text-zinc-300">Machine Learning, Computer Vision, Neural Networks, Deep Learning</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Tools & Frameworks</h3>
                    <p className="text-zinc-300">TensorFlow, PyTorch, OpenCV, Jupyter, Pandas, NumPy</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Projects Summary */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 mb-4">
                  Key Projects
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">Cloud Algorithmic Trading System</span>
                    <a href="/projects/cloud-algorithmic-trading" className="text-blue-400 hover:text-blue-300">View →</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">Full Test Suite Chart Application</span>
                    <a href="/projects/full-test-suite-chart-app" className="text-blue-400 hover:text-blue-300">View →</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">E-commerce Database System</span>
                    <a href="/projects/ecommerce-database-system" className="text-blue-400 hover:text-blue-300">View →</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300">Android Rebrickable App</span>
                    <a href="/projects/android-rebrickable-app" className="text-blue-400 hover:text-blue-300">View →</a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
