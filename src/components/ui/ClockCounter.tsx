import react, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ClockCounter({
  array,
  onAnimationComplete
}: {
  array: string[];
  onAnimationComplete?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex justify-center items-center w-auto">
      <div className="relative h-[400px] w-auto overflow-hidden tracking-tightest">
        <motion.div
          ref={containerRef}
          className="flex flex-col leading-[0] tracking-tightest"
          animate={{
            translateY: (array.length - 2) * -400 - 80,
          }}
          transition={{
            duration: 2.5, // Durée fixe de 2 secondes
            ease: "easeOut", // Plus lent à la fin
            delay: 0.05, // Délai initial
          }}
          onAnimationComplete={onAnimationComplete}
        >
          {array.map((number, index) => (
            <motion.div
              key={index}
              className={`text-white text-[480px] flex items-center justify-center h-[400px] leading-none tracking-tighter m-0 p-0`}
            >
              {number}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
