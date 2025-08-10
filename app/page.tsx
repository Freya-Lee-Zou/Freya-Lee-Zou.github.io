import Link from "next/link";
import React from "react";
import Image from "next/image";
import Particles from "./components/particles";
import { ThemeToggle } from "./components/theme-toggle";

const navigation = [
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black dark:bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black light:bg-gradient-to-tl light:from-white light:via-gray-100 light:to-white">
      {/* Theme toggle in top right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-semibold duration-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:scale-105 transition-transform"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      
      {/* Professional Profile Photo */}
      <div className="relative z-10 mb-8 animate-fade-in">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
          {/* Gradient border container */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 p-1 shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
              <Image
                src="/Freya.JPG"
                alt="Freya Zou Profile Photo"
                width={224}
                height={224}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </div>
          {/* Subtle glow effect */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400/20 via-cyan-500/20 to-teal-400/20 animate-pulse blur-md -z-10"></div>
        </div>
      </div>
      
      <h1 className="py-3.5 px-0.5 z-10 text-3xl text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
        Freya Zou
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {[
            "Machine Learning",
            "Computer Vision", 
            "Neural Networks",
            "Robotics",
            "Deep Learning",
            "Artificial Intelligence",
            "Automation",
            "Edge Computing"
          ].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-blue-400/10 border border-blue-400/20 rounded-full hover:bg-blue-400/20 transition-colors duration-300"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );

}
