"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

/* ── Comic Panel ─────────────────────────────────────────────── */

interface ComicPanelProps {
  children: ReactNode;
  variant?: "normal" | "tall" | "wide";
  className?: string;
  offsetY?: number;
}

export function ComicPanel({ children, variant = "normal", className = "", offsetY = 0 }: ComicPanelProps) {
  const variantClass =
    variant === "tall" ? "comic-panel-tall" :
    variant === "wide" ? "comic-panel-wide" : "";

  return (
    <motion.div
      className={`comic-panel ${variantClass} ${className}`}
      style={offsetY ? { marginTop: offsetY } : undefined}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

/* ── Caption Box ─────────────────────────────────────────────── */

interface CaptionBoxProps {
  children: ReactNode;
  className?: string;
  tilt?: "left" | "right" | "none";
  color?: "amber" | "warm" | "gold" | "pink" | "sage";
}

export function CaptionBox({ children, className = "", tilt = "none", color }: CaptionBoxProps) {
  const tiltClass = tilt === "left" ? "comic-caption-tilt-left" : tilt === "right" ? "comic-caption-tilt-right" : "";
  const colorClass = color ? `comic-caption-${color}` : "";

  return (
    <motion.div
      className={`comic-caption ${tiltClass} ${colorClass} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

/* ── Speech Bubble ───────────────────────────────────────────── */

interface SpeechBubbleProps {
  children: ReactNode;
  className?: string;
  tail?: "bottom-left" | "bottom-center" | "left-side";
}

export function SpeechBubble({ children, className = "", tail = "bottom-left" }: SpeechBubbleProps) {
  const tailClass =
    tail === "bottom-center" ? "comic-bubble-tail-center" :
    tail === "left-side" ? "comic-bubble-tail-left-side" :
    "comic-bubble-tail-left";

  return (
    <motion.div
      className={`comic-bubble ${tailClass} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Page Label ──────────────────────────────────────────────── */

export function PageLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`comic-page-label ${className}`}>
      {children}
    </div>
  );
}
