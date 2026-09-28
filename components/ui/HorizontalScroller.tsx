"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "@/components/icons";


const HorizontalScroller = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const syncHint = useCallback(() => {
    const scroller = scrollRef.current;
    const hint = hintRef.current;
    if (!scroller || !hint) return;
    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    const canScrollRight = scrollWidth - (scrollLeft + clientWidth) > 4;
    hint.style.opacity = canScrollRight ? "1" : "0";
    hint.style.pointerEvents = canScrollRight ? "auto" : "none";
  }, []);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    syncHint();
    scroller.addEventListener("scroll", syncHint, { passive: true });
    window.addEventListener("resize", syncHint);
    return () => {
      scroller.removeEventListener("scroll", syncHint);
      window.removeEventListener("resize", syncHint);
    };
  }, [syncHint]);

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" });

  return (
    <div className="relative">
      <div
        ref={hintRef}
        className="pointer-events-none absolute right-2 -top-4 z-10 opacity-0 transition-opacity duration-200"
      >
        <Button.Gray
          flat
          small
          iconOnly
          onClick={scrollRight}
          aria-label="Scroll table right"
          className="shadow-md"
        >
          <ChevronRight size={16} />
        </Button.Gray>
      </div>
      <div ref={scrollRef} className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroller;
