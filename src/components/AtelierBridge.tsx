"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function AtelierBridge() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center py-20">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-white/90">
            Everything above?
          </h2>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-gradient-amber mt-2">
            I built the tool that made it.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="https://atelier-official.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/[0.1] hover:border-amber-400/30 hover:bg-white/[0.03] transition-all duration-500"
          >
            <span className="text-sm tracking-[0.12em] uppercase text-white/60 group-hover:text-amber-400/90 transition-colors">
              Explore Atelier
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/35 group-hover:text-amber-400/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
