import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
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
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
        Freya Lee zou
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
