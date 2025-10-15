"use client";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Si vous avez vos propres images, importez-les comme ceci:
import Picture1 from "../../assets/images/restaurant-1.webp";
import Picture2 from "../../assets/images/restaurant-2.webp";
import Picture3 from "../../assets/images/restaurant-3.webp";

interface ImageItem {
  src: string | StaticImageData;
  y: MotionValue<number> | number;
  scrollYProgress: MotionValue<number>;
}

export default function ParallaxImages({
  title,
  image,
  scrollYProgress,
  index,
}: {
  scrollYProgress: MotionValue<number>;
  title: string;
  image: string | StaticImageData;
  index: number;
}) {
  // Valeurs fixes comme dans l'exemple de référence
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    index === 0 ? [1, 0.8] : [0.8, 1]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    index === 0 ? [0, -5] : [5, 0]
  );

  return (
    <motion.div
      style={{ scale, rotate }}
      className={
        index === 0
          ? "sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
          : "relative h-screen"
      }
    >
      <Image
        src={image}
        alt={title}
        className="object-cover w-screen h-screen object-cover"
      />
      {/* Section Texte */}
      <div className="relative z-10 flex flex-col items-center gap-4 z-10">
        <div className="mt-8">
          <p className="absolute text-2xl md:text-8xl uppercase text-white font-light tracking-wider font-bold">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
