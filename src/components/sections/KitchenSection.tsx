"use client";

import { Container } from "@/components/ui/Container";
import { ServicesSection as ServicesSectionType } from "@/types/cms";
import { Section } from "@/components/ui/Section";
import { Title } from "@/components/ui/Title";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Subtitle } from "../ui/Subtitle";
import Picture1 from "../../assets/images/restaurant-1.webp";
import Picture2 from "../../assets/images/restaurant-2.webp";
import Picture3 from "../../assets/images/restaurant-3.webp";
import BackgroundReveal from "../ui/BackgroundReveal";
import Test from "../ui/Test";

interface KitchenSectionProps {
  data?: ServicesSectionType;
}

export function KitchenSection() {
  const pictures = [
    Picture1,
    Picture2,
    Picture3,
    Picture1,
    Picture2,
    Picture3,
    Picture1,
    Picture2,
    Picture3,
  ];

  const video = "/assets/videos/food.mp4";
  const data = [
    {
      image: [Picture1, Picture2, Picture3],
      title: "Créative",
      description:
        "Créative, nous nous soucions de la qualité de nos produits. Nous nous soucions de la qualité de nos produits",
    },
    {
      image: [Picture2, Picture3, Picture1],
      title: "Saine",
      description:
        "Saine, nous nous soucions de la qualité de nos produits, et nous nous soucions de la qualité de nos produits",
    },
    {
      image: [Picture1, Picture1, Picture1],
      title: "Savoureuse",
      description:
        "Savoureuse, nous nous soucions de la qualité de nos produits. Nous nous soucions de la qualité de nos produits",
    },
    {
      image: [Picture1, Picture2, Picture3],
      title: "De métier",
      description:
        "De Métier, nous nous soucions de la qualité de nos produits. Nous nous soucions de la qualité de nos produits",
    },
  ];

  return (
    <Section id="kitchen" className="py-20 bg-white overflow-hidden">
      <Container size="xl" className="flex flex-col items-center pb-16">
        <Subtitle text="Notre cuisine" className="!mb-6 text-center !mx-auto" />
        <div className="flex items-center gap-2 uppercase tracking-tighter text-6xl justify-center font-semibold">
          <span className="">Saine.</span>
          <span className="">Savoureuse.</span>
          <span className="">Créative.</span>
        </div>
        <p className="text-xl text-gray-600 mx-auto text-center !mt-8 max-w-3xl">
          Nos plats sont cuisinés avec amour et attention, pour vous offrir une
          expérience culinaire unique.
        </p>
        <Button variant="secondary" size="lg" className="!mt-8">
          Voir nos plats
        </Button>
        <div className="flex transform -translate-x-[10vw] !mt-20">
          {pictures.map((picture, index) => (
            <Image
              key={index}
              src={picture}
              alt="Plat"
              className={`w-[300px] h-full object-cover border-2 border-gray-200 rounded-lg hover:rotate-0 transition-all duration-300 ${
                index % 2 === 0 ? "rotate-4" : "-rotate-4"
              }`}
            />
          ))}
        </div>
      </Container>
      <Test />
      {/* <BackgroundReveal video={video} text="11H59"></BackgroundReveal> */}
    </Section>
  );
}
