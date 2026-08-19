"use client";

import { useState, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { works } from "@/data/works";
import { GalleryOverlay } from "./gallery-overlay";

// Room dimensions
const W = 10;
const H = 4;
const D = 8;

const WALL_COLOR = "#E8E4DF";
const FLOOR_COLOR = "#C4BEB6";
const CEILING_COLOR = "#F5F3F0";

function GalleryRoom() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[W, D]} />
        <meshStandardMaterial color={FLOOR_COLOR} roughness={0.9} />
      </mesh>
      {/* Ceiling */}
      <mesh rotation-x={Math.PI / 2} position-y={H}>
        <planeGeometry args={[W, D]} />
        <meshStandardMaterial color={CEILING_COLOR} roughness={1} />
      </mesh>
      {/* Back wall */}
      <mesh position={[0, H / 2, -D / 2]}>
        <planeGeometry args={[W, H]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.85} />
      </mesh>
      {/* Front wall */}
      <mesh position={[0, H / 2, D / 2]} rotation-y={Math.PI}>
        <planeGeometry args={[W, H]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.85} />
      </mesh>
      {/* Left wall */}
      <mesh position={[-W / 2, H / 2, 0]} rotation-y={Math.PI / 2}>
        <planeGeometry args={[D, H]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.85} />
      </mesh>
      {/* Right wall */}
      <mesh position={[W / 2, H / 2, 0]} rotation-y={-Math.PI / 2}>
        <planeGeometry args={[D, H]} />
        <meshStandardMaterial color={WALL_COLOR} roughness={0.85} />
      </mesh>
    </group>
  );
}

function WallPainting({
  imageSrc,
  position,
  rotation,
  onClick,
}: {
  imageSrc: string;
  position: [number, number, number];
  rotation: [number, number, number];
  onClick: () => void;
}) {
  const texture = useTexture(imageSrc);

  // Better texture filtering to reduce pixelation
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = 16;
  texture.colorSpace = THREE.SRGBColorSpace;

  const aspect = texture.image ? texture.image.width / texture.image.height : 0.75;

  // Fit painting within max 1.8 wide × 2.2 tall
  const maxW = 1.8;
  const maxH = 2.2;
  let pw: number, ph: number;
  if (aspect > maxW / maxH) {
    pw = maxW;
    ph = maxW / aspect;
  } else {
    ph = maxH;
    pw = maxH * aspect;
  }

  const frameBorder = 0.08;

  return (
    <group position={position} rotation={rotation}>
      {/* Dark frame */}
      <mesh position={[0, 0, -0.03]}>
        <boxGeometry args={[pw + frameBorder * 2, ph + frameBorder * 2, 0.06]} />
        <meshStandardMaterial color="#1A1510" roughness={0.4} metalness={0.2} />
      </mesh>
      {/* The painting — sits clearly in front of frame */}
      <mesh position={[0, 0, 0.02]} onClick={(e) => { e.stopPropagation(); onClick(); }}>
        <planeGeometry args={[pw, ph]} />
        <meshStandardMaterial map={texture} roughness={0.7} />
      </mesh>
    </group>
  );
}

// Painting positions: 2 per side wall
const paintingData = [
  // Left wall
  { pos: [-W / 2 + 0.06, 1.8, -1.3] as [number, number, number], rot: [0, Math.PI / 2, 0] as [number, number, number] },
  { pos: [-W / 2 + 0.06, 1.8, 1.3] as [number, number, number], rot: [0, Math.PI / 2, 0] as [number, number, number] },
  // Right wall
  { pos: [W / 2 - 0.06, 1.8, -1.3] as [number, number, number], rot: [0, -Math.PI / 2, 0] as [number, number, number] },
  { pos: [W / 2 - 0.06, 1.8, 1.3] as [number, number, number], rot: [0, -Math.PI / 2, 0] as [number, number, number] },
];

export function GalleryScene() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedWork = selectedIndex !== null ? works[selectedIndex] : null;

  const goTo = useCallback((i: number) => setSelectedIndex(i), []);
  const clearSelection = useCallback(() => setSelectedIndex(null), []);
  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? 0 : Math.max(0, prev - 1)));
  }, []);
  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : Math.min(works.length - 1, prev + 1)
    );
  }, []);

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 1.6, 0], fov: 70, near: 0.01, far: 30 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          logarithmicDepthBuffer: true,
        }}
        style={{ background: "#F5F3F0" }}
      >
        {/* Lighting — bright gallery feel */}
        <ambientLight intensity={1.0} color="#ffffff" />
        <pointLight position={[0, 3.5, 0]} intensity={2} distance={12} color="#ffffff" />
        <pointLight position={[-3, 3, -1.3]} intensity={1.5} distance={6} color="#F5E6C8" />
        <pointLight position={[-3, 3, 1.3]} intensity={1.5} distance={6} color="#F5E6C8" />
        <pointLight position={[3, 3, -1.3]} intensity={1.5} distance={6} color="#F5E6C8" />
        <pointLight position={[3, 3, 1.3]} intensity={1.5} distance={6} color="#F5E6C8" />

        <GalleryRoom />

        <Suspense fallback={null}>
          {works.map((work, i) => (
            <WallPainting
              key={work.slug}
              imageSrc={work.image}
              position={paintingData[i].pos}
              rotation={paintingData[i].rot}
              onClick={() => goTo(i)}
            />
          ))}
        </Suspense>

        {/* Orbit controls — drag to look, scroll to zoom/walk */}
        <OrbitControls
          target={[0, 1.6, 0]}
          enableZoom={true}
          enablePan={false}
          minDistance={0.5}
          maxDistance={4.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
          makeDefault
        />
      </Canvas>

      {selectedIndex === null && (
        <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Drag to look around &middot; Scroll to zoom &middot; Click a painting to view
          </p>
        </div>
      )}

      <GalleryOverlay
        work={selectedWork}
        onClose={clearSelection}
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={selectedIndex !== null && selectedIndex > 0}
        hasNext={selectedIndex !== null && selectedIndex < works.length - 1}
      />
    </div>
  );
}
