"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { ModeSwitch } from "@/components/comic/ComicToggle";

const LINKS = [
  { href: "mailto:sanketsinghr@gmail.com", icon: Mail, label: "Email" },
  { href: "https://www.instagram.com/sanket.singh.r", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/sanketsinghr/", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <footer className="relative py-24 md:py-32">
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <motion.div ref={ref} initial={{ opacity: 0, y: 15 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="mb-10">
          <p className="font-hand text-xl md:text-2xl text-white/45 leading-relaxed">
            Still scrolling? You&rsquo;re either a recruiter or my mom.
            <br />Either way — hi.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-16">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
              aria-label={link.label}>
              <link.icon className="w-4 h-4 text-white/35 group-hover:text-white/60 transition-colors" />
            </a>
          ))}
        </div>

        <div className="border-t border-white/[0.05] pt-5 flex flex-col items-center gap-2">
          <ModeSwitch />
          <p className="text-white/35 text-[11px] tracking-[0.08em]">
            &copy; {new Date().getFullYear()} Sanket Singh
          </p>
        </div>
      </div>
    </footer>
  );
}
