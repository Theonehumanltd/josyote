"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import type { MediaItem } from "@/data/works";

interface MediaCarouselProps {
  media: MediaItem[];
  alt: string;
  sizes?: string;
  priority?: boolean;
}

export function MediaCarousel({
  media,
  alt,
  sizes,
  priority,
}: MediaCarouselProps) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(media.length - 1, index)));
  }, [media.length]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goTo(current + (diff > 0 ? 1 : -1));
      }
    },
    [current, goTo]
  );

  const item = media[current];

  return (
    <div
      className="relative select-none"
      onContextMenu={(e) => e.preventDefault()}
      style={{ WebkitUserSelect: "none", userSelect: "none" }}
    >
      {/* Media display */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-dark-warm"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {item.type === "image" ? (
          <>
            <Image
              src={item.src}
              alt={alt}
              fill
              className="pointer-events-none object-contain"
              sizes={sizes}
              priority={priority && current === 0}
              draggable={false}
            />
            <div className="absolute inset-0 z-10" />
          </>
        ) : (
          <video
            src={item.src}
            className="absolute inset-0 h-full w-full object-contain"
            controls
            playsInline
            preload="metadata"
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
          />
        )}
      </div>

      {/* Arrow buttons — only show if more than 1 item */}
      {media.length > 1 && (
        <>
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-dark/60 text-cream/70 backdrop-blur transition-colors hover:text-cream disabled:opacity-0"
            aria-label="Previous"
          >
            &lsaquo;
          </button>
          <button
            onClick={() => goTo(current + 1)}
            disabled={current === media.length - 1}
            className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-dark/60 text-cream/70 backdrop-blur transition-colors hover:text-cream disabled:opacity-0"
            aria-label="Next"
          >
            &rsaquo;
          </button>
        </>
      )}

      {/* Dots */}
      {media.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`View ${m.type} ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current
                  ? "bg-cream"
                  : "bg-cream/25 hover:bg-cream/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
