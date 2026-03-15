"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { ComicPanel, CaptionBox, SpeechBubble, PageLabel } from "./ComicPrimitives";

const VIDEOS = [
  { id: "U_RlM3N6yZk", label: "Tippo explores", thumb: "/tippo-1-thumb.jpg" },
  { id: "q9vwFT5Hego", label: "Tippo finds trouble", thumb: "/tippo-2-thumb.jpg" },
  { id: "WDGMa58pKK4", label: "Tippo vs Stones", thumb: "/tippo-3-thumb.jpg" },
];

function VideoPanel({ id, label, thumb, className = "" }: { id: string; label: string; thumb: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <ComicPanel className={className}>
      <div className="relative h-full bg-black overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0&loop=1&playlist=${id}&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title={label} allow="autoplay; encrypted-media" allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button onClick={() => setPlaying(true)} className="w-full h-full cursor-pointer relative group" aria-label={`Play ${label}`}>
            <img src={thumb} alt={label} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all border-2 border-white/50">
                <Play className="w-4 h-4 text-white ml-0.5" fill="white" fillOpacity={0.9} />
              </div>
            </div>
            <div className="absolute bottom-2 left-0 right-0">
              <p className="text-[8px] md:text-[9px] tracking-[0.12em] uppercase text-center font-bold text-white/80">{label}</p>
            </div>
          </button>
        )}
      </div>
    </ComicPanel>
  );
}

export default function TippoSectionComic() {
  return (
    <section className="comic-tippo px-3 md:px-8 py-1.5 md:py-2">
      <div className="comic-page max-w-5xl mx-auto">
        <PageLabel>Page 3</PageLabel>

        {/* Tippo face (large) + side-pointing speech bubble */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-4 md:mb-5">
          <motion.div
            className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-[#111] flex-shrink-0"
            style={{ boxShadow: "5px 5px 0px rgba(0,0,0,0.25)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/tippo/tippo-face.png" alt="Tippo" className="w-full h-full object-cover object-[center_22%]" />
          </motion.div>

          <SpeechBubble tail="left-side" className="max-w-[220px] md:max-w-[280px]">
            <p className="font-display text-sm md:text-lg leading-snug">
              Tippo.. The cutest demon ever.. is also a spy 😭😭😭
            </p>
          </SpeechBubble>
        </div>

        {/* Stills — grid with fixed height, no cropping gaps */}
        <div className="grid grid-cols-[35%_30%_1fr] gap-[4px] md:gap-[6px] h-[220px] md:h-[380px]">
          <ComicPanel className="h-full comic-tilt-2">
            <img src="/tippo/f-luxury-car-1.jpg" alt="Rolls Royce" loading="lazy" className="w-full h-full object-cover" />
          </ComicPanel>
          <ComicPanel className="h-full comic-tilt-4">
            <img src="/tippo/f-No-spitting.jpg" alt="No Spitting" loading="lazy" className="w-full h-full object-cover" />
          </ComicPanel>
          <ComicPanel className="h-full comic-tilt-1">
            <img src="/tippo/f-no-photography.jpg" alt="No Photography" loading="lazy" className="w-full h-full object-cover" />
          </ComicPanel>
        </div>

        <div className="flex justify-center my-3 md:my-4">
          <CaptionBox tilt="left" color="pink">Same face. Every frame. Still not caught??</CaptionBox>
        </div>

        {/* Videos — equal height row */}
        <div className="grid grid-cols-3 gap-[4px] md:gap-[6px] h-[300px] md:h-[480px]">
          <VideoPanel {...VIDEOS[0]} className="h-full comic-tilt-3" />
          <VideoPanel {...VIDEOS[1]} className="h-full comic-tilt-6" />
          <VideoPanel {...VIDEOS[2]} className="h-full comic-tilt-5" />
        </div>
      </div>
    </section>
  );
}
