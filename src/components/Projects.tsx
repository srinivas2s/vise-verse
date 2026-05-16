"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Lumina",
    category: "Generative Art",
    description: "An interactive light sculpture exploring the intersection of physics and code.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Vertex",
    category: "3D Engine",
    description: "A custom WebGL rendering engine built for high-performance data visualization.",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Elysium",
    category: "E-Commerce",
    description: "A luxury shopping experience focused on minimalist design and fluid motion.",
    image: "https://images.unsplash.com/photo-1614850523296-e8c041de43a0?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 py-40 px-6 md:px-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-sm uppercase tracking-[0.5em] text-white/40 mb-4">Selected Works</h2>
          <div className="h-px w-20 bg-white/10 mb-8" />
          <h3 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
            Curated <br /> Projects
          </h3>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-white/20"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  {project.category}
                </p>
                <h4 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed pt-2">
                  {project.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
