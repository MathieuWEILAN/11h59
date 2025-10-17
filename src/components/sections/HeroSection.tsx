"use client";

import { motion } from "motion/react";
import { Award, ChevronDown, Sparkles, Leaf, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroSection as HeroSectionType } from "@/types/cms";
import { Section } from "@/components/ui/Section";
import { useLandingPage } from "@/components/providers/LandingPageProvider";
import Image from "next/image";

interface HeroSectionProps {
  data: HeroSectionType;
}

export function HeroSection({ data }: HeroSectionProps) {
  const { showLanding } = useLandingPage();
  const handleCtaClick = () => {
    if (data.ctaLink.startsWith("#")) {
      const element = document.querySelector(data.ctaLink);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [
    "/assets/images/plats/1.png",
    "/assets/images/plats/2.png",
    "/assets/images/plats/4.png",
    "/assets/images/plats/4.png",
  ];
  return (
    <Section
      id="hero"
      className="relative min-h-screen bg-[#105754] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={!showLanding ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Image
          key={images[0]}
          src={images[0]}
          alt="Hero"
          height={600}
          width={600}
          className="object-cover -bottom-[40%] xl:-bottom-[50%] -left-[20%] absolute"
        />
        <Image
          key={images[1]}
          src={images[1]}
          alt="Hero"
          height={600}
          width={600}
          className="object-cover -bottom-[40%] xl:-bottom-[50%] -right-[20%] absolute"
        />
      </motion.div>

      <Container size="xl" className="z-10">
        <div className="mx-auto px-4 py-20">
          <div className="text-center flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                !showLanding
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-6 gap-2">
                <Sparkles size={20} />
                <span className="font-semibold">
                  Adieu la cantine fade et aseptisée 👋
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={
                !showLanding ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            >
              Révolutionner la
              <br />
              <span className="text-orange-500">
                Restauration d&apos;Entreprise
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={
                !showLanding ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl mb-8 text-white leading-relaxed"
            >
              Rendre le{" "}
              <span className="font-semibold text-orange-500">
                « bien manger »
              </span>{" "}
              accessible à tous,
              <br />
              là où nous passons l&apos;essentiel de notre temps :{" "}
              <span className="font-semibold">au travail</span> 💚
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                !showLanding ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="secondary"
                size="lg"
                // onClick={() => scrollToSection("contact")}
              >
                Démarrer avec 11H59
              </Button>
              <Button
                variant="primary"
                size="lg"
                // onClick={() => scrollToSection("offer")}
              >
                Découvrir notre offre
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={!showLanding ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-stone-600"
            >
              <div className="flex items-center space-x-2">
                <Award className="text-emerald-600" size={20} />
                <span className="text-white">1er labelisé 2 Écotables</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="text-emerald-600" size={20} />
                <span className="text-white">Exit le greenwashing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-emerald-600" size={20} />
                <span className="text-white">Vive la Cause Déjeuner !</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
