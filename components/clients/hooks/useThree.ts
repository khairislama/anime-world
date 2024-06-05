"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const useThree = (
  init: (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) => void
) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    const currentRef = canvasRef.current;

    if (currentRef) {
      currentRef.appendChild(renderer.domElement);
      renderer.setSize(window.innerWidth, window.innerHeight);
      init(scene, camera, renderer);
      animate();
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
    };
  }, [init]);

  return canvasRef;
};

export default useThree;
