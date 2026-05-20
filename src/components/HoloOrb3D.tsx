import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Sphere, Torus, Points, PointMaterial, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const inner = useRef<THREE.Mesh>(null!);
  const wire = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (inner.current) {
      inner.current.rotation.y = t * 0.3;
      inner.current.rotation.x = t * 0.15;
    }
    if (wire.current) {
      wire.current.rotation.y = -t * 0.2;
      wire.current.rotation.z = t * 0.1;
    }
  });
  return (
    <group>
      <Sphere ref={inner} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={"#3ec6ff"}
          emissive={"#1e88ff"}
          emissiveIntensity={1.1}
          distort={0.45}
          speed={2.2}
          roughness={0.15}
          metalness={0.6}
        />
      </Sphere>
      <Icosahedron ref={wire} args={[1.45, 1]}>
        <meshBasicMaterial color={"#7cf0ff"} wireframe transparent opacity={0.35} />
      </Icosahedron>
      <Torus args={[1.9, 0.012, 16, 128]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshBasicMaterial color={"#9ad8ff"} transparent opacity={0.6} />
      </Torus>
      <Torus args={[2.2, 0.008, 16, 128]} rotation={[Math.PI / 1.6, 0.5, 0]}>
        <meshBasicMaterial color={"#a78bfa"} transparent opacity={0.55} />
      </Torus>
      <Torus args={[2.55, 0.006, 16, 128]} rotation={[0.4, 0.9, 0]}>
        <meshBasicMaterial color={"#7cf0ff"} transparent opacity={0.4} />
      </Torus>
    </group>
  );
}

function Particles({ count = 500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 2.8 + Math.random() * 1.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.05;
      ref.current.rotation.x = s.clock.elapsedTime * 0.03;
    }
  });
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial size={0.025} color="#7cf0ff" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function HoloOrb3D({ className = "h-[440px] w-full" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5.5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#00000000"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#3ec6ff" />
        <pointLight position={[-5, -3, -2]} intensity={1.5} color="#a78bfa" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
            <Core />
          </Float>
          <Particles count={600} />
        </Suspense>
      </Canvas>
    </div>
  );
}