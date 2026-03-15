"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { ComicPanel, CaptionBox, PageLabel } from "./ComicPrimitives";

const EPISODE_1 = { id: "5rzpWykkL3Q", label: "Watch Episode 1", thumb: "/ashtar-hero-thumb.jpg" };

interface GridPanelProps {
  src: string;
  alt: string;
  colSpan: string;
  height: string;
  imgPos?: string;
  children?: React.ReactNode;
}

function GridPanel({ src, alt, colSpan, height, imgPos = "center", children }: GridPanelProps) {
  return (
    <div className={`${colSpan} ${height} relative overflow-hidden bg-black group border-[3px] md:border-[4px] border-[#111]`}>
      <img 
        src={src} 
        alt={alt} 
        loading="lazy" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        style={{ objectPosition: imgPos }}
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </div>
  );
}

export default function AshtarGalleryComic() {
  const [theatreOpen, setTheatreOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = theatreOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [theatreOpen]);

  return (
    <>
      <section 
        className="px-3 md:px-8 py-12 md:py-20 overflow-hidden"
        style={{
          backgroundColor: '#f8f5eb',
          backgroundImage: 'radial-gradient(#d4cfc0 2px, transparent 2px)',
          backgroundSize: '16px 16px'
        }}
      >
        {/* INCREASED WIDTH: Changed from max-w-4xl to max-w-5xl to match Hero & Tippo */}
        <div className="relative max-w-5xl mx-auto">
          
          <div className="absolute -top-12 -left-2 md:-left-8 z-30 transform -rotate-2">
            <PageLabel>Page 2</PageLabel>
          </div>

          <div className="bg-white p-3 md:p-5 border-[4px] border-[#111] flex flex-col gap-[8px] md:gap-[12px]">
            
            {/* ROW 1: Height scaled up from 420px to 500px */}
            <div className="grid grid-cols-12 gap-[8px] md:gap-[12px]">
              <GridPanel 
                colSpan="col-span-12" 
                height="h-[260px] md:h-[500px]" 
                src="/ashtar/destroyed-demon-closeup.jpg" 
                alt="The fire demon" 
                imgPos="center 45%" 
              />
            </div>

            <div className="relative z-20 h-0 w-full flex justify-end">
              <div className="absolute top-[-25px] md:top-[-35px] right-2 md:right-12">
                <CaptionBox tilt="right" color="amber">I didn&rsquo;t plan to make an anime about demons.</CaptionBox>
              </div>
            </div>

            {/* ROW 2: Height scaled up from 380px to 420px */}
            <div className="grid grid-cols-12 gap-[8px] md:gap-[12px]">
              <GridPanel colSpan="col-span-7" height="h-[220px] md:h-[420px]" src="/ashtar/demon-running-1.jpg" alt="The chase" imgPos="center 20%" />
              <GridPanel colSpan="col-span-5" height="h-[220px] md:h-[420px]" src="/ashtar/mother-looks-up-crying.jpg" alt="Despair" imgPos="center" />
            </div>

            <div className="relative z-20 h-0 w-full flex justify-start">
              <div className="absolute top-[-25px] md:top-[-35px] left-2 md:left-8">
                <CaptionBox tilt="left" color="warm">But here we are!</CaptionBox>
              </div>
            </div>

            {/* ROW 3: Height scaled up from 380px to 420px */}
            <div className="grid grid-cols-12 gap-[8px] md:gap-[12px]">
              <GridPanel colSpan="col-span-5" height="h-[220px] md:h-[420px]" src="/ashtar/baby-at-night.jpg" alt="Baby at night" />
              <GridPanel colSpan="col-span-7" height="h-[220px] md:h-[420px]" src="/ashtar/on-her-knees-with-head-down.jpg" alt="Defeat" />
            </div>

            {/* ROW 4: Height scaled up from 300px to 340px */}
            <div className="grid grid-cols-12 gap-[8px] md:gap-[12px]">
              <GridPanel colSpan="col-span-12" height="h-[200px] md:h-[340px]" src="/ashtar/crater-2-empty-night.jpg" alt="The crater" imgPos="center 70%" />
            </div>

            <div className="relative z-20 h-0 w-full flex justify-left">
              <div className="absolute top-[-25px] md:top-[-30px]">
                <CaptionBox tilt="right" color="gold">1 season. 5 episodes. One very traumatized laptop!!</CaptionBox>
              </div>
            </div>

            {/* ROW 5: Height scaled up from 400px to 460px */}
            <div className="grid grid-cols-12 gap-[8px] md:gap-[12px]">
              <div className="col-span-12 relative h-[250px] md:h-[460px] bg-black overflow-hidden group border-[3px] md:border-[4px] border-[#111]">
                <button onClick={() => setTheatreOpen(true)} className="w-full h-full cursor-pointer relative" aria-label={EPISODE_1.label}>
                  <img src={EPISODE_1.thumb} alt={EPISODE_1.label} className="w-full h-full object-cover object-[center_21%] opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" loading="lazy" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_#111] group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" fill="white" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 bg-black/80 px-4 py-2 border-2 border-[#111] transform -rotate-2">
                    <p className="text-white font-black text-xs md:text-base uppercase tracking-[0.2em]">{EPISODE_1.label}</p>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Theatre mode overlay */}
      <AnimatePresence>
        {theatreOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => setTheatreOpen(false)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all cursor-pointer"
              initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
            <motion.div
              className="h-[85vh] aspect-[9/16] max-w-[90vw] shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${EPISODE_1.id}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
                title="Ashtar — Episode 1"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="w-full h-full rounded-xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}