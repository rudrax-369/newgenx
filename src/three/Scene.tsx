import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Preload } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import ParticleSystem from './ParticleSystem';

function RedSun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.z = -state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group scale={isMobile ? 0.8 : 1.3}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core Sun */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff4500"
            emissiveIntensity={2}
            roughness={0.5}
            metalness={0.8}
          />
        </mesh>
        
        {/* Corona / Glow Layer */}
        <mesh ref={coronaRef}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            color="#ff4500"
            transparent
            opacity={0.15}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
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
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ff4500" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ff0000" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#8b0000" />
        
        <RedSun />
        <ParticleSystem count={typeof window !== 'undefined' && window.innerWidth < 768 ? 400 : 1200} />
        
        <Environment preset="sunset" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
