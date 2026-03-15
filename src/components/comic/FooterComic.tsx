"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { CaptionBox, PageLabel } from "./ComicPrimitives";
/*import { ModeSwitch } from "./ComicToggle";*/

const LINKS = [
  { href: "mailto:sanketsinghr@gmail.com", icon: Mail, label: "Email" },
  { href: "https://www.instagram.com/sanket.singh.r", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/sanketsinghr/", icon: Linkedin, label: "LinkedIn" },
];

export default function FooterComic() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <footer className="comic-neutral px-3 md:px-8 py-1.5 md:py-2 pb-6">
      <div className="comic-page max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center py-6 md:py-10"
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <CaptionBox className="mb-6">
            Still scrolling? You&rsquo;re either a recruiter or my mom. Either way &mdash; hi.
          </CaptionBox>

          <div className="flex items-center justify-center gap-3 mb-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-center w-10 h-10 border-3 border-[#111] hover:bg-[#111] transition-all duration-300"
                style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.15)" }}
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4 text-[#111] group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          <PageLabel className="inline-block">The End</PageLabel>
        </motion.div>

        {/* <div className="border-t-2 border-[#111]/10 pt-3 flex flex-col items-center gap-2">
          <ModeSwitch />
          <p className="text-[#111]/40 text-[10px] tracking-[0.1em] text-center font-bold">
            &copy; {new Date().getFullYear()} Sanket Singh
          </p>
        </div>*/}
      </div>
    </footer>
  );
}
