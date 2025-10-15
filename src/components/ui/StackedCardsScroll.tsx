"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export interface CardData {
  icon: string;
  text: string;
}

interface Props {
  cards: CardData[];
}

const CARD_HEIGHT = 400;
const CARD_OFFSET = 50;

const StackedCard = ({
  card,
  index,
  totalCards,
  containerRef,
}: {
  card: CardData;
  index: number;
  totalCards: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const isLast = index === totalCards - 1;
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalCards - 1]
  );

  const exitThreshold = index;
  const nextExitThreshold = index + 1;

  const shouldExit = useTransform(
    cardProgress,
    (value) => !isLast && value >= exitThreshold
  );

  const exitProgress = useTransform(
    cardProgress,
    [exitThreshold, nextExitThreshold],
    [0, 1]
  );

  const smoothExitProgress = useSpring(exitProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.8,
    restDelta: 0.001,
  });

  const direction = index % 2 === 0 ? -1 : 1;

  const x = useTransform(
    smoothExitProgress,
    [0, 0.3, 0.7, 1],
    [0, direction * 50, direction * 200, direction * 400]
  );

  const y = useTransform(smoothExitProgress, [0, 0.4, 1], [0, -80, -200]);

  const rotate = useTransform(
    smoothExitProgress,
    [0, 0.5, 1],
    [0, direction * 8, direction * 25]
  );

  const scale = useTransform(smoothExitProgress, [0, 0.6, 1], [1, 0.9, 0.6]);

  const opacity = useTransform(smoothExitProgress, [0, 0.9, 1], [1, 0.9, 0]);

  const zIndex = totalCards - index;
  const initialY = CARD_OFFSET;

  return (
    <motion.div
      ref={cardRef}
      className="absolute inset-0 flex items-center justify-center"
      style={{
        x,
        y: useTransform(
          smoothExitProgress,
          [0, 1],
          [initialY, initialY + y.get()]
        ),
        rotate,
        scale,
        opacity,
        zIndex,
      }}
    >
      <div
        className="w-full overflow-hidden transition-shadow duration-300"
        style={{
          height: CARD_HEIGHT,
          backgroundColor: "#ffffff",
        }}
      >
        <div className="p-6 sm:p-8 h-full flex flex-col justify-center">
          <p className="text-4xl leading-relaxed mb-4 sm:mb-6">
            {card.icon} {card.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function StackedCardsScroll({ cards }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerHeight = Math.max(cards.length * 20, 300);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#105754]"
      style={{ height: `${containerHeight}vh` }}
    >
      <div className="sticky top-0 h-[80vh] flex items-center justify-center overflow-hidden bg-[#105754]">
        <div
          className="relative w-full px-4 text-center"
          style={{ height: CARD_HEIGHT }}
        >
          {cards.map((card, index) => (
            <StackedCard
              key={`stackedCard-${index}`}
              card={card}
              index={index}
              totalCards={cards.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
