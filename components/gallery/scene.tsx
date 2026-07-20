"use client";

import { useState, useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { works } from "@/data/works";
import { Room, ROOM_W, ROOM_D } from "./room";
import { Painting } from "./painting";
import { CameraController } from "./camera-controller";
import { DustParticles } from "./particles";
import { GalleryOverlay } from "./gallery-overlay";

// Place paintings around the room walls
// 2 on each long wall (left / right), evenly spaced
const PAINTING_Y = 2.0; // eye-level center
const WALL_OFFSET = 0.06; // distance from wall surface

const paintingPlacements: {
  position: [number, number, number];
  rotation: [number, number, number];
}[] = [
  // Left wall — facing right (+x direction)
  {
    position: [-ROOM_W / 2 + WALL_OFFSET, PAINTING_Y, -ROOM_D / 4],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    position: [-ROOM_W / 2 + WALL_OFFSET, PAINTING_Y, ROOM_D / 4],
    rotation: [0, Math.PI / 2, 0],
  },
  // Right wall — facing left (-x direction)
  {
    position: [ROOM_W / 2 - WALL_OFFSET, PAINTING_Y, -ROOM_D / 4],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [ROOM_W / 2 - WALL_OFFSET, PAINTING_Y, ROOM_D / 4],
    rotation: [0, -Math.PI / 2, 0],
  },
];

// Camera positions for viewing each painting (stand in front, facing the wall)
const viewPositions = paintingPlacements.map(({ position, rotation }) => {
  const standDistance = 2.5;
  const dir = new THREE.Vector3(0, 0, 1).applyEuler(
    new THREE.Euler(...rotation)
  );
  return {
    camera: new THREE.Vector3(
      position[0] + dir.x * standDistance,
      1.6, // eye height
      position[2] + dir.z * standDistance
    ),
    lookAt: new THREE.Vector3(...position),
  };
});

export function GalleryScene() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [cameraTarget, setCameraTarget] = useState<THREE.Vector3 | null>(null);
  const [cameraLookAt, setCameraLookAt] = useState<THREE.Vector3 | null>(null);

  const selectedWork = selectedIndex !== null ? works[selectedIndex] : null;

  const goTo = useCallback((index: number) => {
    setSelectedIndex(index);
    setCameraTarget(viewPositions[index].camera);
    setCameraLookAt(viewPositions[index].lookAt);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIndex(null);
    setCameraTarget(null);
    setCameraLookAt(null);
  }, []);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) {
      goTo(0);
    } else if (selectedIndex > 0) {
      goTo(selectedIndex - 1);
    }
  }, [selectedIndex, goTo]);

  const goNext = useCallback(() => {
    if (selectedIndex === null) {
      goTo(0);
    } else if (selectedIndex < works.length - 1) {
      goTo(selectedIndex + 1);
    }
  }, [selectedIndex, goTo]);

  const initialCamera = useMemo(
    () => ({
      position: [0, 1.6, 3] as [number, number, number],
      fov: 60,
    }),
    []
  );

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: initialCamera.position,
          fov: initialCamera.fov,
          near: 0.1,
          far: 50,
        }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ background: "#0E0D0B" }}
      >
        {/* Ambient base */}
        <ambientLight intensity={0.15} color="#F2EBDD" />

        {/* Warm spot lights above each painting */}
        {paintingPlacements.map(({ position }, i) => (
          <pointLight
            key={i}
            position={[position[0], 3.8, position[2]]}
            intensity={1.2}
            distance={5}
            decay={2}
            color="#F5E6C8"
          />
        ))}

        <Room />

        {works.map((work, i) => (
          <Painting
            key={work.slug}
            work={work}
            position={paintingPlacements[i].position}
            rotation={paintingPlacements[i].rotation}
            onClick={() => goTo(i)}
          />
        ))}

        <DustParticles />

        <CameraController
          target={cameraTarget}
          lookAt={cameraLookAt}
          onArrived={() => {}}
        />
      </Canvas>

      {/* Instruction hint */}
      {selectedIndex === null && (
        <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cream/40">
            Drag to look around &middot; Click a painting to view
          </p>
        </div>
      )}

      <GalleryOverlay
        work={selectedWork}
        onClose={clearSelection}
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={selectedIndex !== null && selectedIndex > 0}
        hasNext={
          selectedIndex !== null && selectedIndex < works.length - 1
        }
      />
    </div>
  );
}
