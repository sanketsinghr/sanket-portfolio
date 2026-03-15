"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { ComicPanel, CaptionBox } from "./ComicPrimitives";

export default function AtelierBridgeComic() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="comic-neutral px-3 md:px-8 py-1.5 md:py-2">
      <div className="comic-page max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-left mb-3 md:mb-4">
            <CaptionBox tilt="left" color="gold">Everything above? 
              <br /> I built the machine behind it</CaptionBox>
          </div>

          <ComicPanel variant="wide">
            <a
              href="https://helloatelier.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group overflow-hidden"
            >
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src="/atelier-screenshot.png"
                  alt="Atelier — AI animation tool"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 md:bottom-5 md:left-6 flex items-center gap-2">
                <span className="text-white font-black text-sm md:text-base uppercase tracking-[0.15em]">
                  Explore Atelier
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          </ComicPanel>
        </motion.div>
      </div>
    </section>
  );
}
