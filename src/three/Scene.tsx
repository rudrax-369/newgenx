import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float, Preload } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import ParticleSystem from './ParticleSystem';

function MorphingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      
      // Gentle floating via scroll awareness could also be added here, 
      // but Float handles the basic hovering
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#b026ff"
          emissiveIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]} // Optimize for performance vs quality
      gl={{ antialias: false, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#b026ff" />
        
        <MorphingOrb />
        <ParticleSystem count={1500} />
        
        <Environment preset="city" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
