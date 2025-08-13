"use client";

import Link from "next/link";
import React from "react";

export default function ContactRobotButton() {
  return (
    <Link href="/contact" aria-label="Contact me" className="inline-block select-none">
      <svg
        width="300"
        height="150"
        viewBox="0 0 300 150"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-[1.03]"
        role="img"
      >
        <title>Contact me</title>
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
          <animateTransform attributeName="transform" type="translate" dur="4s" values="0 0; 12 0; 0 0; -12 0; 0 0" repeatCount="indefinite" />

          {/* Lower sphere (rolling body) */}
          <g filter="url(#drop)">
          <circle cx="185" cy="95" r="52" fill="#0b0f16" stroke="url(#brandGrad)" strokeWidth="2" />
          {/* Subtle rotating panel ring */}
          <g clipPath="url(#lowerSphereClip)">
            <g transform="translate(185 95)">
              <circle r="40" fill="none" stroke="url(#brandGrad)" strokeOpacity="0.25" strokeWidth="10">
                <animateTransform attributeName="transform" type="rotate" dur="3s" from="0" to="360" repeatCount="indefinite" />
              </circle>
            </g>
            {/* Text on the lower sphere - bigger and outlined for contrast */}
            <text
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="2"
              fontSize="18"
              fontWeight="800"
              filter="url(#textGlow)"
              style={{ paintOrder: "stroke fill" }}
            >
              <textPath href="#contactArc" startOffset="50%" textAnchor="middle">Contact →</textPath>
            </text>
          </g>
          </g>

          {/* Head (slight sway) */}
          <g>
            <ellipse cx="185" cy="50" rx="36" ry="24" fill="#0f172a" stroke="url(#brandGrad)" />
            {/* Left eye */}
            <circle cx="173" cy="50" r="6" fill="#93c5fd">
              <animate attributeName="cx" values="173;176;173" dur="3s" repeatCount="indefinite" />
              <animate attributeName="r" values="6;6;0.8;6" keyTimes="0;0.86;0.9;1" dur="4.8s" repeatCount="indefinite" />
            </circle>
            {/* Right eye */}
            <circle cx="193" cy="50" r="6" fill="#5eead4">
              <animate attributeName="cx" values="193;190;193" dur="3s" repeatCount="indefinite" />
              <animate attributeName="r" values="6;6;0.8;6" keyTimes="0;0.86;0.9;1" dur="5.2s" repeatCount="indefinite" />
            </circle>
            <animateTransform attributeName="transform" type="rotate" values="-5 185 50; 5 185 50; -5 185 50" dur="4s" repeatCount="indefinite" />
          </g>
          <line x1="185" y1="20" x2="185" y2="28" stroke="url(#brandGrad)" strokeWidth="2" />
          <circle cx="185" cy="18" r="2" fill="url(#brandGrad)" />
        </g>
      </svg>
    </Link>
  );
}


