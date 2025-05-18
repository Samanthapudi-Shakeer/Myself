import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    rendererRef.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Space-like star colors: mostly white, with some blue, purple, yellow
      const colorChoice = Math.random();
      let r = 1, g = 1, b = 1; // Default white

      if (colorChoice < 0.6) {
        // Cool stars - bluish
        r = 0.6 + Math.random() * 0.4;
        g = 0.6 + Math.random() * 0.8;
        b = 1;
      } else if (colorChoice < 0.8) {
        // Warm stars - yellowish
        r = 1;
        g = 0.8 + Math.random() * 0.2;
        b = 0.5 + Math.random() * 0.2;
      } else {
        // Purple cosmic dust
        r = 0.7 + Math.random() * 0.3;
        g = 0.3 + Math.random() * 0.2;
        b = 0.9 + Math.random() * 0.1;
      }

      colors[i * 3 + 0] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 3;

    // Animation
    const animate = () => {
      if (!rendererRef.current) return;

      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      rendererRef.current.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // GSAP animation
    gsap.to(particles.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />;
}

