"use client";

import { motion } from "framer-motion";

export default function ScrollyCanvas() {
  return (
    <div className="absolute inset-0 bg-[#121212]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
        style={{ 
          display: "block", 
          transform: "scale(1.05)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          filter: "brightness(1.02) contrast(1.1) saturate(1.05)"
        }}
      >
        <source src="/background.mov" type="video/quicktime" />
        <source src="/background.mov" type="video/mp4" />
      </video>
    </div>
  );
}

