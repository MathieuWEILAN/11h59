"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionImage {
  src: string | StaticImageData;
  alt: string;
}

interface AccordionItem {
  title: string;
  description: string;
  images: AccordionImage[];
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  setSelectedImages: (index: number) => void;
}

export default function Accordion({
  items,
  allowMultiple = false,
  setSelectedImages,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setSelectedImages(index);
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const isOpen = (index: number) => openIndexes.includes(index);
  return (
    <div className="w-2/3 flex flex-col gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`overflow-hidden transition-colors duration-500 rounded-lg cursor-pointer ${
            isOpen(index) ? "bg-[#105754] text-white" : "bg-[#105754]/10"
          }`}
        >
          {/* Header */}
          <button
            onClick={() => toggleItem(index)}
            className={`w-full px-6 py-4 flex items-center justify-between`}
          >
            <h3 className="text-lg font-semibold text-left">{item.title}</h3>

            <motion.div
              animate={{ rotate: isOpen(index) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </button>

          {/* Content */}
          <AnimatePresence initial={false}>
            {isOpen(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  {/* Description */}
                  <p className="leading-relaxed mb-6">{item.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
