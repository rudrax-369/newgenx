import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Preload, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ParticleSystem from './ParticleSystem';

function RedSun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -state.clock.elapsedTime * 0.03;
    }
    
    // Subtle mouse parallax
    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        x: state.pointer.x * 0.5,
        y: state.pointer.y * 0.5,
        duration: 2,
        ease: 'power2.out'
      });
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.7 : 1.2}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Core Sun - The "Boiling" Layer */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#ff0000"
            emissive="#ff4500"
            emissiveIntensity={2}
            distort={0.15}
            speed={1}
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>
        
        {/* Chromosphere - Inner Dense Glow */}
        <mesh ref={coreRef} scale={1.02}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#ff8c00"
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        {/* Corona / Outer Glow Layer */}
        <mesh scale={1.25}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#ff4500"
            transparent
            opacity={0.1}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Solar Flares - High-efficiency particle flares */}
        <Sparkles 
          count={isMobile ? 30 : 60} 
          scale={2.5} 
          size={isMobile ? 2 : 4} 
          speed={0.3} 
          color="#ffcc00" 
          opacity={0.6}
        />
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={3} color="#ff4500" />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ff0000" />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#4b0000" />
        
        <RedSun />
        <ParticleSystem count={typeof window !== 'undefined' && window.innerWidth < 768 ? 400 : 1200} />
        
        <Environment preset="night" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
