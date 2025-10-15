"use client";

import { motion } from "motion/react";

interface AnimatedNavButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function AnimatedNavButton({ children, onClick, className = "" }: AnimatedNavButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`text-6xl w-full text-left px-4 py-3 hover:italic rounded-lg font-medium relative overflow-hidden group ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Default gray text */}
      <motion.span
        className="block text-gray-700 relative z-10"
        variants={{
          initial: { color: '#374151' }, // gray-700
          hover: { color: '#374151' }
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.span>

      {/* Orange fill overlay */}
      <motion.span
        className="absolute inset-0 px-4 py-3 text-orange-500"
        variants={{
          initial: {
            clipPath: 'inset(100% 0 0 0)',
            y: 0
          },
          hover: {
            clipPath: 'inset(0 0 0 0)',
            y: 0
          }
        }}
        transition={{
          duration: 0.7,
          ease: [0.23, 1, 0.320, 1] // Custom easing for smooth animation
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}