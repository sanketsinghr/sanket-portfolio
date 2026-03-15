"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ComicPanel, CaptionBox, PageLabel } from "./ComicPrimitives";

const VIDEOS = [
  {
    id: "xpdDtV8rVUY",
    title: "AI Cinematography",
    thumb: "https://img.youtube.com/vi/xpdDtV8rVUY/hqdefault.jpg",
    alt: "Flying Fortress",
  },
  {
    id: "bfZeExnBdHc",
    title: "Product Shots",
    thumb: "https://img.youtube.com/vi/bfZeExnBdHc/hqdefault.jpg",
    alt: "Product Shot",
  },
  {
    id: "PmGXVORwDRI",
    title: "Cityscapes",
    thumb: "https://img.youtube.com/vi/PmGXVORwDRI/hqdefault.jpg",
    alt: "Mumbai 2047",
  },
];

const TILTS = ["comic-tilt-1", "comic-tilt-4", "comic-tilt-3"];

function PlayableCard({ id, title, thumb, alt, tilt }: { id: string; title: string; thumb: string; alt: string; tilt: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <ComicPanel className={`h-full ${tilt}`}>
      <div className="relative h-full bg-black overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button onClick={() => setPlaying(true)} className="w-full h-full cursor-pointer relative group" aria-label={`Play ${title}`}>
            <img src={thumb} alt={alt} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all border-2 border-white/60">
                <Play className="w-5 h-5 text-white ml-0.5" fill="white" fillOpacity={0.9} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.12em] text-white">
                {title}
              </p>
            </div>
          </button>
        )}
      </div>
    </ComicPanel>
  );
}

export default function MoreWorkComic() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="comic-neutral px-3 md:px-8 py-1.5 md:py-2">
      <div className="comic-page max-w-5xl mx-auto">
        <PageLabel>Page 4</PageLabel>

        <div className="flex justify-left mb-3 md:mb-4">
          <CaptionBox tilt="right" color="sage">When the engine works, you let it run! <br /> Same pipeline, different playgrounds.</CaptionBox>
        </div>

        {/* 3 equal columns — playable */}
        <motion.div
          ref={ref}
          className="grid grid-cols-3 gap-[4px] md:gap-[6px] h-[200px] md:h-[320px]"
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {VIDEOS.map((v, i) => (
            <PlayableCard key={v.id} {...v} tilt={TILTS[i]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
