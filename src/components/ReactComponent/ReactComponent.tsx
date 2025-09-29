// FiberScene.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useControls } from "leva";

const vertexShader = `
  precision mediump float;
  attribute float aSize;
  uniform float uSizeMultiplier;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uSizeMultiplier * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uGlow;
  
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    float alpha = smoothstep(0.5, 0.0, dist);
    
    // Add glow effect
    float glow = pow(1.0 - dist * 2.0, uGlow);
    
    gl_FragColor = vec4(uColor * (1.0 + glow * 0.5), alpha * uOpacity);
  }
`;

const Particles = ({
  count = 1500,
  color,
  opacity,
  sizeMultiplier,
  glow,
  rotationSpeed,
}: {
  count: number;
  color: string;
  opacity: number;
  sizeMultiplier: number;
  glow: number;
  rotationSpeed: number;
}) => {
  const pointsRef =
    useRef<THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>>(null);

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      sizes[i] = Math.random() * 12 + 6;
    }

    return { positions, sizes };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity },
      uSizeMultiplier: { value: sizeMultiplier },
      uGlow: { value: glow },
    }),
    [],
  );

  // Update uniforms when props change
  useEffect(() => {
    if (pointsRef.current?.material) {
      const mat = pointsRef.current.material;
      mat.uniforms.uColor.value.set(color);
      mat.uniforms.uOpacity.value = opacity;
      mat.uniforms.uSizeMultiplier.value = sizeMultiplier;
      mat.uniforms.uGlow.value = glow;
    }
  }, [color, opacity, sizeMultiplier, glow]);

  // Rotation animation
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * rotationSpeed;
      pointsRef.current.rotation.x += delta * rotationSpeed * 0.5;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function FiberScene() {
  const controls = useControls("Shader Controls", {
    color: { value: "#0c1a15", label: "Color" },
    opacity: { value: 0.55, min: 0.1, max: 1, step: 0.05, label: "Opacity" },
    sizeMultiplier: {
      value: 2.2,
      min: 0.2,
      max: 3,
      step: 0.1,
      label: "Particle Size",
    },
    glow: { value: 2.8, min: 0.5, max: 5, step: 0.1, label: "Glow Intensity" },
    rotationSpeed: {
      value: 0.1,
      min: 0,
      max: 0.5,
      step: 0.01,
      label: "Rotation Speed",
    },
    particleCount: {
      value: 3000,
      min: 500,
      max: 3000,
      step: 100,
      label: "Particle Count",
    },
  });

  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Particles
        count={controls.particleCount}
        color={controls.color}
        opacity={controls.opacity}
        sizeMultiplier={controls.sizeMultiplier}
        glow={controls.glow}
        rotationSpeed={controls.rotationSpeed}
      />
      <OrbitControls />
    </Canvas>
  );
}
