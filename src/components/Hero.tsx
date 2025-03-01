"use client"; // Required for client-side rendering with Three.js

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 1. Set up the Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      200, // Near clipping plane
      2000 // Far clipping plane
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000); // Black background

    // 2. Create Stars (Particle System)
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3); // x, y, z for each star
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // z
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // White stars
      size: 2,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 3. Position the Camera
    camera.position.z = 200;

    // 4. Mouse Interaction Variables
    let mouseX = 0;
    let mouseY = 0;

    // 5. Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars slightly for a space effect
      stars.rotation.x += 0.005;
      stars.rotation.y += 0.005;

      // Adjust rotation based on mouse movement
      const targetX = mouseY * 0.001; // Invert for natural feel
      const targetY = mouseX * 0.001;
      stars.rotation.x += 0.05 * (targetX - stars.rotation.x);
      stars.rotation.y += 0.05 * (targetY - stars.rotation.y);

      renderer.render(scene, camera);
    };
    animate();

    // 6. Handle Mouse Movement
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 7. Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 8. Cleanup on Unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden w-screen">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Text in Bottom-Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-40 left-20 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Hi, I&apos;m Mike
        </h1>
        <p className="text-lg md:text-xl">
          A passionate self-taught developer exploring the space
        </p>
      </motion.div>
    </section>
  );
}
