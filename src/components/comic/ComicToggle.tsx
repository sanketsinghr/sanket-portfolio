"use client";

import { useComicMode } from "@/context/ComicModeContext";

export default function ComicToggle() {
  return null;
}

export function ModeSwitch() {
  const { isComic, toggle } = useComicMode();

  return (
    <button
      onClick={toggle}
      className="cursor-pointer text-[9px] md:text-[10px] tracking-[0.12em] uppercase opacity-40 hover:opacity-70 transition-opacity"
      style={{ color: isComic ? "#111" : "#aaa" }}
      aria-label={isComic ? "Switch to cinema mode" : "Switch to comic mode"}
    >
      {isComic ? "Switch to Cinema Mode" : "Switch to Comic Mode"}
    </button>
  );
}
