"use client";
import { useRef } from "react";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { Title } from "@/components/ui/Title";
import { Check } from "lucide-react";

interface CardData {
  id?: string;
  title: string;
  description: string;
  image?: string;
  color?: string;
  features?: string[];
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  image?: string;
  color?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  features?: string[];
  horizontale?: boolean;
}

const Card = ({
  i,
  title,
  description,
  image,
  color,
  progress,
  range,
  targetScale,
  features,
}: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color || "#f3f4f6",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex relative  h-[600px] lg:h-[500px] w-full md:max-w-[calc(100vw-100px)] rounded-lg p-6 origin-top flex-col lg:flex-row shadow-xl"
      >
        <div className="flex lg:w-[40%] w-full flex-col justify-center items-start pr-6">
          <h3 className="text-3xl xl:text-5xl font-bold !mb-4 break-words">
            {title}
          </h3>
          <p className="text-base leading-relaxed">{description}</p>
          <ul className="space-y-3 py-4">
            {features?.map((feature, index) => (
              <li
                key={index}
                className="text-base leading-relaxed flex items-start gap-2"
              >
                <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:flex-1 h-full rounded-lg overflow-hidden">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            {image && (
              <Image fill src={image} alt={title} className="object-cover" />
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function CardsParallax({ services }: { services: CardData[] }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative">
      {services.map((service, i) => {
        const targetScale = 1 - (services.length - i) * 0.05;
        return (
          <Card
            key={service.id || `service_${i}`}
            i={i}
            title={service.title}
            description={service.description}
            image={service.image}
            color={service.color}
            features={service.features}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            horizontale={false}
          />
        );
      })}
    </div>
  );
}
