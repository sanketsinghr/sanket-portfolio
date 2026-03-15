"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play } from "lucide-react";

const VIDEOS = [
  { id: "4pBBg0ooBao", title: "NYC Box" },
  { id: "xpdDtV8rVUY", title: "Flying Fortress" },
  { id: "bfZeExnBdHc", title: "Product Shot" },
  { id: "kA3sUG55DQ0", title: "Dwarka Aerial" },
  { id: "egB2R8wcmIo", title: "Wild Card" },
  { id: "PmGXVORwDRI", title: "Mumbai 2047" },
];

function VideoThumb({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video rounded overflow-hidden bg-black group">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button onClick={() => setPlaying(true)} className="w-full h-full cursor-pointer" aria-label={`Play ${title}`}>
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-3 h-3 text-white ml-px" fill="white" fillOpacity={0.9} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-[8px] uppercase tracking-[0.12em] text-white/40">{title}</p>
          </div>
        </button>
      )}
    </div>
  );
}

export default function MoreWork() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: k12Ref, isVisible: k12Visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl md:text-4xl text-white/90">More Work</h2>
          <p className="mt-3 text-white/25 text-sm tracking-wide max-w-md mx-auto">
            When the engine works, you run it. Cities, creatures, product shots
            &mdash; same pipeline, different playground.
          </p>
        </motion.div>

        {/* 3×2 grid of landscape videos — contained */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {VIDEOS.map((v) => (
            <VideoThumb key={v.id} {...v} />
          ))}
        </motion.div>

        {/* K12 — small dark card 
        <motion.div
          ref={k12Ref}
          className="max-w-sm mx-auto mt-14 md:mt-20 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={k12Visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded overflow-hidden">
            <img
              src="/k12-screenshot.png"
              alt="K12 Question Generator Interface"
              className="w-full h-auto brightness-[0.3] saturate-[0.4]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <p className="font-display text-sm md:text-base text-white/75">
                K12 Question Generator
              </p>
              <p className="mt-1 text-white/35 text-xs leading-relaxed">
                AI-powered assessment creation for K-12 education.
              </p>
            </div>
          </div>
        </motion.div>*/}
      </div>
    </section>
  );
}
