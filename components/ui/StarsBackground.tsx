"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

const STAR_COUNT = 60;
const SEED = 84219;

function createSeededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
};

export default function StarsBackground({
  className = "",
}: {
  className?: string;
}) {
  const stars = useMemo<Star[]>(() => {
    const rand = createSeededRandom(SEED);

    return Array.from({ length: STAR_COUNT }, (_, index) => {
      const size = 1 + rand() * 1.6;
      const opacity = 0.12 + rand() * 0.22;
      return {
        id: index,
        x: rand() * 100,
        y: rand() * 100,
        size,
        opacity,
        duration: 16 + rand() * 12,
        delay: rand() * 6,
        drift: 6 + rand() * 6,
      };
    });
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-black/20 dark:bg-white/60 will-change-transform"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 6}px rgba(255, 255, 255, 0.15)`,
          }}
          animate={{
            opacity: [star.opacity * 0.7, star.opacity, star.opacity * 0.8],
            y: [0, star.drift, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
