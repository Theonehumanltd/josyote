"use client";

import { useState, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { works } from "@/data/works";
import { GalleryOverlay } from "./gallery-overlay";

// Placeholder texture for failed loads — 1x1 neutral pixel
function createFallbackTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#3a3a3a";
  ctx.fillRect(0, 0, 1, 1);
  return new THREE.CanvasTexture(canvas);
}

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
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [failed, setFailed] = useState(false);

  useState(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      imageSrc,
      (tex) => {
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = true;
        tex.anisotropy = 16;
        tex.colorSpace = THREE.SRGBColorSpace;
        setTexture(tex);
      },
      undefined,
      (err) => {
        console.warn("Failed to load texture:", imageSrc, err);
        setTexture(createFallbackTexture());
        setFailed(true);
      }
    );
  });

  const displayTexture = texture;
  const img = displayTexture?.image as HTMLImageElement | HTMLCanvasElement | undefined;
  const aspect = img && "width" in img && img.width > 1 ? img.width / img.height : 0.75;

  // Fit painting within max bounds — taller paintings get more height
  const maxW = 2.0;
  const maxH = 2.6;
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
        <meshStandardMaterial
          map={displayTexture}
          color={failed ? "#3a3a3a" : undefined}
          roughness={0.7}
        />
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
  const [contextLost, setContextLost] = useState(false);
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

  const handleCreated = useCallback(({ gl }: { gl: THREE.WebGLRenderer }) => {
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      setContextLost(true);
    });
    canvas.addEventListener("webglcontextrestored", () => {
      setContextLost(false);
    });
  }, []);

  if (contextLost) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-neutral-500">
        <p className="text-sm">The 3D gallery lost its rendering context.</p>
        <button
          onClick={() => window.location.reload()}
          className="rounded border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
        >
          Reload page
        </button>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [2, 1.6, 0], fov: 70, near: 0.01, far: 30 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          logarithmicDepthBuffer: true,
        }}
        onCreated={handleCreated}
        style={{ background: "#FFFFFF" }}
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
