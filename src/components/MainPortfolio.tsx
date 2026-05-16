"use client";

import { motion } from "framer-motion";

export default function MainPortfolio() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-30 min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-10"
    >
      <motion.img 
        src="/logo.jpg"
        alt="Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-[200px] md:max-w-[300px] mb-12 rounded-lg shadow-2xl"
      />
      <motion.h1 
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0.1em" }}
        transition={{ delay: 0.5, duration: 2 }}
        className="text-5xl md:text-8xl font-bold uppercase tracking-widest text-white/90"
      >
        Vice Verse
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-6 text-white/20 uppercase tracking-[0.4em] text-xs"
      >
        Coming Soon
      </motion.p>
    </motion.div>
  );
}
