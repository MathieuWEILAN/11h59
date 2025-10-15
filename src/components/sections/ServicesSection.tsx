"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ServicesSection as ServicesSectionType } from "@/types/cms";
import { Section } from "@/components/ui/Section";
import CardsParallax from "@/components/ui/CardsParallax";
import { Title } from "@/components/ui/Title";
import { Subtitle } from "../ui/Subtitle";
interface ServicesSectionProps {
  data: ServicesSectionType;
}

export function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <Section id="services" className="pt-20 bg-white">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=""
        >
          <Subtitle text={data.title} className="!mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <Title text={data.subtitle} />
          </h2>
        </motion.div>
        <CardsParallax services={data.services} />
      </Container>
    </Section>
  );
}
