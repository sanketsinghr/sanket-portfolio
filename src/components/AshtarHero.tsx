"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronDown } from "lucide-react";

const EPISODE_1_ID = "5rzpWykkL3Q";

export default function AshtarHero() {
  const [entered, setEntered] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => setEntered(true), 100);
  }, []);

  useEffect(() => {
    document.body.style.overflow = playing ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [playing]);

  return (
    <>
      <section className="relative h-[100dvh] overflow-hidden">
        {/* Full-bleed background */}
        <motion.img
          src="/ashtar-hero-thumb.jpg"
          alt="Ashtar"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Play button */}
        <motion.button
          onClick={() => setPlaying(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full bg-white/[0.08] backdrop-blur-md flex items-center justify-center cursor-pointer group hover:bg-white/15 transition-all duration-500 border border-white/[0.08]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={entered ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Play className="w-7 h-7 text-white/90 ml-1 group-hover:scale-110 transition-transform" fill="white" fillOpacity={0.8} />
        </motion.button>

        {/* Title */}
        <div className="absolute bottom-12 md:bottom-16 left-0 right-0 z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={entered ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.25em] text-gradient-amber leading-none"
          >
            ASHTAR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={entered ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-3 text-white/35 text-[10px] md:text-[11px] tracking-[0.3em] uppercase"
          >
            The Beginning.
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* Theater mode overlay */}
      <AnimatePresence>
        {playing && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.button
              onClick={() => setPlaying(false)}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <X className="w-5 h-5 text-white/80" />
            </motion.button>
            <motion.div
              className="h-[85vh] aspect-[9/16] max-w-[90vw]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${EPISODE_1_ID}?autoplay=1&mute=0&loop=1&playlist=${EPISODE_1_ID}&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                title="Ashtar — Episode 1"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="w-full h-full rounded-lg border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
