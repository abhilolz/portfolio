import { motion, useScroll, useTransform, useSpring } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const x = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  const mountain3y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  const baseLayerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };

  return (
    <section className="absolute inset-0 -z-20 overflow-hidden">
      {/* 📱 MOBILE / TABLET: static full scene (no parallax) */}
      <div className="relative w-full h-full lg:hidden">
        <div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/sky.jpg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/mountain-3.png)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/planets.png)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/mountain-2.png)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/mountain-1.png)",
          }}
        />
      </div>

      {/* 🖥 DESKTOP: parallax layers */}
      <div className="hidden lg:block relative w-full h-full">
        <motion.div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/sky.jpg)",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/mountain-3.png)",
            y: mountain3y,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/planets.png)",
            x: planetsX,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/mountain-2.png)",
            y: mountain2y,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            ...baseLayerStyle,
            backgroundImage: "url(/assets/mountain-1.png)",
            y: mountain1y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
