"use client";

import { useMemo } from "react";
import * as THREE from "three";
import type { Work } from "@/data/works";

const FRAME_DEPTH = 0.04;
const FRAME_BORDER = 0.06;

interface PaintingProps {
  work: Work;
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  onClick: () => void;
}

export function Painting({
  work,
  position,
  rotation = [0, 0, 0],
  width = 1.2,
  height = 1.6,
  onClick,
}: PaintingProps) {
  // Generate a unique placeholder canvas for each work
  const canvasTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 800;
    const ctx = canvas.getContext("2d")!;

    // Abstract expressionist placeholder
    const hue = work.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
    ctx.fillStyle = `hsl(${hue}, 15%, 18%)`;
    ctx.fillRect(0, 0, 600, 800);

    // Texture strokes
    for (let i = 0; i < 40; i++) {
      ctx.save();
      ctx.globalAlpha = 0.08 + Math.random() * 0.12;
      ctx.fillStyle = `hsl(${hue + (Math.random() - 0.5) * 60}, ${20 + Math.random() * 30}%, ${25 + Math.random() * 25}%)`;
      ctx.translate(Math.random() * 600, Math.random() * 800);
      ctx.rotate(Math.random() * Math.PI);
      ctx.fillRect(0, 0, 40 + Math.random() * 200, 10 + Math.random() * 80);
      ctx.restore();
    }

    // Title
    ctx.fillStyle = "rgba(242, 235, 221, 0.08)";
    ctx.font = "italic 28px serif";
    ctx.textAlign = "center";
    ctx.fillText(work.title, 300, 420);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }, [work.slug, work.title]);

  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh position={[0, 0, -FRAME_DEPTH / 2]}>
        <boxGeometry
          args={[
            width + FRAME_BORDER * 2,
            height + FRAME_BORDER * 2,
            FRAME_DEPTH,
          ]}
        />
        <meshStandardMaterial color="#1A1510" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Canvas surface */}
      <mesh
        position={[0, 0, 0.001]}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={canvasTexture} roughness={0.6} />
      </mesh>

      {/* Warm glow plane behind painting */}
      <mesh position={[0, 0, -0.15]}>
        <planeGeometry args={[width + 0.6, height + 0.6]} />
        <meshBasicMaterial
          color="#F2EBDD"
          transparent
          opacity={0.03}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
