"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Create particles
    const particlesCount = 300;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position - create a sphere distribution
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      colors[i] = 0.5 + Math.random() * 0.3; // R
      colors[i + 1] = 0.5 + Math.random() * 0.3; // G
      colors[i + 2] = 0.8 + Math.random() * 0.2; // B
      // Random sizes
      sizes[i / 3] = Math.random() * 0.1 + 0.03;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for better looking particles
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5, 0.5));
          if (distance > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.4, 0.5, distance);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
    });

    // Create point cloud
    const pointCloud = new THREE.Points(particles, particleMaterial);
    scene.add(pointCloud);

    // Create a second, slower moving point cloud for depth
    const backgroundParticles = new THREE.BufferGeometry();
    const bgPositions = new Float32Array(particlesCount * 3);
    const bgColors = new Float32Array(particlesCount * 3);
    const bgSizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position - create a wider sphere distribution
      const radius = 8 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      bgPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      bgPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      bgPositions[i + 2] = radius * Math.cos(phi);


        bgColors[i] = 0.3 + Math.random() * 0.2; // R
        bgColors[i + 1] = 0.3 + Math.random() * 0.2; // G
        bgColors[i + 2] = 0.5 + Math.random() * 0.3; // B
      // Smaller sizes for background
      bgSizes[i / 3] = Math.random() * 0.05 + 0.02;
    }

    backgroundParticles.setAttribute("position", new THREE.BufferAttribute(bgPositions, 3));
    backgroundParticles.setAttribute("color", new THREE.BufferAttribute(bgColors, 3));
    backgroundParticles.setAttribute("size", new THREE.BufferAttribute(bgSizes, 1));

    const bgPointCloud = new THREE.Points(backgroundParticles, particleMaterial);
    scene.add(bgPointCloud);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.001;

      // Rotate the main point cloud
      pointCloud.rotation.x = time * 0.2;
      pointCloud.rotation.y = time * 0.3;

      // Rotate the background point cloud more slowly
      bgPointCloud.rotation.x = time * 0.1;
      bgPointCloud.rotation.y = time * 0.15;

      // Add some wave motion to particles
      const positions = particles.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];

        // Apply sine wave motion
        positions[i] = x + Math.sin(time * 2 + y * 0.5) * 0.02;
        positions[i + 1] = y + Math.sin(time * 2 + x * 0.5) * 0.02;
        positions[i + 2] = z + Math.cos(time * 2 + x * 0.5) * 0.02;
      }
      particles.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      scene.remove(pointCloud);
      scene.remove(bgPointCloud);
      particles.dispose();
      backgroundParticles.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-container" />;
};

export default AnimatedBackground;
