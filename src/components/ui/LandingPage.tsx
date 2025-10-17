"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ClockCounter from "./ClockCounter";
import { useMobile } from "@/hooks/useMobile";

interface LandingPageProps {
  onComplete: () => void;
}

export default function LandingPage({ onComplete }: LandingPageProps) {
  const [shouldExit, setShouldExit] = useState(false);

  const isMobile = useMobile();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  const handleAnimationComplete = () => {
    // Délai avant de faire sortir la landing page
    setTimeout(() => {
      setShouldExit(true);
      setTimeout(onComplete, 800); // Temps pour l'animation de sortie
    }, 1000); // Pause de 1s après l'animation
  };

  const getScale = () => {
    if (window.innerWidth < 768) return 0.2; // mobile
    if (window.innerWidth < 1024) return 0.3; // tablet
    return 0.5; // desktop
  };
  const scale = getScale();

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#105754] flex items-center justify-center h-screen w-screen"
      initial={{ y: 0 }}
      animate={{ y: shouldExit ? "-100%" : 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {/* Contenu de la landing page */}
      <div className="flex flex-col items-center justify-center text-white">
        <motion.div
          className="text-orange-500 flex justify-center items-center font-bold h-screen w-screen"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: scale, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white text-[560px] flex items-center justify-center h-[400px]">
            1
          </span>
          <ClockCounter array={["0", "1", "2"]} />
          <span className="text-white text-[560px] flex items-center justify-center h-[400px]">
            H
          </span>

          <ClockCounter array={["0", "1", "2", "3", "4", "5", "6"]} />
          <ClockCounter
            array={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]}
            onAnimationComplete={handleAnimationComplete}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
