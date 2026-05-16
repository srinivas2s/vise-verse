"use client";

import { motion } from "framer-motion";

export default function MainPortfolio() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* GTA Style Comic Grid */}
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-2 p-2">
        {/* Top Left: Sunset Skyline */}
        <div className="col-span-6 row-span-5 border-4 border-black shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
          <img src="/panel1.png" className="w-full h-full object-cover" alt="Sunset" />
        </div>

        {/* Top Right: Character Vision */}
        <div className="col-span-6 row-span-7 border-4 border-black shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
          <img src="/panel2.png" className="w-full h-full object-cover" alt="Character" />
        </div>

        {/* Mid Left: Graffiti Wall */}
        <div className="col-span-4 row-span-3 border-4 border-black shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
          <img src="/panel5.png" className="w-full h-full object-cover" alt="Graffiti" />
        </div>

        {/* Bottom Left: Classic Car */}
        <div className="col-span-7 row-span-4 border-4 border-black shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
          <img src="/panel3.png" className="w-full h-full object-cover" alt="Car" />
        </div>

        {/* Bottom Right: Night City Skyline */}
        <div className="col-span-5 row-span-5 col-start-8 row-start-8 border-4 border-black shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
          <img src="/panel4.png" className="w-full h-full object-cover" alt="Night City" />
        </div>
      </div>

      {/* Central Logo Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: -5 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="relative flex flex-col items-center"
        >
          {/* The Crown */}
          <div className="text-pink-500 text-6xl mb-[-20px] drop-shadow-[0_5px_15px_rgba(236,72,153,0.5)]">
            👑
          </div>

          {/* VICE VERSE */}
          <div className="bg-white border-[6px] border-black px-8 py-4 shadow-[10px_10px_0_rgba(0,0,0,1)] flex flex-col items-center">
            <h2 className="text-black text-6xl md:text-9xl font-['Pricedown','pricedown'] leading-none">
              VICE
            </h2>
            <h2 className="text-black text-6xl md:text-9xl font-['Pricedown','pricedown'] leading-none">
              VERSE
            </h2>
          </div>

          {/* IDEATHON */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-[-30px] rotate-[-2deg]"
          >
            <h3 className="text-pink-500 text-6xl md:text-8xl font-['Permanent_Marker'] italic drop-shadow-[0_0_20px_rgba(0,0,0,1)] bg-black px-6 py-2 border-4 border-white">
              IDEATHON
            </h3>
          </motion.div>
        </motion.div>
      </div>

      {/* Overlay Gradient for more punch */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-pink-900/30 pointer-events-none mix-blend-overlay" />
    </motion.div>
  );
}
