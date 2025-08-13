"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function ContactRobotButton() {
  const [isHappy, setIsHappy] = useState(false);
  const [feeding, setFeeding] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [treat, setTreat] = useState<string>("🍦");
  const [reaction, setReaction] = useState<string>("I'm FZNova — click me to contact my owner");

  const pickReaction = (t: string): string => {
    const map: Record<string, string[]> = {
      "🍦": ["Yum! 🍦", "So cool! ❄️", "Ice dream!"],
      "🍪": ["Crunch! 🍪", "Cookie time!", "Nom nom!"],
      "🧁": ["Sweet! 🧁", "Sugar boost!", "Cupcake joy!"],
      "🍰": ["Cake! 🍰", "Delish!", "More please!"],
    };
    const arr = map[t] || ["Yum!"];
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const handleFeed = (e: React.MouseEvent, chosen?: string) => {
    e.preventDefault();
    e.stopPropagation();
    const t = chosen || treat;
    setTreat(t);
    setReaction(pickReaction(t));
    setMenuOpen(false);
    setFeeding(true);
    setIsHappy(true);
    setTimeout(() => setFeeding(false), 1200);
    setTimeout(() => setIsHappy(false), 3000);
  };
  return (
    <div className="robot-patrol inline-block select-none">
      <Link href="/contact" aria-label="Contact via FZNova" className="inline-block select-none">
        <div className="relative inline-block group">
        <svg
          width="300"
          height="150"
          viewBox="0 0 300 150"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-[1.06]"
          role="img"
        >
        <title>FZNova</title>
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
          <filter id="drop" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" />
          </filter>
          <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.6" />
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#60A5FA" floodOpacity="0.35" />
          </filter>
          <clipPath id="lowerSphereClip">
            <circle cx="185" cy="95" r="52" />
          </clipPath>
          <path id="contactArc" d="M140 105 A45 45 0 0 0 230 105" />
        </defs>

        {/* Shadowed base to feel clickable */}
        <ellipse cx="185" cy="133" rx="68" ry="10" fill="#000" opacity="0.25" />

        {/* Rolling robot group (translate left-right) */}
        <g>
          <animateTransform attributeName="transform" type="translate" dur="12s" values="0 0; 12 0; 0 0; -12 0; 0 0" repeatCount="indefinite" />

          {/* Lower sphere (rolling body) */}
          <g filter="url(#drop)">
          <circle cx="185" cy="95" r="52" fill="#0b0f16" stroke="url(#brandGrad)" strokeWidth="2" />
          {/* Subtle rotating panel ring */}
          <g clipPath="url(#lowerSphereClip)">
            <g transform="translate(185 95)">
              <circle r="40" fill="none" stroke="url(#brandGrad)" strokeOpacity="0.25" strokeWidth="10">
                <animateTransform attributeName="transform" type="rotate" dur="12s" from="0" to="360" repeatCount="indefinite" />
              </circle>
            </g>
            {/* Centered label inside the lower sphere for maximum readability */}
            <text
              x="185"
              y="100"
              textAnchor="middle"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2"
              fontSize="18"
              fontWeight="800"
              filter="url(#textGlow)"
              style={{ paintOrder: "stroke fill" }}
            >
              Contact
            </text>
          </g>
          </g>

          {/* Head (slight sway) */}
          <g>
            <ellipse cx="185" cy="50" rx="36" ry="24" fill="#0f172a" stroke="url(#brandGrad)" />
            {/* Left eye */}
            {isHappy ? (
              <g transform="translate(173, 50)">
                <path d="M-6,0 C-6,-4.5 -1.5,-6 0,-3 C1.5,-6 6,-4.5 6,0 C6,4.5 0,6 0,3 C0,6 -6,4.5 -6,0 Z" fill="#ef4444" />
              </g>
            ) : (
              <circle cx="173" cy="50" r="6" fill="#93c5fd">
                <animate attributeName="cx" values="173;176;173" dur="3s" repeatCount="indefinite" />
                <animate attributeName="r" values="6;6;0.8;6" keyTimes="0;0.86;0.9;1" dur="4.8s" repeatCount="indefinite" />
              </circle>
            )}
            {/* Right eye */}
            {isHappy ? (
              <g transform="translate(193, 50)">
                <path d="M-6,0 C-6,-4.5 -1.5,-6 0,-3 C1.5,-6 6,-4.5 6,0 C6,4.5 0,6 0,3 C0,6 -6,4.5 -6,0 Z" fill="#ef4444" />
              </g>
            ) : (
              <circle cx="193" cy="50" r="6" fill="#5eead4">
                <animate attributeName="cx" values="193;190;193" dur="3s" repeatCount="indefinite" />
                <animate attributeName="r" values="6;6;0.8;6" keyTimes="0;0.86;0.9;1" dur="5.2s" repeatCount="indefinite" />
              </circle>
            )}
            <animateTransform attributeName="transform" type="rotate" values="-5 185 50; 5 185 50; -5 185 50" dur="4s" repeatCount="indefinite" />
          </g>
          <line x1="185" y1="20" x2="185" y2="28" stroke="url(#brandGrad)" strokeWidth="2" />
          <circle cx="185" cy="18" r="2" fill="url(#brandGrad)" />
        </g>
      </svg>
      {/* Hover pop-out conversation bubble */}
      <div className={`robot-bubble absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl opacity-0 scale-90 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 ${feeding ? 'opacity-100 scale-100' : ''} bg-zinc-900/95 text-white dark:bg-zinc-900/95 dark:text-white light:bg-white/95 light:text-zinc-900 border border-cyan-400/60 dark:border-cyan-400/60 light:border-zinc-300`}>
        {isHappy ? reaction : "I'm FZNova — click me to contact my owner"}
      </div>
      {/* Treat menu toggle */}
      <div className="absolute -right-3 -top-3">
        <button type="button" onClick={(e)=>{e.preventDefault();e.stopPropagation();setMenuOpen(v=>!v);}} className="feed-btn w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white shadow-lg border border-white/20 opacity-80 hover:opacity-100 transition focus:outline-none">🍬</button>
        {menuOpen && (
          <div className="mt-2 ml-[-6rem] w-28 rounded-xl bg-zinc-900/95 text-white dark:bg-zinc-900/95 dark:text-white light:bg-white/95 light:text-zinc-900 border border-cyan-400/50 light:border-zinc-300 p-2 flex justify-between gap-1 shadow-xl">
            {['🍦','🍪','🧁','🍰'].map(t => (
              <button key={t} className="w-8 h-8 rounded-md bg-zinc-800/40 light:bg-white/70 hover:scale-110 transition" onClick={(e)=>handleFeed(e, t)}>{t}</button>
            ))}
          </div>
        )}
      </div>
      {/* Treat drop animation */}
      {feeding && (
        <div className="ice absolute right-2 -top-6 text-2xl animate-drop-ice">{treat}</div>
      )}
      </div>
    </Link>
    <style jsx>{`
      @keyframes patrol {
        0% { transform: translateX(var(--min-x, 12vw)); }
        45% { transform: translateX(var(--stop-x, 60vw)); }
        55% { transform: translateX(var(--stop-x, 60vw)); }
        100% { transform: translateX(var(--min-x, 12vw)); }
      }
      .robot-patrol {
        position: fixed;
        left: 0;
        bottom: 3vh;
        z-index: 40;
        animation: patrol 36s ease-in-out infinite;
        pointer-events: auto;
      }
      /* Theme-specific bubble overrides to ensure readability */
      :global(html.dark) .robot-bubble {
        background: rgba(24,24,27,0.95);
        color: #ffffff;
        border-color: rgba(34,211,238,0.6);
        text-shadow: 0 1px 1px rgba(0,0,0,0.4);
      }
      :global(html.light) .robot-bubble {
        background: rgba(255,255,255,0.98);
        color: #18181b;
        border-color: #d4d4d8;
        box-shadow: 0 8px 18px rgba(0,0,0,0.18);
      }
      .robot-bubble::after{
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 12px;
        height: 12px;
        background: rgba(24,24,27,0.95);
        border-left: 1px solid rgba(34,211,238,0.6);
        border-bottom: 1px solid rgba(34,211,238,0.6);
        border-radius: 2px;
      }
      :global(html.light) .robot-bubble::after {
        background: rgba(255,255,255,0.98);
        border-left-color: #d4d4d8;
        border-bottom-color: #d4d4d8;
      }
      .feed-btn { pointer-events: auto; }
      @keyframes drop-ice {
        0% { transform: translateY(-20px) scale(0.9); opacity: 0; }
        40% { transform: translateY(6px) scale(1); opacity: 1; }
        100% { transform: translateY(24px) scale(0.8); opacity: 0; }
      }
      .animate-drop-ice { animation: drop-ice 1.1s ease-out forwards; }
      @media (prefers-reduced-motion: reduce) {
        .robot-patrol { animation: none; }
      }
    `}</style>
    </div>
  );
}


