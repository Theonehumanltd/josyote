import type { Metadata } from "next";
import { works } from "@/data/works";
import { WorkCard } from "@/components/work-card";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Original mixed media artworks by Josy Ote. Acrylic, oil pastel, ink and modelling paste on canvas.",
};

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
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </div>
  );
}
