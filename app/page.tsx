import Link from "next/link";
import React from "react";
import Image from "next/image";
import Particles from "./components/particles";
import VignetteBackground from "./components/vignette-bg";
import { Navigation } from "./components/nav";
import { TypingAnimation } from "./components/typing-animation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black dark:bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black light:bg-gradient-to-tl light:from-white light:via-gray-50 light:to-white relative">
      {/* Cinematic vignette background */}
      <VignetteBackground className="absolute inset-0 -z-20" />
      
      <Navigation />

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white light:text-zinc-900 leading-tight">
                <span className="inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 typing-animation-text">
                    <TypingAnimation 
                      texts={["I'm Freya Zou", "AI Enthusiast", "Problem Solver"]}
                      speed={80}
                      delay={3000}
                    />
                  </span>
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-zinc-300 dark:text-zinc-300 light:text-zinc-600 font-medium">
                Software Engineer & AI/ML Developer
              </h2>
            </div>
            
            {/* Tagline */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-zinc-800">
                I love to Create
              </h3>
              <p className="text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed max-w-lg">
                Building intelligent systems and innovative solutions through machine learning, 
                computer vision, and robotics. Passionate about pushing the boundaries of AI 
                and creating technology that makes a difference.
              </p>
            </div>
            
            {/* Call to Action Button */}
            <div className="pt-6">
              <div className="relative inline-block group">
                {/* Subtle gradient outline */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none"></div>

                {/* Clean primary button */}
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-9 py-4 rounded-2xl text-white font-semibold text-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative">CONTACT ME</span>
                  <svg
                    className="w-5 h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* 3D Sphere Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 group">
                {/* 3D Sphere Effect - Multiple layers for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/15 via-cyan-500/15 to-teal-400/15 blur-sm"></div>
                
                {/* Main gradient border with 3D effect */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 p-[1px] shadow-lg">
                  {/* Inner shadow for 3D depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-black/30 pointer-events-none"></div>
                  
                  {/* Profile image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900/60 backdrop-blur">
                    <Image
                      src="/Freya.JPG"
                      alt="Freya Zou Profile Photo"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full transform scale-105 group-hover:scale-110 transition-transform duration-500"
                      style={{ WebkitMaskImage: 'radial-gradient(closest-side, black 88%, transparent 100%)', maskImage: 'radial-gradient(closest-side, black 88%, transparent 100%)' }}
                      priority
                      loading="eager"
                      fetchPriority="high"
                    />
                    
                    {/* Overlay for professional consistency */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/5 via-transparent to-teal-400/5 mix-blend-soft-light pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Professional 3D shadows and highlights */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-400/12 via-cyan-500/12 to-teal-400/12 blur-2xl opacity-35 -z-10"></div>
                
                {/* Subtle floating particles effect */}
                <div className="absolute inset-0 rounded-full pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/40 dark:bg-blue-400/40 light:bg-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-cyan-500/50 dark:bg-cyan-500/50 light:bg-cyan-600/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-6 left-8 w-1 h-1 bg-teal-400/60 dark:bg-teal-400/60 light:bg-teal-500/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-8 right-4 w-1.5 h-1.5 bg-blue-400/30 dark:bg-blue-400/30 light:bg-blue-500/25 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
      />
    </div>
  );
}
