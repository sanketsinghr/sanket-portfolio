"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface AudioTrack {
  id: string;
  src: string;
  sectionStart: number;
  sectionEnd: number;
}

export function useAudioCrossfade(tracks: AudioTrack[]) {
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const fadeInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    tracks.forEach((track) => {
      if (!audioRefs.current.has(track.id)) {
        const audio = new Audio(track.src);
        audio.loop = true;
        audio.volume = 0;
        audio.preload = "auto";
        audioRefs.current.set(track.id, audio);
      }
    });

    return () => {
      audioRefs.current.forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
      audioRefs.current.clear();
    };
  }, [tracks]);

  const crossfadeTo = useCallback(
    (targetId: string) => {
      if (fadeInterval.current) clearInterval(fadeInterval.current);

      const FADE_DURATION = 2000;
      const STEP = 50;
      const steps = FADE_DURATION / STEP;
      let step = 0;

      fadeInterval.current = setInterval(() => {
        step++;
        const progress = step / steps;

        audioRefs.current.forEach((audio, id) => {
          if (id === targetId) {
            audio.volume = Math.min(progress * 0.4, 0.4);
          } else {
            audio.volume = Math.max((1 - progress) * 0.4, 0);
          }
        });

        if (step >= steps) {
          if (fadeInterval.current) clearInterval(fadeInterval.current);
          audioRefs.current.forEach((audio, id) => {
            if (id !== targetId) {
              audio.pause();
              audio.volume = 0;
            }
          });
        }
      }, STEP);

      setActiveTrack(targetId);
    },
    []
  );

  const toggle = useCallback(() => {
    if (isPlaying) {
      audioRefs.current.forEach((audio) => {
        audio.pause();
        audio.volume = 0;
      });
      setIsPlaying(false);
    } else {
      const firstTrack = tracks[0];
      if (firstTrack) {
        const audio = audioRefs.current.get(firstTrack.id);
        if (audio) {
          audio.play().catch(() => {});
          audio.volume = 0.4;
          setActiveTrack(firstTrack.id);
        }
      }
      setIsPlaying(true);
    }
  }, [isPlaying, tracks]);

  const handleScroll = useCallback(
    (scrollY: number, windowHeight: number) => {
      if (!isPlaying) return;

      const scrollProgress = scrollY / (document.body.scrollHeight - windowHeight);

      for (const track of tracks) {
        if (scrollProgress >= track.sectionStart && scrollProgress <= track.sectionEnd) {
          if (activeTrack !== track.id) {
            const audio = audioRefs.current.get(track.id);
            if (audio) {
              audio.play().catch(() => {});
            }
            crossfadeTo(track.id);
          }
          break;
        }
      }
    },
    [isPlaying, activeTrack, tracks, crossfadeTo]
  );

  return { isPlaying, toggle, handleScroll, activeTrack };
}
