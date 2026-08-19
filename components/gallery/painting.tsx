"use client";

import { useState, useEffect, useMemo, useRef } from "react";
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
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const [dims, setDims] = useState({ w: width, h: height });

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      work.image,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        if (materialRef.current) {
          materialRef.current.map = tex;
          materialRef.current.needsUpdate = true;
        }
        // Adjust frame dimensions to match image aspect ratio
        if (tex.image) {
          const aspect = tex.image.width / tex.image.height;
          if (aspect > width / height) {
            setDims({ w: width, h: width / aspect });
          } else {
            setDims({ w: height * aspect, h: height });
          }
        }
      },
      undefined,
      (err) => {
        console.warn("Failed to load texture for", work.slug, err);
      }
    );
  }, [work.image, work.slug, width, height]);

  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh position={[0, 0, -FRAME_DEPTH / 2]}>
        <boxGeometry
          args={[
            dims.w + FRAME_BORDER * 2,
            dims.h + FRAME_BORDER * 2,
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
        <planeGeometry args={[dims.w, dims.h]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#1A1510"
          roughness={0.6}
        />
      </mesh>

      {/* Warm glow plane behind painting */}
      <mesh position={[0, 0, -0.15]}>
        <planeGeometry args={[dims.w + 0.6, dims.h + 0.6]} />
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
