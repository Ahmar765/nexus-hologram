import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Sphere, Torus, Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const CYAN = new THREE.Color("#7cf0ff");
const BLUE = new THREE.Color("#3a8bff");
const VIOLET = new THREE.Color("#a78bfa");

function Core() {
  const inner = useRef<THREE.Mesh>(null!);
  const wire = useRef<THREE.Mesh>(null!);
  const wire2 = useRef<THREE.Mesh>(null!);
  const glow = useRef<THREE.Mesh>(null!);
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (inner.current) {
      inner.current.rotation.y = t * 0.35;
      inner.current.rotation.x = t * 0.18;
      const s = 1 + Math.sin(t * 1.6) * 0.04;
      inner.current.scale.setScalar(s);
    }
    if (wire.current) {
      wire.current.rotation.y = -t * 0.25;
      wire.current.rotation.z = t * 0.12;
    }
    if (wire2.current) {
      wire2.current.rotation.y = t * 0.18;
      wire2.current.rotation.x = -t * 0.14;
    }
    if (glow.current) {
      const s = 1 + Math.sin(t * 1.2) * 0.05;
      glow.current.scale.setScalar(s);
    }
    if (ring1.current) ring1.current.rotation.z = t * 0.4;
    if (ring2.current) ring2.current.rotation.z = -t * 0.3;
    if (ring3.current) ring3.current.rotation.z = t * 0.22;
  });

  return (
    <group>
      {/* Soft glow halo (additive) */}
      <Sphere ref={glow} args={[1.6, 32, 32]}>
        <meshBasicMaterial color={CYAN} transparent opacity={0.08} blending={THREE.AdditiveBlending} depthWrite={false} />
      </Sphere>
      <Sphere args={[1.25, 32, 32]}>
        <meshBasicMaterial color={BLUE} transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
      </Sphere>

      {/* Inner glowing nucleus — translucent, not a flat blue blob */}
      <Sphere ref={inner} args={[0.55, 64, 64]}>
        <meshBasicMaterial color={CYAN} transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} />
      </Sphere>

      {/* Wireframe shells */}
      <Icosahedron ref={wire} args={[1.05, 2]}>
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.55} />
      </Icosahedron>
      <Icosahedron ref={wire2} args={[1.35, 1]}>
        <meshBasicMaterial color={VIOLET} wireframe transparent opacity={0.28} />
      </Icosahedron>

      {/* Orbiting rings — thin and luminous */}
      <group rotation={[Math.PI / 2.1, 0.2, 0]}>
        <Torus ref={ring1} args={[1.95, 0.006, 16, 160]}>
          <meshBasicMaterial color={CYAN} transparent opacity={0.85} blending={THREE.AdditiveBlending} />
        </Torus>
      </group>
      <group rotation={[Math.PI / 1.5, 0.6, 0.3]}>
        <Torus ref={ring2} args={[2.25, 0.004, 16, 160]}>
          <meshBasicMaterial color={VIOLET} transparent opacity={0.7} blending={THREE.AdditiveBlending} />
        </Torus>
      </group>
      <group rotation={[0.5, 1.1, 0.2]}>
        <Torus ref={ring3} args={[2.55, 0.003, 16, 200]}>
          <meshBasicMaterial color={CYAN} transparent opacity={0.5} blending={THREE.AdditiveBlending} />
        </Torus>
      </group>
    </group>
  );
}

function Particles({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.7 + Math.pow(Math.random(), 0.6) * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.04;
      ref.current.rotation.x = s.clock.elapsedTime * 0.02;
    }
  });
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial size={0.018} color="#bfeaff" transparent opacity={0.85} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
}

export function HoloOrb3D({ className = "h-[440px] w-full" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#3ec6ff" />
        <pointLight position={[-5, -3, -2]} intensity={1.1} color="#a78bfa" />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.9}>
            <Core />
          </Float>
          <Particles count={1200} />
        </Suspense>
      </Canvas>
    </div>
  );
}