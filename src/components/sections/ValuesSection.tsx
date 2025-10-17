"use client";

import { motion } from "motion/react";
import { ChefHat, Leaf, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ValuesSection as ValuesSectionType } from "@/types/cms";
import { Section } from "@/components/ui/Section";
import { Subtitle } from "@/components/ui/Subtitle";
import { Title } from "@/components/ui/Title";
import Image from "next/image";
import { useDevice } from "@/hooks/useMobile";

const iconMap = {
  ChefHat,
  Leaf,
  Heart,
};

const colorMap = {
  green: "from-green-500 to-green-600",
  emerald: "from-emerald-500 to-emerald-600",
  orange: "from-orange-500 to-orange-600",
};

interface ValuesSectionProps {
  data: ValuesSectionType;
}

const backgroundImage = "/assets/images/restaurant-1.webp";

const rewards = [
  {
    id: 1,
    title: "Label Écotable",
    description: "Label Écotable",
    icon: "🏆",
    color: "green",
  },
  {
    id: 2,
    title: "Éco-responsable",
    description: "Éco-responsable",
    icon: "🌿",
    color: "green",
  },
  {
    id: 3,
    title: "1er du secteur",
    description: "1er du secteur",
    icon: "🥇",
    color: "green",
  },
];
export function ValuesSection({ data }: ValuesSectionProps) {
  const device = useDevice();
  const isDesktop = device === 'desktop';

  return (
    <Section id="values" className="py-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <Subtitle text={data.title} className="!mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-white !mb-8">
            <Title text={data.subtitle} />
          </h2>
        </motion.div>

        <div className="">
          <div className="grid grid-cols-1 gap-8">
            {/* Première ligne avec 1 élément */}
            <motion.div
              className="flex justify-center hidden lg:flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              {data.values.slice(0, 1).map((value, index) => {
                const IconComponent =
                  iconMap[value.icon as keyof typeof iconMap];
                const gradientColor =
                  colorMap[value.color as keyof typeof colorMap];

                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group w-full h-[calc(100vh-100px)] rounded-2xl overflow-hidden p-4"
                  >
                    <Image
                      src={backgroundImage}
                      alt="Background"
                      className="absolute inset-0 object-cover"
                      fill
                    />
                    <div className="absolute bottom-0 lg:bottom-[16px] h-auto bg-white max-w-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4">
                      <motion.div
                        whileInView={{
                          scale: 1.25,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        initial={{
                          scale: 0,
                        }}
                        className={`absolute -top-5 right-5 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradientColor} rounded-full`}
                      >
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-white w-full" />
                        )}
                      </motion.div>
                      <h3 className="text-6xl font-bold text-gray-900 mb-4 w-full">
                        {value.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed w-full">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Deuxième ligne avec 2 éléments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-0">
              {data.values.slice(!isDesktop ? 1 : 0).map((value, index) => {
                const IconComponent =
                  iconMap[value.icon as keyof typeof iconMap];
                const gradientColor =
                  colorMap[value.color as keyof typeof colorMap];

                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
                    viewport={{ once: false }}
                    className="relative group rounded-2xl"
                  >
                    <motion.div
                      whileInView={{
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: (index + 1) * 0.5,
                      }}
                      initial={{
                        scale: 0,
                      }}
                      className={`absolute -top-5 -left-5 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradientColor} rounded-full mb-6`}
                    >
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-white w-full" />
                      )}
                    </motion.div>
                    <Image
                      src={backgroundImage}
                      alt="Background"
                      className="object-cover h-1/2 w-full rounded-t-2xl"
                      width={100}
                      height={100}
                    />
                    <div className="bg-white rounded-b-2xl p-8 h-auto shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 w-full">
                        {value.title}{" "}
                      </h3>

                      <p className="text-gray-600 leading-relaxed w-full line-clamp-3">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div className="flex flex-col items-center">
          <p className="text-xl leading-relaxed mx-auto text-center !mb-8 max-w-4xl">
            Nous sommes fiers d&apos;être le 1er restaurateur d&apos;entreprise
            labelisé 2 écotables, témoignage de notre engagement pour une
            restauration durable et responsable.
          </p>
          <motion.div className="relative flex flex-col items-center md:flex-row gap-4 w-full justify-center">
            {rewards.map((reward, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                key={reward.id}
                className="bg-gradient-to-r from-green-600 to-green-800 rounded-full w-40 h-40 p-4 flex flex-col justify-center items-center gap-2 text-white"
              >
                <div className="text-4xl mb-2">{reward.icon}</div>
                <p className="font-semibold text-center">{reward.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
