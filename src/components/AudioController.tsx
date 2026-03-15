"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudioCrossfade } from "@/hooks/useAudioCrossfade";

const AUDIO_TRACKS = [
  {
    id: "ashtar",
    src: "/audio/ashtar-ambient.mp3",
    sectionStart: 0,
    sectionEnd: 0.45,
  },
  {
    id: "tippo",
    src: "/audio/tippo-ambient.mp3",
    sectionStart: 0.45,
    sectionEnd: 1.0,
  },
];

export default function AudioController() {
  const { isPlaying, toggle, handleScroll } =
    useAudioCrossfade(AUDIO_TRACKS);

  const onScroll = useCallback(() => {
    handleScroll(window.scrollY, window.innerHeight);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-5 z-[998] w-10 h-10 rounded-full bg-white/[0.1] backdrop-blur-md border border-white/[0.12] flex items-center justify-center cursor-pointer hover:bg-white/[0.16] hover:border-white/[0.2] transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
      title={isPlaying ? "Mute" : "Play ambient audio"}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="on"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
          </motion.div>
        ) : (
          <motion.div
            key="off"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <VolumeX className="w-3.5 h-3.5 text-white/60" />
          </motion.div>
        )}
      </AnimatePresence>

      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border border-amber-400/20"
          animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </motion.button>
  );
}
