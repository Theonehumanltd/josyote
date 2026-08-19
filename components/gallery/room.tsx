"use client";

import { useMemo } from "react";
import * as THREE from "three";

const ROOM_W = 8;
const ROOM_H = 4;
const ROOM_D = 6;

const wallColor = "#1A1714";
const floorColor = "#2A1F14";
const ceilingColor = "#0E0D0B";

export function Room() {
  const floorTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = floorColor;
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = "rgba(0,0,0,0.3)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) {
      const y = i * 64;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
      ctx.fillRect(x, y, Math.random() * 30, 1);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 3);
    return tex;
  }, []);

  return (
    <group>
      {/* Floor */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[ROOM_W, ROOM_D]} />
        <meshStandardMaterial map={floorTexture} roughness={0.8} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation-x={Math.PI / 2} position={[0, ROOM_H, 0]}>
        <planeGeometry args={[ROOM_W, ROOM_D]} />
        <meshStandardMaterial color={ceilingColor} roughness={1} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, ROOM_H / 2, -ROOM_D / 2]}>
        <planeGeometry args={[ROOM_W, ROOM_H]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} />
      </mesh>

      {/* Front wall */}
      <mesh position={[0, ROOM_H / 2, ROOM_D / 2]} rotation-y={Math.PI}>
        <planeGeometry args={[ROOM_W, ROOM_H]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} />
      </mesh>

      {/* Left wall */}
      <mesh position={[-ROOM_W / 2, ROOM_H / 2, 0]} rotation-y={Math.PI / 2}>
        <planeGeometry args={[ROOM_D, ROOM_H]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} />
      </mesh>

      {/* Right wall */}
      <mesh position={[ROOM_W / 2, ROOM_H / 2, 0]} rotation-y={-Math.PI / 2}>
        <planeGeometry args={[ROOM_D, ROOM_H]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} />
      </mesh>
    </group>
  );
}

export { ROOM_W, ROOM_H, ROOM_D };
