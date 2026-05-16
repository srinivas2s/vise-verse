"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MainPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative w-full bg-black overflow-hidden">
      {/* Hero Section - Matching the Image */}
      <motion.section 
        style={{ opacity, scale }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-4 z-10"
      >
        {/* Crown Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-[-20px] z-20"
        >
          <svg width="80" height="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 70L20 30L40 50L50 10L60 50L80 30L90 70H10Z" fill="#ff007f" />
            <circle cx="20" cy="30" r="4" fill="#ff007f" />
            <circle cx="50" cy="10" r="4" fill="#ff007f" />
            <circle cx="80" cy="30" r="4" fill="#ff007f" />
          </svg>
        </motion.div>

        {/* VICE VERSE Text */}
        <div className="relative flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
            className="text-7xl md:text-9xl font-['Pricedown'] text-white leading-none relative tracking-tighter"
            style={{
              WebkitTextStroke: "4px #ff007f",
              paintOrder: "stroke fill",
              textShadow: "0 0 20px rgba(255, 0, 127, 0.5)"
            }}
          >
            VICE VERSE
          </motion.h1>

          {/* Ideathon Text */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: -5 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-[-40px] md:mt-[-60px] z-20"
          >
            <span 
              className="text-5xl md:text-7xl font-['Dancing_Script'] text-[#ff007f]"
              style={{
                textShadow: "2px 2px 0px white, 4px 4px 0px rgba(0,0,0,0.5)"
              }}
            >
              Ideathon
            </span>
          </motion.div>
        </div>

        {/* Tagline on Brush Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 relative"
        >
          <div className="bg-white px-8 py-2 transform -rotate-1 shadow-lg relative">
            <span className="text-black font-bold uppercase tracking-widest text-xs md:text-sm">
              Every Innovation Changes The Game.
            </span>
            {/* Brush Effect (Pseudo) */}
            <div className="absolute -left-4 top-0 bottom-0 w-8 bg-white transform -skew-x-12" />
            <div className="absolute -right-4 top-0 bottom-0 w-8 bg-white transform skew-x-12" />
          </div>
        </motion.div>
      </motion.section>

      {/* Content Sections with Scroll Animations */}
      <div className="relative z-20 px-4 max-w-6xl mx-auto space-y-32 py-32">
        
        {/* Section 1: About */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-[#ff007f] uppercase tracking-tighter">The Vision</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              VICE VERSE is more than just a name; it's a statement. We are redefining the boundaries of innovation, where every idea has the potential to change the game.
            </p>
          </div>
          <div className="aspect-square bg-[#ff007f]/10 border border-[#ff007f]/20 rounded-2xl flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-[#ff007f]/5 blur-3xl group-hover:bg-[#ff007f]/10 transition-all" />
            <span className="text-8xl">🚀</span>
          </div>
        </motion.section>

        {/* Section 2: Cards */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Challenge", icon: "⚔️" },
            { title: "Innovate", icon: "💡" },
            { title: "Conquer", icon: "👑" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#ff007f]/50 transition-colors group"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
              <p className="text-white/40 text-sm">
                Join the ultimate ideathon where creativity meets strategy in a high-stakes environment.
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* Section 3: Call to Action */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#ff007f] to-[#b30059] p-12 md:p-24 rounded-3xl text-center space-y-8 shadow-[0_0_50px_rgba(255,0,127,0.3)]"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter">Ready to Play?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-lg shadow-2xl"
          >
            Register Now
          </motion.button>
        </motion.section>

      </div>

      {/* Footer */}
      <footer className="py-20 text-center text-white/20 uppercase tracking-[0.5em] text-[10px]">
        © 2026 VICE VERSE IDEATHON | ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
