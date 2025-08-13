"use client";

import Link from "next/link";
import React, { useState } from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye, Play, Github, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectsPage() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

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

  const toggleProjectExpansion = (projectSlug: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectSlug)) {
      newExpanded.delete(projectSlug);
    } else {
      newExpanded.add(projectSlug);
    }
    setExpandedProjects(newExpanded);
  };

  const isExpanded = (projectSlug: string) => expandedProjects.has(projectSlug);

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
                <div key={project.slug} className="group">
                  <Card>
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleProjectExpansion(project.slug)}
                    >
                      <Article project={project} views={views[project.slug] ?? 0} />
                      
                      {/* Expand/Collapse Indicator */}
                      <div className="mt-3 flex justify-center">
                        <div className="flex items-center space-x-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 text-sm">
                          <span>{isExpanded(project.slug) ? 'Hide Demo' : 'Click to Show Demo'}</span>
                          {isExpanded(project.slug) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Demo Section */}
                    {isExpanded(project.slug) && (
                      <div className="mt-4 p-4 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100/40 rounded-lg border border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-300/40">
                        <h3 className="text-lg font-semibold text-white dark:text-white light:text-zinc-800 mb-4 flex items-center space-x-2">
                          <Play className="w-5 h-5 text-red-500" />
                          <span>Project Demo & Details</span>
                        </h3>
                        
                        {/* YouTube Video Section */}
                        <div className="mb-4">
                          <div className="aspect-video bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 rounded-md flex items-center justify-center">
                            <div className="text-center text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                              <Play className="w-12 h-12 mx-auto mb-2 text-red-500" />
                              <p className="text-sm">Video coming soon</p>
                              <p className="text-xs mt-1">Click to expand and view demo</p>
                            </div>
                          </div>
                        </div>

                        {/* Project Links Section */}
                        <div className="mb-4 p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                          <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-3">Project Links</h4>
                          <div className="flex flex-wrap gap-3">
                            <a 
                              href={`https://github.com/freyazou/${project.slug}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 hover:bg-zinc-600 dark:hover:bg-zinc-600 light:hover:bg-zinc-400 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </a>
                            {project.url && (
                              <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 hover:bg-zinc-600 dark:hover:bg-zinc-600 light:hover:bg-zinc-400 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-sm font-medium transition-colors duration-200"
                              >
                                <span>🌐</span>
                                <span>Website</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-3">
                          <div className="p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                            <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tags?.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-xs rounded-md">
                                  {tag}
                                </span>
                              )) || (
                                <span className="text-zinc-500 dark:text-zinc-500 light:text-zinc-500 text-sm">Tags coming soon</span>
                              )}
                            </div>
                          </div>

                          <div className="p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                            <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-2">Key Features</h4>
                            <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-600 text-sm">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex justify-center pt-2">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="px-4 py-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:from-blue-500 hover:via-cyan-600 hover:to-teal-500 text-white text-sm font-medium rounded-md transition-all duration-200 transform hover:scale-105"
                            >
                              View Full Project Details →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
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
                <div key={project.slug} className="group">
                  <Card>
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleProjectExpansion(project.slug)}
                    >
                      <Article project={project} views={views[project.slug] ?? 0} />
                      
                      {/* Expand/Collapse Indicator */}
                      <div className="mt-3 flex justify-center">
                        <div className="flex items-center space-x-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 text-sm">
                          <span>{isExpanded(project.slug) ? 'Hide Demo' : 'Click to Show Demo'}</span>
                          {isExpanded(project.slug) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Demo Section */}
                    {isExpanded(project.slug) && (
                      <div className="mt-4 p-4 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100/40 rounded-lg border border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-300/40">
                        <h3 className="text-lg font-semibold text-white dark:text-white light:text-zinc-800 mb-4 flex items-center space-x-2">
                          <Play className="w-5 h-5 text-red-500" />
                          <span>Project Demo & Details</span>
                        </h3>
                        
                        {/* YouTube Video Section */}
                        <div className="mb-4">
                          <div className="aspect-video bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 rounded-md flex items-center justify-center">
                            <div className="text-center text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                              <Play className="w-12 h-12 mx-auto mb-2 text-red-500" />
                              <p className="text-sm">Video coming soon</p>
                              <p className="text-xs mt-1">Click to expand and view demo</p>
                            </div>
                          </div>
                        </div>

                        {/* Project Links Section */}
                        <div className="mb-4 p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                          <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-3">Project Links</h4>
                          <div className="flex flex-wrap gap-3">
                            <a 
                              href={`https://github.com/freyazou/${project.slug}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 hover:bg-zinc-600 dark:hover:bg-zinc-600 light:hover:bg-zinc-400 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </a>
                            {project.url && (
                              <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 hover:bg-zinc-600 dark:hover:bg-zinc-600 light:hover:bg-zinc-400 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-sm font-medium transition-colors duration-200"
                              >
                                <span>🌐</span>
                                <span>Website</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-3">
                          <div className="p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                            <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tags?.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-xs rounded-md">
                                  {tag}
                                </span>
                              )) || (
                                <span className="text-zinc-500 dark:text-zinc-500 light:text-zinc-500 text-sm">Tags coming soon</span>
                              )}
                            </div>
                          </div>

                          <div className="p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                            <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-2">Key Features</h4>
                            <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-600 text-sm">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex justify-center pt-2">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="px-4 py-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:from-blue-500 hover:via-cyan-600 hover:to-teal-500 text-white text-sm font-medium rounded-md transition-all duration-200 transform hover:scale-105"
                            >
                              View Full Project Details →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
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
                <div key={project.slug} className="group">
                  <Card>
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleProjectExpansion(project.slug)}
                    >
                      <Article project={project} views={views[project.slug] ?? 0} />
                      
                      {/* Expand/Collapse Indicator */}
                      <div className="mt-3 flex justify-center">
                        <div className="flex items-center space-x-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 text-sm">
                          <span>{isExpanded(project.slug) ? 'Hide Demo' : 'Click to Show Demo'}</span>
                          {isExpanded(project.slug) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Demo Section */}
                    {isExpanded(project.slug) && (
                      <div className="mt-4 p-4 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100/40 rounded-lg border border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-300/40">
                        <h3 className="text-lg font-semibold text-white dark:text-white light:text-zinc-800 mb-4 flex items-center space-x-2">
                          <Play className="w-5 h-5 text-red-500" />
                          <span>Project Demo & Details</span>
                        </h3>
                        
                        {/* YouTube Video Section */}
                        <div className="mb-4">
                          <div className="aspect-video bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 rounded-md flex items-center justify-center">
                            <div className="text-center text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                              <Play className="w-12 h-12 mx-auto mb-2 text-red-500" />
                              <p className="text-sm">Video coming soon</p>
                              <p className="text-xs mt-1">Click to expand and view demo</p>
                            </div>
                            </div>
                        </div>

                        {/* Project Links Section */}
                        <div className="mb-4 p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                          <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-3">Project Links</h4>
                          <div className="flex flex-wrap gap-3">
                            <a 
                              href={`https://github.com/freyazou/${project.slug}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 hover:bg-zinc-600 dark:hover:bg-zinc-600 light:hover:bg-zinc-400 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </a>
                            {project.url && (
                              <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 hover:bg-zinc-600 dark:hover:bg-zinc-600 light:hover:bg-zinc-400 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-800 rounded-md text-sm font-medium transition-colors duration-200"
                              >
                                <span>🌐</span>
                                <span>Website</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-3">
                          <div className="p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                            <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tags?.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-xs rounded-md">
                                  {tag}
                                </span>
                              )) || (
                                <span className="text-zinc-500 dark:text-zinc-500 light:text-zinc-500 text-sm">Tags coming soon</span>
                              )}
                            </div>
                          </div>

                          <div className="p-3 bg-zinc-800/30 dark:bg-zinc-800/30 light:bg-zinc-200/30 rounded-md">
                            <h4 className="font-medium text-white dark:text-white light:text-zinc-800 mb-2">Key Features</h4>
                            <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-600 text-sm">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex justify-center pt-2">
                            <Link
                              href={`/projects/${project.slug}`}
                              className="px-4 py-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:from-blue-500 hover:via-cyan-600 hover:to-teal-500 text-white text-sm font-medium rounded-md transition-all duration-200 transform hover:scale-105"
                            >
                              View Full Project Details →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
