"use client";

import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye, Play, Github } from "lucide-react";

export default function ProjectsPage() {
  // Mock views data until Redis is properly configured
  const views = allProjects.reduce((acc, project) => {
    acc[project.slug] = Math.floor(Math.random() * 1000); // Random demo views
    return acc;
  }, {} as Record<string, number>);

  const publishedProjects = allProjects.filter((p) => p.published);

  // Categorize projects
  const aiMLProjects = publishedProjects.filter((project) => 
    project.slug.includes('cloud-algorithmic') || 
    project.slug.includes('cloud-trading') ||
    project.slug.includes('chart-building') ||
    project.slug.includes('full-test-suite')
  );

  const mobileWebProjects = publishedProjects.filter((project) => 
    project.slug.includes('android') ||
    project.slug.includes('chronark') ||
    project.slug.includes('envshare') ||
    project.slug.includes('highstorm') ||
    project.slug.includes('planetfall') ||
    project.slug.includes('unkey') ||
    project.slug.includes('zod-bird') ||
    project.slug.includes('ecommerce') ||
    project.slug.includes('access')
  );

  const cloudInfraProjects = publishedProjects.filter((project) => 
    project.slug.includes('upstash') ||
    project.slug.includes('terraform') ||
    project.slug.includes('qstash')
  );

  // Sort projects by date within each category and limit to 3
  const sortByDate = (projects: typeof publishedProjects) => 
    projects.sort((a, b) => 
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() - 
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    ).slice(0, 3);

  const sortedAiML = sortByDate(aiMLProjects);
  const sortedMobileWeb = sortByDate(mobileWebProjects);
  const sortedCloudInfra = sortByDate(cloudInfraProjects);

  return (
    <div className="relative pb-16 bg-black dark:bg-black light:bg-white min-h-screen">
      {/* Professional light mode background pattern */}
      <div className="absolute inset-0 light:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.03),transparent_50%)] dark:hidden"></div>
      
      <Navigation />
      <div className="container px-4 mx-auto py-20">
        <div className="w-full mx-auto mt-20 space-y-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 sm:text-6xl font-display">
              Projects
            </h1>
          </div>
          <div className="w-full h-px bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200" />

          {/* AI & Machine Learning Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-2">
              <span className="text-white dark:text-white light:text-zinc-800">🤖</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">AI & Machine Learning</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedAiML.map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                  
                  {/* GitHub Link Section */}
                  <div className="mt-4 p-3 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100/30 rounded-lg border border-zinc-800/30 dark:border-zinc-800/30 light:border-zinc-300/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Github className="w-4 h-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500" />
                        <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-600">Source Code</span>
                      </div>
                      <a 
                        href={`https://github.com/freyazou/${project.slug}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 hover:bg-zinc-700 dark:hover:bg-zinc-700 light:hover:bg-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-xs font-medium transition-colors duration-200"
                      >
                        View Code
                      </a>
                    </div>
                  </div>

                  {/* YouTube Video Section */}
                  <div className="mt-3 p-3 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100/30 rounded-lg border border-zinc-800/30 dark:border-zinc-800/30 light:border-zinc-300/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Play className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-600">Project Demo</span>
                    </div>
                    <div className="aspect-video bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 rounded-md flex items-center justify-center">
                      <div className="text-center text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                        <Play className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-xs">Video coming soon</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200" />

          {/* Mobile & Web Development Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-2">
              <span className="text-white dark:text-white light:text-zinc-800">📱</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">Mobile & Web Development</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedMobileWeb.map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                  
                  {/* GitHub Link Section */}
                  <div className="mt-4 p-3 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100/30 rounded-lg border border-zinc-800/30 dark:border-zinc-800/30 light:border-zinc-300/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Github className="w-4 h-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500" />
                        <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-600">Source Code</span>
                      </div>
                      <a 
                        href={`https://github.com/freyazou/${project.slug}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 hover:bg-zinc-700 dark:hover:bg-zinc-700 light:hover:bg-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-xs font-medium transition-colors duration-200"
                      >
                        View Code
                      </a>
                    </div>
                  </div>

                  {/* YouTube Video Section */}
                  <div className="mt-3 p-3 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100/30 rounded-lg border border-zinc-800/30 dark:border-zinc-800/30 light:border-zinc-300/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Play className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-600">Project Demo</span>
                    </div>
                    <div className="aspect-video bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 rounded-md flex items-center justify-center">
                      <div className="text-center text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                        <Play className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-xs">Video coming soon</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200" />

          {/* Cloud & Infrastructure Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-2">
              <span className="text-white dark:text-white light:text-zinc-800">☁️</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">Cloud & Infrastructure</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedCloudInfra.map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                  
                  {/* GitHub Link Section */}
                  <div className="mt-4 p-3 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100/30 rounded-lg border border-zinc-800/30 dark:border-zinc-800/30 light:border-zinc-300/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Github className="w-4 h-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-500" />
                        <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-600">Source Code</span>
                      </div>
                      <a 
                        href={`https://github.com/freyazou/${project.slug}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 hover:bg-zinc-700 dark:hover:bg-zinc-700 light:hover:bg-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-xs font-medium transition-colors duration-200"
                      >
                        View Code
                      </a>
                    </div>
                  </div>

                  {/* YouTube Video Section */}
                  <div className="mt-3 p-3 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100/30 rounded-lg border border-zinc-800/30 dark:border-zinc-800/30 light:border-zinc-300/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Play className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-600">Project Demo</span>
                    </div>
                    <div className="aspect-video bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 rounded-md flex items-center justify-center">
                      <div className="text-center text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                        <Play className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-xs">Video coming soon</p>
                      </div>
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
