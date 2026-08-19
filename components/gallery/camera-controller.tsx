"use client";

import { useRef, useCallback, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CameraControllerProps {
  target: THREE.Vector3 | null;
  lookAt: THREE.Vector3 | null;
  onArrived?: () => void;
}

export function CameraController({
  target,
  lookAt,
  onArrived,
}: CameraControllerProps) {
  const { camera, gl } = useThree();
  const isDragging = useRef(false);
  const previousMouse = useRef({ x: 0, y: 0 });
  // Start looking toward left wall (-x direction): theta = PI/2
  const spherical = useRef(new THREE.Spherical(1, Math.PI / 2, Math.PI / 2));
  const animating = useRef(false);
  const arrived = useRef(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  // Reset arrived flag when target changes
  useEffect(() => {
    if (target) {
      animating.current = true;
      arrived.current = false;
    } else {
      animating.current = false;
    }
  }, [target]);

  const onPointerDown = useCallback(
    (e: PointerEvent) => {
      isDragging.current = true;
      previousMouse.current = { x: e.clientX, y: e.clientY };
      gl.domElement.setPointerCapture(e.pointerId);
    },
    [gl]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!isDragging.current || animating.current) return;

      const dx = e.clientX - previousMouse.current.x;
      const dy = e.clientY - previousMouse.current.y;
      previousMouse.current = { x: e.clientX, y: e.clientY };

      spherical.current.theta -= dx * 0.003;
      spherical.current.phi = THREE.MathUtils.clamp(
        spherical.current.phi - dy * 0.003,
        0.4,
        Math.PI - 0.4
      );
    },
    []
  );

  const onPointerUp = useCallback((e: PointerEvent) => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    const el = gl.domElement;
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
    };
  }, [gl, onPointerDown, onPointerMove, onPointerUp]);

  useFrame(() => {
    if (animating.current && target && lookAt) {
      const speed = prefersReducedMotion.current ? 1 : 0.04;

      camera.position.lerp(target, speed);
      const currentLookAt = new THREE.Vector3();
      camera.getWorldDirection(currentLookAt);
      currentLookAt.add(camera.position);
      currentLookAt.lerp(lookAt, speed);
      camera.lookAt(currentLookAt);

      if (camera.position.distanceTo(target) < 0.05 && !arrived.current) {
        arrived.current = true;
        animating.current = false;
        // Update spherical to match new orientation
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        spherical.current.setFromVector3(dir);
        onArrived?.();
      }
    } else if (!animating.current) {
      // Free look from drag
      const dir = new THREE.Vector3().setFromSpherical(spherical.current);
      const lookTarget = camera.position.clone().add(dir);
      camera.lookAt(lookTarget);
    }
  });

  return null;
}
