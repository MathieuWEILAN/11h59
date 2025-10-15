"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";

export default function BackgroundReveal({
  video,
  text,
}: {
  video: string;
  text: string;
}) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const maskY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-100%", "-100%"]
  );
  const clipBottomPct = useTransform(scrollYProgress, [0.5, 1], [0, 100]);
  const clipPath = useTransform(clipBottomPct, (b) => `inset(0% 0% ${b}% 0%)`);

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="relative h-[200vh] w-full border-8 border-red-500"
      >
        <div className="sticky top-0 flex h-screen w-screen overflow-hidden">
          {/* Video */}
          <motion.video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute top-0 left-0 w-full h-full object-cover`}
          />
          {/* Text mask */}
          <motion.svg
            className="absolute left-0 top-0 h-screen w-screen"
            style={{ y: maskY }}
          >
            <defs>
              <mask id="textMask">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="180"
                  fontWeight="bold"
                  fill="black"
                  className="max-w-2xl"
                >
                  {text}
                </text>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="white"
              mask="url(#textMask)"
            />
          </motion.svg>
          <div className="h-screen bg-yellow-300" />
        </div>
      </motion.section>
      <div className="relative bg-yellow-500 z-50 h-screen w-screen">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu&apos;il est prêt ou que
        la mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </div>
    </>
  );
}
