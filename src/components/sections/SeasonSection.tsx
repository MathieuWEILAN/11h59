"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Title } from "@/components/ui/Title";
import { Subtitle } from "@/components/ui/Subtitle";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface SeasonSectionProps {
  data: SeasonSectionType;
}

export interface SeasonSectionType {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
}

export const SeasonSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  const images = [
    "/assets/images/plats/1.png",
    "/assets/images/plats/2.png",
    "/assets/images/plats/4.png",
    "/assets/images/plats/4.png",
  ];

  return (
    <Section
      id="season"
      className="py-20 bg-gray-50 relative"
      ref={containerRef}
    >
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0"
        style={{ rotate: rotate1 }}
      >
        <Image
          src={images[0]}
          alt="Season"
          className="object-cover"
          width={200}
          height={200}
        />
      </motion.div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-0"
        style={{ rotate: rotate2 }}
      >
        <Image
          src={images[1]}
          alt="Season"
          className="object-cover"
          width={200}
          height={200}
        />
      </motion.div>

      <Container className="max-w-3xl">
        <div className="flex flex-col items-center justify-center z-10">
          <Subtitle text={"Nos principes"} className="!mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-6 text-left">
            <Title text={"Saisonnalité & Circuit court : le goût du vrai"} />
          </h2>
          <motion.p
            className="text-xl text-gray-600 !mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.6 }}
            initial={{ opacity: 0, y: 50 }}
          >
            Chez 11H59, nous croyons qu’une restauration d’entreprise
            responsable commence dans l’assiette. Nos menus sont pensés autour
            de la saisonnalité : chaque ingrédient est choisi au bon moment, au
            rythme de la nature. Fini les fraises en hiver et les tomates sans
            goût — place à une cuisine vivante, ancrée dans son terroir.
          </motion.p>
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.6 }}
            initial={{ opacity: 0, y: 50 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 !my-6 !text-left "
          >
            Des produits à moins de 50 km de Paris
          </motion.h3>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.6 }}
            initial={{ opacity: 0, y: 50 }}
            className="text-xl text-gray-600 !mx-auto"
          >
            Plus de 80 % de nos produits frais proviennent de producteurs locaux
            situés à moins de 50 km de Paris. Fruits, légumes, viandes, pains,
            fromages… nous travaillons main dans la main avec des fournisseurs
            engagés qui partagent nos valeurs : respect de la terre, du goût et
            des saisons.
          </motion.p>
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.6 }}
            initial={{ opacity: 0, y: 50 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 !my-6 text-left"
          >
            Une cuisine éco-responsable et engagée
          </motion.h3>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.6 }}
            initial={{ opacity: 0, y: 50 }}
            className="text-xl text-gray-600 !mx-auto"
          >
            Nos chefs s’engagent chaque jour pour une cuisine éco-responsable,
            labellisée Écotable, qui valorise :
          </motion.p>
          <motion.ul
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.6 }}
            initial={{ opacity: 0, y: 50 }}
            className="w-full "
          >
            <li>
              • Les produits issus de circuits courts, pour réduire l’empreinte
              carbone
            </li>
            <li>
              • Le bien-être des convives, grâce à une alimentation saine et
              équilibrée
            </li>
            <li>
              • Le respect des producteurs, rémunérés justement pour leur
              travail
            </li>
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
};
