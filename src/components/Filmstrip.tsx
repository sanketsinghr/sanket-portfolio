"use client";

import { useRef, useState, useCallback } from "react";

export default function Filmstrip({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ x: 0, sl: 0 });

  const onDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    drag.current = { x: e.pageX, sl: ref.current.scrollLeft };
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !ref.current) return;
      e.preventDefault();
      ref.current.scrollLeft = drag.current.sl - (e.pageX - drag.current.x) * 1.5;
    },
    [isDragging],
  );

  const onUp = useCallback(() => setIsDragging(false), []);

  return (
    <div
      ref={ref}
      className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
    >
      <div className="flex gap-5 md:gap-8 px-[6vw] md:px-[12vw]">
        {children}
      </div>
    </div>
  );
}
