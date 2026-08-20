import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/data/works";
import { MediaCarousel } from "@/components/media-carousel";
import { ContactForm } from "@/components/contact-form";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return { title: "Work not found" };

  return {
    title: work.title,
    description: `${work.title} — ${work.medium}. ${work.description}`,
  };
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  const workIndex = works.findIndex((w) => w.slug === slug);
  const prev = workIndex > 0 ? works[workIndex - 1] : null;
  const next = workIndex < works.length - 1 ? works[workIndex + 1] : null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <Link
        href="/works"
        className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-cream"
      >
        &larr; All works
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Media carousel */}
        <div className="border border-border">
          <MediaCarousel
            media={work.media}
            alt={work.title}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-display text-4xl italic sm:text-5xl">
              {work.title}
            </h1>
            <p className="mt-2 text-sm text-cream/50">{work.year}</p>
          </div>

          <p className="text-lg leading-relaxed text-cream/80">
            {work.description}
          </p>

          <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm">
            <dt className="uppercase tracking-[0.15em] text-cream/40">
              Medium
            </dt>
            <dd className="text-cream/80">{work.medium}</dd>

            <dt className="uppercase tracking-[0.15em] text-cream/40">Size</dt>
            <dd className="text-cream/80">{work.dimensions}</dd>
          </dl>

          {/* Price + actions */}
          <div className="border-t border-border pt-8">
            {work.price ? (
              <>
                <p className="font-display text-3xl">
                  {formatPrice(work.price)}
                </p>
                <div className="mt-6">
                  <ContactForm subject={work.title} />
                </div>
              </>
            ) : (
              <p className="text-sm text-cream/50">
                Original sold &mdash; prints available
              </p>
            )}

            {work.printsAvailable && (
              <Link
                href="/prints"
                className="mt-4 inline-block border border-border px-8 py-3 text-xs uppercase tracking-[0.2em] text-cream/60 transition-colors hover:border-cream/40 hover:text-cream"
              >
                Order a print
              </Link>
            )}
          </div>

          {/* Prev / Next */}
          <nav className="mt-auto flex justify-between border-t border-border pt-8 text-sm">
            {prev ? (
              <Link
                href={`/works/${prev.slug}`}
                className="text-cream/50 transition-colors hover:text-cream"
              >
                &larr; {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/works/${next.slug}`}
                className="text-cream/50 transition-colors hover:text-cream"
              >
                {next.title} &rarr;
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
