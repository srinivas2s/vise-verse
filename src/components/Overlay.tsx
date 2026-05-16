"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface OverlayProps {
  scrollTarget: React.RefObject<HTMLElement | null>;
}

export default function Overlay({ scrollTarget }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 30% scroll
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 60% scroll
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {/* Section 1: Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="flex h-screen w-full flex-col items-center justify-center text-center p-6"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-gradient uppercase">
          John Doe
        </h1>
        <p className="mt-4 text-sm md:text-lg text-white/40 uppercase tracking-[0.5em] font-light">
          Creative Developer
        </p>
      </motion.div>

      {/* Section 2: Left aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="flex h-screen w-full flex-col items-start justify-center px-10 md:px-20"
      >
        <div className="max-w-md">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white">
            I build digital experiences.
          </h2>
          <p className="mt-6 text-base md:text-xl text-white/60 leading-relaxed">
            Crafting immersive interfaces that push the boundaries of what's possible on the web.
          </p>
        </div>
      </motion.div>

      {/* Section 3: Right aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="flex h-screen w-full flex-col items-end justify-center px-10 md:px-20 text-right"
      >
        <div className="max-w-md">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white">
            Bridging design and engineering.
          </h2>
          <p className="mt-6 text-base md:text-xl text-white/60 leading-relaxed">
            Seamlessly blending aesthetic excellence with technical performance.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
