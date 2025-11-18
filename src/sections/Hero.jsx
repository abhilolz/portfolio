import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import HeroText from "../components/HeroText.jsx";
import ParallaxBackground from "../components/ParallaxBackground.jsx";
import { Astronaut } from "../components/Astronaut.jsx";
import Loader from "../components/Loader.jsx";
import { Environment } from "@react-three/drei";

function CanvasLoader() {
  return (
    <Html center>
      <Loader />
    </Html>
  );
}

// Fly forward in Z then stop — NO idle animation
function FlyingAstronaut(props) {
  const group = useRef();
  const animationDone = useRef(false);

  // Start far away safely EVEN on refresh
  useEffect(() => {
    if (group.current) {
      group.current.position.set(props.position[0], props.position[1], -12);
      group.current.rotation.set(0, Math.PI, 0);
    }
  }, [props.position]);

  useFrame(() => {
    if (!group.current || animationDone.current) return;

    const currentZ = group.current.position.z;
    const targetZ = 0;
    const lerpSpeed = 0.035;

    group.current.position.z = currentZ + (targetZ - currentZ) * lerpSpeed;

    // Stop animation once reached
    if (Math.abs(group.current.position.z - targetZ) < 0.001) {
      animationDone.current = true;
      group.current.position.z = targetZ;
    }
  });

  return (
    <group ref={group}>
      <Astronaut {...props} />
    </group>
  );
}

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <ParallaxBackground />

      {/* 3D Scene */}
      <div className="hidden lg:block absolute right-0 top-0 w-[60%] xl:w-[65%] 2xl:w-[70%] h-full z-10">
        <Canvas camera={{ position: [0, 0, 9], fov: 38 }}>
          <Environment preset="city" environmentIntensity={0.9} />

          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={1.45} />
            <directionalLight position={[10, 10, 5]} intensity={2} />

            <FlyingAstronaut scale={0.036} position={[0.7, -0.35, 0]} />

            {/* Controls MUST be inside Suspense */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.55}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Text */}
      <div className="relative z-20 pointer-events-none">
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;
