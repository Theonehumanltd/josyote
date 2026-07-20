# Josy Ote — Artist Portfolio

A 3D immersive portfolio and gallery for Josy Ote, a mixed media artist working with acrylic, oil pastel, ink, and modelling paste. Exploring faith, inner peace, and the things we share.

## Features

- **3D Gallery** — Walk through an interactive virtual gallery built with React Three Fiber
- **Works Catalog** — Browse the full collection with individual artwork detail pages
- **Prints** — Available prints for purchase
- **Events** — Upcoming and past exhibitions
- **About** — Artist bio and background

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, Server Components
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://docs.pmnd.rs/drei) — 3D rendering
- [Three.js](https://threejs.org) — WebGL engine
- [Tailwind CSS 4](https://tailwindcss.com) — Styling
- [TypeScript](https://www.typescriptlang.org)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  page.tsx              # Landing page
  gallery/              # 3D virtual gallery
  works/                # Works catalog + detail pages
  prints/               # Prints for sale
  events/               # Exhibitions and events
  about/                # Artist bio
components/
  gallery/              # 3D scene components (room, paintings, camera, particles)
  header.tsx            # Site navigation
  footer.tsx            # Site footer
data/                   # Artwork data
```

## Deployment

Built for deployment on [Vercel](https://vercel.com).

## License

All artwork and content copyright Josy Ote. All rights reserved.
