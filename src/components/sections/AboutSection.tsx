"use client";

import { motion } from "motion/react";
import { Users, Coffee, Utensils } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AboutSection as AboutSectionType } from "@/types/cms";
import { Title } from "@/components/ui/Title";
import { Subtitle } from "@/components/ui/Subtitle";

const iconMap = {
  Users,
  Coffee,
  Utensils,
};

interface AboutSectionProps {
  data: AboutSectionType;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <Section id="about" className="bg-gray-50">
      <Container size="xl">
        <motion.div className="mb-16 flex flex-col gap-8">
          <Subtitle text={data.subtitle} />
          <h2 aria-label={data.title}>
            <Title text={data.title} />
          </h2>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {data.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden py-8">
          {data.keyPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.6 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
