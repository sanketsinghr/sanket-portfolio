"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronDown } from "lucide-react";
import { PageLabel } from "./ComicPrimitives";

const EPISODE_1_ID = "5rzpWykkL3Q";

export default function AshtarHeroComic() {
  const [entered, setEntered] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => setEntered(true), 100);
  }, []);

  useEffect(() => {
    document.body.style.overflow = playing ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [playing]);

  return (
    <>
      <section className="comic-ashtar px-3 md:px-8 pt-14 md:pt-16 pb-1.5 md:pb-2">
        <div className="comic-page max-w-5xl mx-auto p-0 overflow-hidden relative" style={{ aspectRatio: "16/10" }}>
          <PageLabel className="absolute top-3 left-3 md:top-4 md:left-4 z-20">
            Page 1
          </PageLabel>

          <motion.img
            src="/ashtar-hero-thumb.jpg"
            alt="Ashtar"
            className="absolute inset-0 w-full h-full object-cover object-[center_22%] md:object-[center_20%]"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <motion.button
            onClick={() => setPlaying(true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer group hover:bg-white/20 transition-all duration-500 border-2 border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={entered ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Play className="w-6 h-6 text-white ml-0.5 group-hover:scale-110 transition-transform" fill="white" fillOpacity={0.9} />
          </motion.button>

          <div className="absolute bottom-0 md:bottom-0 left-3 md:left-4 z-10">
            <motion.div
              className="inline-block bg-[#fff8dc] border-3 border-[#111] px-2 py-0 md:px-4 md:py-0 -rotate-2"
              style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.3)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={entered ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] text-[#111] leading-none font-black text-left">
                ASHTAR
              </h1>
              <p className="mt-1 text-[#111]/70 text-[10px] md:text-sm tracking-[0.15em] uppercase text-left font-bold font-display">
                The Beginning
              </p>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
              <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {playing && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
          >
            <motion.button
              onClick={() => setPlaying(false)}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            >
              <X className="w-5 h-5 text-white/80" />
            </motion.button>
            <motion.div
              className="h-[85vh] aspect-[9/16] max-w-[90vw]"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${EPISODE_1_ID}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
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
