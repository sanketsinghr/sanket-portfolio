"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play } from "lucide-react";

const IMAGES = [
  { src: "/tippo/f-luxury-car-1.jpg", alt: "Rolls Royce" },
  { src: "/tippo/f-No-spitting.jpg", alt: "No Spitting" },
  { src: "/tippo/f-no-photography.jpg", alt: "No Photography" },
  { src: "/tippo/tippo-touches-the-tree.jpg", alt: "The tree" },
];

const VIDEOS = [
  { id: "U_RlM3N6yZk", label: "Tippo explores", thumb: "/tippo-1-thumb.jpg" },
  { id: "q9vwFT5Hego", label: "Tippo finds trouble", thumb: "/tippo-2-thumb.jpg" },
  { id: "WDGMa58pKK4", label: "Tippo strikes a pose", thumb: "/tippo-3-thumb.jpg" },
];

function VideoCard({ id, label, thumb }: { id: string; label: string; thumb: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-[72px] md:w-[90px]">
      <div className="relative aspect-[9/16] rounded overflow-hidden bg-black group">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0&loop=1&playlist=${id}&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title={label}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="w-full h-full cursor-pointer relative"
            aria-label={`Play ${label}`}
          >
            <img src={thumb} alt={label} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-all">
                <Play className="w-2.5 h-2.5 text-white ml-px" fill="white" fillOpacity={0.9} />
              </div>
            </div>
          </button>
        )}
      </div>
      <p className="mt-1.5 text-white/30 text-[9px] tracking-[0.12em] uppercase text-center">{label}</p>
    </div>
  );
}

export default function TippoSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        {/* Title + personality text */}
        <motion.div
          ref={ref}
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-[0.12em] text-gradient-pink leading-none mb-6">
            TIPPO
          </h2>
          <h3 className="font-display text-xl md:text-2xl text-white/85 leading-snug">
            Same face. Every frame.{" "}
            <span className="text-gradient-pink">Every time.</span>
          </h3>
          <p className="mt-3 text-white/25 text-sm tracking-wide max-w-md mx-auto">
            Tippo.. The cutest demon ever.. <br />
             is also a spy 😭😭😭
          </p>
        </motion.div>

        {/* Curated images — 4 small portraits, centered */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 md:gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className="w-[72px] sm:w-[100px] md:w-[130px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="aspect-[9/16] rounded overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video cards — 3 small portraits */}
        <motion.div
          className="flex justify-center gap-3 md:gap-4 mt-10 md:mt-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {VIDEOS.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
