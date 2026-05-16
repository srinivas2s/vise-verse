"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import TextOverlay from "@/components/TextOverlay";
import MainPortfolio from "@/components/MainPortfolio";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleVideoEnd = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 h-screen w-full"
          >
            <ScrollyCanvas onVideoEnd={handleVideoEnd} />
            <TextOverlay />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full"
          >
            <MainPortfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
