"use client";

import { motion } from "framer-motion";

export default function MainPortfolio() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative z-30 min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-10"
    >
      <div className="max-w-4xl w-full">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.05em" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-7xl font-bold uppercase mb-4"
          >
            Vice Verse
          </motion.h1>
          <p className="text-white/40 uppercase tracking-[0.5em] text-sm">
            Digital Experiences & Cinematic Solutions
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden glass cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold uppercase tracking-wider">Mission 0{i}</h3>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Status: Complete</p>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-32 text-center text-white/20 text-xs uppercase tracking-[0.3em]">
          © 2026 Every city has problems.
        </footer>
      </div>
    </motion.div>
  );
}
