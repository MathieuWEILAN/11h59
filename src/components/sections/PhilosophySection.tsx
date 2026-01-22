"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Title } from "@/components/ui/Title";
import TextGradientOpacity from "@/components/ui/TextGradientOpacity";

export const PhilosophySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Mapper le scrollProgress pour que l'animation se termine à 80% du scroll
  // Cela laisse 20% de marge pour voir le texte complètement animé avant le unpin
  const textScrollProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1], {
    clamp: true,
  });

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-[300vh] w-full"
    >
      <div className="sticky top-0 flex h-screen w-screen overflow-hidden">
        <Container
          size="xl"
          className="flex flex-col justify-center items-center h-full w-full"
        >
          <div className="rounded-2xl lg:p-8 text-black flex flex-col justify-center items-center text-4xl max-w-4xl">
            <h2
              aria-label="Notre philosophie"
              className="text-left !text-6xl lg:text-4xl !mb-8"
            >
              <Title text="Notre philosophie" />
            </h2>
            <TextGradientOpacity
              text="Faire plaisir aux gens, c'est le chemin le plus court
                  pour rendre le monde meilleur. Modestement : meilleur à manger,
                  meilleur à vivre, bien meilleur à partager !"
              scrollProgress={textScrollProgress}
            />
          </div>
        </Container>
      </div>
    </motion.section>
  );
};
