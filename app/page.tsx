import Link from "next/link";
import React from "react";
import Image from "next/image";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import { TypingAnimation } from "./components/typing-animation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black dark:bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black light:bg-gradient-to-tl light:from-white light:via-gray-50 light:to-white relative">
      {/* Professional light mode background pattern */}
      <div className="absolute inset-0 light:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)] dark:hidden"></div>
      
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
                {/* Animated gradient border with pulsing effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse pointer-events-none"></div>
                
                {/* Floating particles around the button */}
                <div className="absolute -inset-8 pointer-events-none">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 dark:bg-blue-400 light:bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-500 light:bg-cyan-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-teal-400 dark:bg-teal-400 light:bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-blue-400 dark:bg-blue-400 light:bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                </div>
                
                {/* Main button with 3D effects */}
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 dark:from-blue-600 dark:via-cyan-500 dark:to-teal-400 light:from-blue-500 light:via-cyan-400 light:to-teal-400 border border-transparent rounded-2xl text-white font-bold text-xl tracking-wider transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/25 light:group-hover:shadow-blue-400/25 transform hover:rotate-1 z-20"
                >
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                  
                  {/* Button text with glow effect */}
                  <span className="relative z-30 text-white drop-shadow-lg group-hover:drop-shadow-2xl group-hover:drop-shadow-blue-400/50">
                    CONTACT ME
                  </span>
                  
                  {/* Animated arrow icon */}
                  <svg 
                    className="w-6 h-6 ml-3 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 group-hover:text-yellow-300 relative z-30" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"></div>
                </Link>
                
                {/* Magnetic attraction effect - subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-teal-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl scale-150 group-hover:scale-100 pointer-events-none"></div>
              </div>
              

            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* 3D Sphere Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 group">
                {/* 3D Sphere Effect - Multiple layers for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-cyan-500/30 to-teal-400/30 dark:from-blue-400/30 dark:via-cyan-500/30 dark:to-teal-400/30 light:from-blue-400/20 light:via-cyan-500/20 light:to-teal-400/20 blur-sm scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Main gradient border with 3D effect */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 dark:from-blue-400 dark:via-cyan-500 dark:to-teal-400 light:from-blue-500 light:via-cyan-400 light:to-teal-400 p-1.5 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  {/* Inner shadow for 3D depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-black/40 dark:from-white/20 dark:via-transparent dark:to-black/40 light:from-white/40 light:via-transparent light:to-zinc-300/40 pointer-events-none"></div>
                  
                  {/* Profile image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100/90 backdrop-blur-sm">
                    <Image
                      src="/Freya.JPG"
                      alt="Freya Zou Profile Photo"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full transform scale-105 group-hover:scale-110 transition-transform duration-500"
                      priority
                      loading="eager"
                      fetchPriority="high"
                    />
                    
                    {/* Overlay for professional consistency */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/5 via-transparent to-teal-400/5 pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Professional 3D shadows and highlights */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-400/15 via-cyan-500/15 to-teal-400/15 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-400/8 via-cyan-500/8 to-teal-400/8 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 -z-20"></div>
                
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
