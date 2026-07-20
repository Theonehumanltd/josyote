import type { Metadata } from "next";
import Link from "next/link";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Prints",
  description:
    "Fine-art giclée prints of Josy Ote's mixed media artworks. Available in A3, A2 and A1, framed or unframed, shipped worldwide.",
};

const sizes = [
  { name: "A3", dimensions: "297 × 420 mm", price: "£85" },
  { name: "A2", dimensions: "420 × 594 mm", price: "£145" },
  { name: "A1", dimensions: "594 × 841 mm", price: "£225" },
];

const printWorks = works.filter((w) => w.printsAvailable);

export default function PrintsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <header className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Fine-art reproductions
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Prints</h1>
      </header>

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* How it works */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-2xl">Giclée printing</h2>
            <p className="text-lg leading-relaxed text-cream/80">
              Every print is produced using archival giclée technology on
              museum-grade, acid-free cotton rag paper. The inks are rated for
              100+ years of fade resistance, so the colours stay true for
              generations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl">Framing</h2>
            <p className="text-lg leading-relaxed text-cream/80">
              Each print can be ordered framed or unframed. Frames are solid
              wood with a slim profile in matte black, fitted with
              conservation-grade glazing to protect against UV.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl">Shipping</h2>
            <p className="text-lg leading-relaxed text-cream/80">
              Prints are carefully flat-packed and shipped worldwide. Unframed
              prints are rolled in acid-free tissue inside a rigid tube. Framed
              prints are corner-protected and boxed. Delivery typically takes
              5&ndash;10 working days.
            </p>
          </div>
        </div>

        {/* Sizes + pricing */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Sizes &amp; pricing
            </h2>
            <p className="mt-2 text-sm text-cream/40">
              Unframed. Framing adds £60&ndash;£120 depending on size.
            </p>
          </div>

          <div className="space-y-4">
            {sizes.map((size) => (
              <div
                key={size.name}
                className="flex items-center justify-between border-b border-border pb-4"
              >
                <div>
                  <p className="font-display text-xl">{size.name}</p>
                  <p className="text-sm text-cream/50">{size.dimensions}</p>
                </div>
                <p className="font-display text-lg">{size.price}</p>
              </div>
            ))}
          </div>

          {/* Available works */}
          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Available as prints
            </h2>
            {printWorks.length > 0 ? (
              <ul className="space-y-2">
                {printWorks.map((work) => (
                  <li key={work.slug}>
                    <Link
                      href={`/works/${work.slug}`}
                      className="font-display italic text-cream/70 transition-colors hover:text-cream"
                    >
                      {work.title}
                    </Link>
                    <span className="ml-2 text-sm text-cream/40">
                      {work.year}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-cream/50">
                No prints currently available.
              </p>
            )}
          </div>

          {/* Order CTA */}
          <div className="border-t border-border pt-8">
            <p className="text-sm leading-relaxed text-cream/60">
              To order a print, get in touch with the work title and your
              preferred size. Framing and international shipping can be arranged.
            </p>
            <a
              href="mailto:hello@josyote.com?subject=Print order enquiry"
              className="mt-4 inline-block border border-cream/80 px-8 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-cream hover:text-dark"
            >
              Order a print
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
