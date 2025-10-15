import { cms } from "@/lib/cms";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { KitchenSection } from "@/components/sections/KitchenSection";

export default async function Home() {
  const pageContent = await cms.getPageContent();
  const { config, sections } = pageContent;

  const heroSection = sections.find((s) => s.type === "hero");
  const aboutSection = sections.find((s) => s.type === "about");
  const servicesSection = sections.find((s) => s.type === "services");
  const valuesSection = sections.find((s) => s.type === "values");
  const testimonialsSection = sections.find((s) => s.type === "testimonials");
  const contactSection = sections.find((s) => s.type === "contact");
  const philosophySection = sections.find((s) => s.type === "philosophy");

  return (
    <div className="min-h-screen">
      <Header
        siteName={config.siteName}
        navigation={config.navigation}
        logo={config.logo}
      />

      <main>
        {heroSection && heroSection.type === "hero" && (
          <HeroSection data={heroSection} />
        )}

        <PhilosophySection />

        {aboutSection && aboutSection.type === "about" && (
          <AboutSection data={aboutSection} />
        )}

        {servicesSection && servicesSection.type === "services" && (
          <ServicesSection data={servicesSection} />
        )}

        {valuesSection && valuesSection.type === "values" && (
          <ValuesSection data={valuesSection} />
        )}

        <KitchenSection />

        {testimonialsSection && testimonialsSection.type === "testimonials" && (
          <TestimonialsSection data={testimonialsSection} />
        )}

        {contactSection && contactSection.type === "contact" && (
          <ContactSection data={contactSection} />
        )}
      </main>

      <Footer
        siteName={config.siteName}
        copyright={config.footer.copyright}
        links={config.footer.links}
        socialLinks={
          contactSection?.type === "contact"
            ? contactSection.socialLinks
            : undefined
        }
      />
    </div>
  );
}
