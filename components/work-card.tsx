"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Work } from "@/data/works";

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const swiped = useRef(false);
  const router = useRouter();
  const media = work.media;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(media.length - 1, index)));
    },
    [media.length]
  );

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    swiped.current = false;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goTo(current + (diff > 0 ? 1 : -1));
        swiped.current = true;
      }
    },
    [current, goTo]
  );

  const handleClick = useCallback(() => {
    if (!swiped.current) {
      router.push(`/works/${work.slug}`);
    }
  }, [router, work.slug]);

  const item = media[current];

  return (
    <div className="group cursor-pointer">
      <div
        className="relative select-none"
        onContextMenu={(e) => e.preventDefault()}
        style={{ WebkitUserSelect: "none", userSelect: "none" }}
      >
        <div
          className="relative aspect-[3/4] overflow-hidden border border-border bg-dark-warm transition-colors group-hover:border-cream/30"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={handleClick}
        >
          {item.type === "image" ? (
            <>
              <Image
                src={item.src}
                alt={work.title}
                fill
                className="pointer-events-none object-contain"
                sizes="(max-width: 640px) 100vw, 50vw"
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
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>

        {/* Dots */}
        {media.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                aria-label={`View ${media[i].type} ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === current
                    ? "bg-cream"
                    : "bg-cream/30 hover:bg-cream/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div
        className="mt-4 flex items-start justify-between gap-4"
        onClick={handleClick}
      >
        <div>
          <h2 className="font-display text-xl italic transition-colors group-hover:text-cream">
            {work.title}
          </h2>
          <p className="mt-1 text-sm text-cream/50">
            {work.medium}, {work.year}
          </p>
        </div>

        <p className="shrink-0 text-sm text-cream/70">
          {work.price
            ? new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: work.price % 1 === 0 ? 0 : 2,
              }).format(work.price)
            : "Prints available"}
        </p>
      </div>
    </div>
  );
}
