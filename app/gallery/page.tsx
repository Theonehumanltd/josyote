import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/gallery-client";

export const metadata: Metadata = {
  title: "3D Gallery",
  description:
    "Walk through an immersive 3D exhibition of Josy Ote's mixed media artworks.",
};

export default function GalleryPage() {
  return (
    <div className="fixed inset-0 pt-[73px]">
      <GalleryClient />
    </div>
  );
}
