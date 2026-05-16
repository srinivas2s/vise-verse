"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function TextOverlay() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    // Phase 1 lasts for 4 seconds, then transition to Phase 2
    const timer = setTimeout(() => {
      setPhase(2);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <AnimatePresence mode="wait">
        {phase === 1 ? (
          <motion.div
            key="phase1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-start justify-center pl-24"
          >
            <h1 
              className="text-white text-8xl font-['Pricedown','Pricedown_Bl','pricedown'] tracking-normal leading-tight"
              style={{ 
                textShadow: "6px 6px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 15px 40px rgba(0,0,0,0.8)"
              }}
            >
              Every city<br/> has problems.
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="phase2"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-10"
          >
            <h1 
              className="text-white text-8xl font-['Pricedown','Pricedown_Bl','pricedown'] tracking-normal leading-tight"
              style={{ 
                textShadow: "8px 8px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 20px 50px rgba(0,0,0,1)"
              }}
            >
              Today, you build the solution.
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

