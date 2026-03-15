"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { ComicPanel, CaptionBox, PageLabel } from "./ComicPrimitives";

const EPISODE_1 = { id: "5rzpWykkL3Q", label: "Watch Episode 1", thumb: "/ashtar-hero-thumb.jpg" };

export default function AshtarGalleryComic() {
  const [theatreOpen, setTheatreOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = theatreOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [theatreOpen]);

  return (
    <>
      <section className="comic-ashtar px-3 md:px-8 pb-1.5 md:pb-2">
        <div className="comic-page max-w-5xl mx-auto">
          <PageLabel>Page 2</PageLabel>

          <div className="flex justify-center mb-3 md:mb-4">
            <CaptionBox tilt="right" color="amber">I didn&rsquo;t plan to make an anime about demons.</CaptionBox>
          </div>

          {/* Row 1: shortened visual height with stable page flow */}
          <div className="h-[320px] md:h-[520px] flex items-start md:items-center justify-center">
            <div className="grid grid-cols-[55%_1fr] gap-[4px] md:gap-[6px] h-full md:h-auto w-full md:max-w-[760px] md:aspect-[19/10]">
              <ComicPanel className="h-full comic-tilt-1">
                <img src="/ashtar/destroyed-demon-closeup.jpg" alt="The fire demon" loading="lazy" className="w-full h-full object-cover object-[center_30%]" />
              </ComicPanel>
              <div className="flex flex-col gap-[4px] md:gap-[6px] h-full">
                <ComicPanel className="flex-1 comic-tilt-2">
                  <img src="/ashtar/demon-reaches-altar.jpg" alt="The altar" loading="lazy" className="w-full h-full object-cover object-[center_35%]" />
                </ComicPanel>
                <ComicPanel className="flex-1 comic-tilt-3">
                  <img src="/ashtar/mother-looks-up-crying.jpg" alt="A mother's despair" loading="lazy" className="w-full h-full object-cover object-[center_30%]" />
                </ComicPanel>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-3 md:my-4">
            <CaptionBox tilt="left" color="warm">But here we are.</CaptionBox>
          </div>

          {/* Row 2: 3 panels */}
          <div className="grid grid-cols-[30%_40%_1fr] gap-[4px] md:gap-[6px] h-[260px] md:h-[440px]">
            <ComicPanel className="h-full comic-tilt-4">
              <img src="/ashtar/demon-running-1.jpg" alt="The chase" loading="lazy" className="w-full h-full object-cover object-[center_25%]" />
            </ComicPanel>
            <ComicPanel className="h-full comic-tilt-6">
              <img src="/ashtar/baby-at-night.jpg" alt="The child at night" loading="lazy" className="w-full h-full object-cover object-[center_55%]" />
            </ComicPanel>
            <ComicPanel className="h-full comic-tilt-2">
              <img src="/ashtar/on-her-knees-with-head-down.jpg" alt="Defeat" loading="lazy" className="w-full h-full object-cover object-[center_40%]" />
            </ComicPanel>
          </div>

          {/* Row 3: 2 wide panels */}
          <div className="grid grid-cols-[60%_1fr] gap-[4px] md:gap-[6px] mt-[4px] md:mt-[6px] h-[180px] md:h-[280px]">
            <ComicPanel className="h-full comic-tilt-3">
              <img src="/ashtar/crater-2-empty-night.jpg" alt="The crater" loading="lazy" className="w-full h-full object-cover object-center" />
            </ComicPanel>
            <ComicPanel className="h-full comic-tilt-1">
              <img src="/ashtar/demon-takes-out-the-binding-metal.jpg" alt="Breaking free" loading="lazy" className="w-full h-full object-cover object-[center_35%]" />
            </ComicPanel>
          </div>

          <div className="flex justify-center my-3 md:my-4">
            <CaptionBox tilt="right" color="gold">Three episodes. All consistent. One very tired laptop.</CaptionBox>
          </div>

          {/* Episode 1 — opens theatre mode */}
          <ComicPanel variant="wide" className="comic-tilt-5">
            <div className="relative aspect-[21/9] bg-black overflow-hidden">
              <button onClick={() => setTheatreOpen(true)} className="w-full h-full cursor-pointer relative group" aria-label={EPISODE_1.label}>
                <img src={EPISODE_1.thumb} alt={EPISODE_1.label} className="w-full h-full object-cover object-[center_30%]" loading="lazy" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all border-2 border-white/60">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" fillOpacity={0.9} />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 md:bottom-4 md:left-6">
                  <p className="text-white font-black text-sm md:text-base uppercase tracking-[0.15em]">{EPISODE_1.label}</p>
                </div>
              </button>
            </div>
          </ComicPanel>
        </div>
      </section>

      {/* Theatre mode overlay */}
      <AnimatePresence>
        {theatreOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
          >
            <motion.button
              onClick={() => setTheatreOpen(false)}
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
                src={`https://www.youtube.com/embed/${EPISODE_1.id}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
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
