"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

interface TextGradientOpacityProps {
  text: string;
  className?: string;
}

interface WordProps {
  word: string;
  scrollProgress: MotionValue<number>;
  totalLetters: number;
  letterStartIndex: number;
}

function Word({
  word,
  scrollProgress,
  totalLetters,
  letterStartIndex,
}: WordProps) {
  const letters = word.split("");

  return (
    <span className="inline-block" style={{ whiteSpace: "nowrap" }}>
      {letters.map((letter, letterIndex) => {
        const globalLetterIndex = letterStartIndex + letterIndex;
        const start = globalLetterIndex / totalLetters;
        const end = (globalLetterIndex + 1) / totalLetters;
        const opacity = useTransform(scrollProgress, [start, end], [0.1, 0.8]);

        return (
          <motion.span
            key={letterIndex}
            className="inline-block font-semibold"
            style={{ opacity }}
          >
            {letter}
          </motion.span>
        );
      })}
    </span>
  );
}

export default function TextGradientOpacity({
  text,
  className = "",
}: TextGradientOpacityProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const words = text.split(" ");
  const totalLetters = text.replace(/ /g, "").length;

  let letterIndex = 0;

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const wordComponent = (
          <Word
            key={wordIndex}
            word={word}
            scrollProgress={scrollYProgress}
            totalLetters={totalLetters}
            letterStartIndex={letterIndex}
          />
        );

        letterIndex += word.length;

        return (
          <span key={wordIndex}>
            {wordComponent}
            {wordIndex < words.length - 1 && " "}
          </span>
        );
      })}
    </div>
  );
}
