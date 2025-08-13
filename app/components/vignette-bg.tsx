import React from "react";

type Props = { className?: string };

// Subtle vignette background made with pure CSS gradients (no global CSS).
// Works in both dark and light themes.
export default function VignetteBackground({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {/* Center glow */}
      <div
        className="absolute inset-0 dark:bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.06),transparent_60%)] light:bg-[radial-gradient(80%_60%_at_50%_40%,rgba(0,0,0,0.03),transparent_60%)]"
      />
      {/* Edge vignette */}
      <div
        className="absolute inset-0 dark:bg-[radial-gradient(120%_80%_at_50%_55%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)] light:bg-[radial-gradient(120%_80%_at_50%_55%,rgba(0,0,0,0)_45%,rgba(0,0,0,0.12)_100%)]"
      />
    </div>
  );
}


