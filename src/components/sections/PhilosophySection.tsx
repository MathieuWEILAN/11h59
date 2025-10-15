"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Title } from "@/components/ui/Title";
import TextGradientOpacity from "@/components/ui/TextGradientOpacity";

export const PhilosophySection = () => {
  return (
    <Section id="philosophy" className="bg-white py-20 min-h-2/3">
      <Container size="xl">
        <div className="rounded-2xl lg:p-8 text-black flex flex-col justify-center items-center text-4xl">
          <h2
            aria-label="Notre philosophie"
            className="text-left !text-6xl lg:text-4xl"
          >
            <Title text="Notre philosophie" />
          </h2>
          <TextGradientOpacity
            text="Faire plaisir aux gens, c'est le chemin le plus court
              pour rendre le monde meilleur. Modestement : meilleur à manger,
              meilleur à vivre, bien meilleur à partager !"
          />
        </div>
      </Container>
    </Section>
  );
};
