"use client";

import Link from "next/link";
import type { Work } from "@/data/works";

interface GalleryOverlayProps {
  work: Work | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}

export function GalleryOverlay({
  work,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: GalleryOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Tour nav buttons — always visible */}
      <div className="pointer-events-auto absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="border border-cream/30 bg-dark/80 px-4 py-2 text-xs uppercase tracking-[0.15em] text-cream/70 backdrop-blur transition-colors hover:bg-dark hover:text-cream disabled:opacity-30 disabled:hover:bg-dark/80 disabled:hover:text-cream/70"
        >
          &larr; Prev
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="border border-cream/30 bg-dark/80 px-4 py-2 text-xs uppercase tracking-[0.15em] text-cream/70 backdrop-blur transition-colors hover:bg-dark hover:text-cream disabled:opacity-30 disabled:hover:bg-dark/80 disabled:hover:text-cream/70"
        >
          Next &rarr;
        </button>
      </div>

      {/* Info card — shown when a painting is focused */}
      {work && (
        <div className="pointer-events-auto absolute bottom-20 right-6 w-80 border border-border bg-dark/90 p-6 backdrop-blur-md">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-cream/40 transition-colors hover:text-cream"
            aria-label="Close"
          >
            &times;
          </button>

          <h2 className="font-display text-2xl italic">{work.title}</h2>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-cream/50">
            {work.medium}
          </p>
          <p className="mt-1 text-xs text-cream/40">{work.dimensions}</p>

          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            {work.description}
          </p>

          <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
            {work.price ? (
              <>
                <span className="font-display text-lg">
                  {formatPrice(work.price)}
                </span>
                <a
                  href={`mailto:hello@josyote.com?subject=Enquiry: ${work.title}`}
                  className="border border-cream/60 px-4 py-1.5 text-xs uppercase tracking-[0.15em] transition-colors hover:bg-cream hover:text-dark"
                >
                  Enquire
                </a>
              </>
            ) : (
              <span className="text-sm text-cream/50">
                Original sold
              </span>
            )}

            {work.printsAvailable && (
              <Link
                href="/prints"
                className="border border-border px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-cream/60 transition-colors hover:border-cream/40 hover:text-cream"
              >
                Print
              </Link>
            )}
          </div>

          <Link
            href={`/works/${work.slug}`}
            className="mt-3 block text-xs text-cream/40 transition-colors hover:text-cream"
          >
            View full details &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
