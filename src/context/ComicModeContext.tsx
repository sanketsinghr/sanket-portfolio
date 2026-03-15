"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface ComicModeContextValue {
  isComic: boolean;
  toggle: () => void;
}

const ComicModeContext = createContext<ComicModeContextValue>({
  isComic: true,
  toggle: () => {},
});

const STORAGE_KEY = "portfolio-comic-mode";

export function ComicModeProvider({ children }: { children: ReactNode }) {
  const [isComic, setIsComic] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "false") setIsComic(false);
    } catch {}
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setIsComic((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {}
      return next;
    });
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <ComicModeContext.Provider value={{ isComic, toggle }}>
      {children}
    </ComicModeContext.Provider>
  );
}

export function useComicMode() {
  return useContext(ComicModeContext);
}
