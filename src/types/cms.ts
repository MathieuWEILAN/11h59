export interface CMSContent {
  id: string;
  type: string;
  slug: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HeroSection extends CMSContent {
  type: "hero";
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  videoUrl?: string;
}

export interface AboutSection extends CMSContent {
  type: "about";
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  keyPoints: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface ServicesSection extends CMSContent {
  type: "services";
  title: string;
  subtitle: string;
  services: Array<{
    id: string;
    title: string;
    description: string;
    image?: string;
    features: string[];
    color?: string;
  }>;
}

export interface ValuesSection extends CMSContent {
  type: "values";
  title: string;
  subtitle: string;
  values: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  }>;
}

export interface TestimonialsSection extends CMSContent {
  type: "testimonials";
  title: string;
  subtitle: string;
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar?: string;
    rating?: number;
  }>;
}

export interface ContactSection extends CMSContent {
  type: "contact";
  title: string;
  subtitle: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

export interface PhilosophySection extends CMSContent {
  type: "philosophy";
  subtitle: string;
  description: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig extends CMSContent {
  type: "config";
  siteName: string;
  tagline: string;
  logo?: string;
  favicon?: string;
  navigation: NavigationItem[];
  footer: {
    copyright: string;
    links: NavigationItem[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}

export type PageSection =
  | HeroSection
  | AboutSection
  | ServicesSection
  | ValuesSection
  | TestimonialsSection
  | ContactSection
  | PhilosophySection;

export interface PageContent {
  config: SiteConfig;
  sections: PageSection[];
}
