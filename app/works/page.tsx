import type { Metadata } from "next";
import Link from "next/link";
import { works } from "@/data/works";
import { ArtworkPlaceholder } from "@/components/artwork-placeholder";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Original mixed media artworks by Josy Ote. Acrylic, oil pastel, ink and modelling paste on canvas.",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <header className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Selected works
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Works</h1>
      </header>

      <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
        {works.map((work) => (
          <Link
            key={work.slug}
            href={`/works/${work.slug}`}
            className="group"
          >
            <div className="overflow-hidden border border-border transition-colors group-hover:border-cream/30">
              <ArtworkPlaceholder title={work.title} />
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-xl italic transition-colors group-hover:text-cream">
                  {work.title}
                </h2>
                <p className="mt-1 text-sm text-cream/50">
                  {work.medium}, {work.year}
                </p>
              </div>

              <p className="shrink-0 text-sm text-cream/70">
                {work.price ? formatPrice(work.price) : "Prints available"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
