import Link from "next/link";
import React from "react";
import Image from "next/image";
import Particles from "./components/particles";
import VignetteBackground from "./components/vignette-bg";
import ContactRobotButton from "./components/contact-robot";
import { Navigation } from "./components/nav";
import { TypingAnimation } from "./components/typing-animation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black dark:bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black light:bg-gradient-to-tl light:from-white light:via-gray-50 light:to-white relative">
      {/* Cinematic vignette background */}
      <VignetteBackground className="absolute inset-0 -z-20" />
      
      <Navigation />

      {/* Main Content - Two Column Layout */}
      <div className="container mx-auto px-6 pt-24 pb-16" id="hero-root">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white light:text-zinc-900 leading-tight">
                <span className="inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 typing-animation-text">
                    <TypingAnimation 
                      texts={["I'm Freya Zou, Software Engineer, AI/ML Developer."]}
                      speed={80}
                      delay={3000}
                    />
                  </span>
                </span>
              </h1>
              
            </div>
            
            {/* Tagline removed for a cleaner hero */}
            
            {/* Call to Action Button */}
            <div className="pt-8">
              <ContactRobotButton />
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* 3D Sphere Profile Image Container */}
              <div id="profile-sphere" className="relative w-[26rem] h-[26rem] lg:w-[34rem] lg:h-[34rem] group">
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
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-full transform scale-100 group-hover:scale-105 transition-transform duration-500"
                      style={{
                        objectPosition: '20% 50%',
                        WebkitMaskImage:
                          'radial-gradient(circle at 42% 50%, black 78%, transparent 98%)',
                        maskImage:
                          'radial-gradient(circle at 42% 50%, black 78%, transparent 98%)',
                      }}
                      priority
                      loading="eager"
                      fetchPriority="high"
                    />
                    
                    {/* Overlay for professional consistency */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/5 via-transparent to-teal-400/5 mix-blend-soft-light pointer-events-none"></div>
                    {/* Right-side blend tint for better integration with background */}
                    <div className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-transparent via-transparent to-black/55 dark:to-black/65 light:to-white/70"></div>
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
              {/* Right-side external vignette to blend sphere into page bg */}
              <div className="pointer-events-none absolute right-[-120px] top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] -z-10">
                <div className="w-full h-full rounded-full dark:bg-[radial-gradient(60%_60%_at_0%_50%,rgba(0,0,0,0.6)_0%,transparent_70%)] light:bg-[radial-gradient(60%_60%_at_0%_50%,rgba(0,0,0,0.08)_0%,transparent_70%)]"></div>
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
      <script dangerouslySetInnerHTML={{__html: `
        (function(){
          function updateStop(){
            try{
              var sphere = document.getElementById('profile-sphere');
              var root = document.getElementById('hero-root');
              var patrol = document.querySelector('.robot-patrol');
              if(!sphere || !root || !patrol) return;
              var sphereRect = sphere.getBoundingClientRect();
              var rootRect = root.getBoundingClientRect();
              var patrolRect = patrol.getBoundingClientRect();
              var margin = 24; // space to keep before picture
              var stopX = (sphereRect.left - rootRect.left) - patrolRect.width - margin; // stop before picture
              var maxX = rootRect.width - patrolRect.width - margin;
              var minX = Math.min(0.12 * rootRect.width, stopX - 80); // don't go too far left; keep some travel range
              if (minX < 60) minX = 60;
              if (stopX < minX + 120) stopX = minX + 120; // ensure distance between min and stop
              if (stopX > maxX) stopX = maxX;
              patrol.style.setProperty('--stop-x', stopX + 'px');
              patrol.style.setProperty('--min-x', minX + 'px');
              // robot is pinned to bottom so only stop-x matters
            }catch(e){}
          }
          window.addEventListener('load', updateStop);
          window.addEventListener('resize', updateStop);
          window.addEventListener('orientationchange', updateStop);
          setTimeout(updateStop, 100);
        })();
      `}} />
    </div>
  );
}
