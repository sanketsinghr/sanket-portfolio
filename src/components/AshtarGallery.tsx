"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play } from "lucide-react";

const STILLS = [
  { src: "/ashtar/destroyed-demon-closeup.jpg", alt: "The fire demon" },
  { src: "/ashtar/mother-looks-up-crying.jpg", alt: "A mother's despair" },
  { src: "/ashtar/demon-reaches-altar.jpg", alt: "The altar" },
  { src: "/ashtar/crater-2-empty-night.jpg", alt: "The crater" },
];

const EPISODES = [
  { id: "5rzpWykkL3Q", label: "Episode 1", thumb: "/ashtar-hero-thumb.jpg" },
  { id: "Z6pjfBn7WF8", label: "Episode 2", thumb: "/ashtar-ep2-thumb.jpg" },
  { id: "Ik0sv9Q2Qzs", label: "Episode 3", thumb: "/ashtar-ep3-thumb.jpg" },
];

function EpisodeCard({ id, label, thumb }: { id: string; label: string; thumb: string }) {
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
      <p className="mt-1.5 text-white/30 text-[9px] tracking-[0.15em] uppercase text-center">{label}</p>
    </div>
  );
}

export default function AshtarGallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        {/* Personality text */}
        <motion.div
          ref={ref}
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-display text-2xl md:text-3xl text-white/85 leading-snug">
            I taught AI to paint demons.
            <br />
            <span className="text-gradient-amber">It didn&rsquo;t blink.</span>
          </h3>
          <p className="mt-3 text-white/25 text-sm tracking-wide">
            1 season. 5 episodes. One very traumatized laptop!!
          </p>
        </motion.div>

        {/* Curated stills — 4 small portraits, centered */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 md:gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {STILLS.map((img, i) => (
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

        {/* Episode cards — 3 small portraits */}
        <motion.div
          className="flex justify-center gap-3 md:gap-4 mt-10 md:mt-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {EPISODES.map((ep) => (
            <EpisodeCard key={ep.id} {...ep} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
