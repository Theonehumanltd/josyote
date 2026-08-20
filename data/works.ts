export interface MediaItem {
  type: "image" | "video";
  src: string;
}

export interface Work {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number | null;
  printsAvailable: boolean;
  description: string;
  image: string; // primary image (used for thumbnails, gallery, OG)
  media: MediaItem[]; // all media for the detail carousel
}

export const works: Work[] = [
  {
    slug: "when-we-fall",
    title: "When We Fall",
    year: 2025,
    medium: "Acrylic, oil pastel & ink on canvas",
    dimensions: "80 × 100 cm",
    price: 4000,
    printsAvailable: true,
    description:
      "A meditation on surrender — the moment before you let go and trust the fall.",
    image: "/images/when-we-fall.jpg",
    media: [
      { type: "image", src: "/images/when-we-fall.jpg" },
      { type: "video", src: "/videos/when-we-fall.mp4" },
    ],
  },
  {
    slug: "through-the-noise",
    title: "Through the Noise",
    year: 2026,
    medium: "Acrylic, modelling paste & oil pastel on canvas",
    dimensions: "80 × 120 cm",
    price: 5300,
    printsAvailable: false,
    description:
      "A quiet plea — to be present, to remain, to not look away.",
    image: "/images/through-the-noise.jpg",
    media: [
      { type: "image", src: "/images/through-the-noise.jpg" },
      { type: "video", src: "/videos/through-the-noise.mp4" },
    ],
  },
  {
    slug: "stay",
    title: "Stay",
    year: 2026,
    medium: "Acrylic & oil pastel on canvas",
    dimensions: "80 × 120 cm",
    price: 5600,
    printsAvailable: false,
    description:
      "Finding stillness inside the chaos. Layers of texture break through the surface.",
    image: "/images/stay.jpg",
    media: [
      { type: "image", src: "/images/stay.jpg" },
      { type: "video", src: "/videos/stay.mp4" },
    ],
  },
  {
    slug: "one-body",
    title: "One Body",
    year: 2026,
    medium: "Acrylic, ink & oil pastel on canvas",
    dimensions: "80 × 100 cm",
    price: 3500,
    printsAvailable: false,
    description:
      "We are many, but we move as one. Shared breath, shared weight.",
    image: "/images/one-body.jpg",
    media: [
      { type: "image", src: "/images/one-body.jpg" },
      { type: "video", src: "/videos/one-body.mp4" },
    ],
  },
];
