"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ComicModeProvider, useComicMode } from "@/context/ComicModeContext";

import AshtarHero from "@/components/AshtarHero";
import AshtarGallery from "@/components/AshtarGallery";
import TippoSection from "@/components/TippoSection";
import AtelierBridge from "@/components/AtelierBridge";
import MoreWork from "@/components/MoreWork";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

import ComicToggle from "@/components/comic/ComicToggle";
import AshtarHeroComic from "@/components/comic/AshtarHeroComic";
import AshtarGalleryComic from "@/components/comic/AshtarGalleryComic";
import TippoSectionComic from "@/components/comic/TippoSectionComic";
import AtelierBridgeComic from "@/components/comic/AtelierBridgeComic";
import MoreWorkComic from "@/components/comic/MoreWorkComic";
import FooterComic from "@/components/comic/FooterComic";

const AudioController = dynamic(() => import("@/components/AudioController"), {
  ssr: false,
});

function PageContent() {
  const { isComic } = useComicMode();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={isComic ? "comic" : "cinema"}
        className={`relative ${isComic ? "comic-wrapper" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ComicToggle />
        <ScrollProgress />
        <AudioController />
        {isComic && <div className="comic-halftone" aria-hidden="true" />}

        {isComic ? <AshtarHeroComic /> : <AshtarHero />}
        {isComic ? <AshtarGalleryComic /> : <AshtarGallery />}
        {isComic ? <TippoSectionComic /> : <TippoSection />}
        {isComic ? <AtelierBridgeComic /> : <AtelierBridge />}
        {isComic ? <MoreWorkComic /> : <MoreWork />}
        {isComic ? <FooterComic /> : <Footer />}
      </motion.main>
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <ComicModeProvider>
      <PageContent />
    </ComicModeProvider>
  );
}
