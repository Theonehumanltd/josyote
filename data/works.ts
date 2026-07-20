export interface Work {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number | null;
  printsAvailable: boolean;
  description: string;
  image: string;
}

export const works: Work[] = [
  {
    slug: "when-we-fall",
    title: "When We Fall",
    year: 2025,
    medium: "Acrylic, oil pastel & ink on canvas",
    dimensions: "100 × 80 cm",
    price: null,
    printsAvailable: true,
    description:
      "A meditation on surrender — the moment before you let go and trust the fall.",
    image: "/images/when-we-fall.jpg",
  },
  {
    slug: "through-the-noise",
    title: "Through the Noise",
    year: 2026,
    medium: "Acrylic, modelling paste & oil pastel on canvas",
    dimensions: "120 × 90 cm",
    price: 5699.99,
    printsAvailable: false,
    description:
      "Finding stillness inside the chaos. Layers of texture break through the surface.",
    image: "/images/through-the-noise.jpg",
  },
  {
    slug: "stay",
    title: "Stay",
    year: 2026,
    medium: "Acrylic & oil pastel on canvas",
    dimensions: "100 × 80 cm",
    price: 5000,
    printsAvailable: false,
    description:
      "A quiet plea — to be present, to remain, to not look away.",
    image: "/images/stay.jpg",
  },
  {
    slug: "one-body",
    title: "One Body",
    year: 2026,
    medium: "Acrylic, ink & modelling paste on canvas",
    dimensions: "120 × 90 cm",
    price: 4500,
    printsAvailable: false,
    description:
      "We are many, but we move as one. Shared breath, shared weight.",
    image: "/images/one-body.jpg",
  },
];
