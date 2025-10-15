"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TestimonialsSection as TestimonialsSectionType } from "@/types/cms";
import { Section } from "@/components/ui/Section";

interface TestimonialsSectionProps {
  data: TestimonialsSectionType;
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <Section id="testimonials" className="py-20 bg-gray-50">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold text-lg mb-4">
            {data.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200" />

              <div className="mb-6">
                {testimonial.rating && (
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                )}

                <p className="text-gray-700 text-lg leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-green-500 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-lg mb-6">
              Transformez votre espace de restauration en lieu de vie convivial
              et éco-responsable
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <p>Entreprises partenaires</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <p>Satisfaction client</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2</div>
                <p>Label Écotables</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
