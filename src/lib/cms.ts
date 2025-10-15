import { PageContent, PageSection } from "@/types/cms";

export class CMSAdapter {
  private static instance: CMSAdapter;
  private provider: CMSProvider | null = null;

  private constructor() {}

  static getInstance(): CMSAdapter {
    if (!CMSAdapter.instance) {
      CMSAdapter.instance = new CMSAdapter();
    }
    return CMSAdapter.instance;
  }

  setProvider(provider: CMSProvider): void {
    this.provider = provider;
  }

  async getPageContent(): Promise<PageContent> {
    if (!this.provider) {
      return this.getStaticContent();
    }
    return this.provider.getPageContent();
  }

  async getSection(sectionType: string): Promise<PageSection | null> {
    if (!this.provider) {
      const staticContent = this.getStaticContent();
      return (
        staticContent.sections.find(
          (section) => section.type === sectionType
        ) || null
      );
    }
    return this.provider.getSection(sectionType);
  }

  private getStaticContent(): PageContent {
    return {
      config: {
        id: "site-config",
        type: "config",
        slug: "config",
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        siteName: "11H59",
        tagline: "Révolutionner la restauration d'entreprise",
        navigation: [
          { id: "nav-1", label: "Accueil", href: "#hero" },
          { id: "nav-2", label: "À propos", href: "#about" },
          { id: "nav-3", label: "Services", href: "#services" },
          { id: "nav-4", label: "Valeurs", href: "#values" },
          { id: "nav-5", label: "Témoignages", href: "#testimonials" },
          { id: "nav-6", label: "Contact", href: "#contact" },
        ],
        footer: {
          copyright: "© 2024 11H59. Tous droits réservés.",
          links: [
            { id: "footer-1", label: "Mentions légales", href: "/legal" },
            {
              id: "footer-2",
              label: "Politique de confidentialité",
              href: "/privacy",
            },
          ],
        },
        seo: {
          title: "11H59 - Révolutionner la restauration d'entreprise",
          description:
            "Cuisine de métier engagée, naturelle et de saison. Créateur de lieux de vie conviviaux et fédérateurs pour les entreprises.",
          keywords: [
            "restauration",
            "entreprise",
            "cuisine",
            "écotable",
            "éco-responsable",
            "bien-être",
          ],
        },
      },
      sections: [
        {
          id: "hero-1",
          type: "hero",
          slug: "hero",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          title: "RÉVOLUTIONNER LA RESTAURATION D'ENTREPRISE",
          subtitle: "Chez 11H59",
          description:
            "Notre mission est de rendre le « bien manger » accessible à tous, là où nous passons l'essentiel de notre temps : au travail.",
          ctaText: "Découvrir nos services",
          ctaLink: "#services",
        },
        {
          id: "about-1",
          type: "about",
          slug: "about",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          title: "Des espaces hybrides propices au bien-être",
          subtitle: "Notre vision",
          description:
            "Au sein des maisons communes que sont les entreprises et immeubles de bureaux, nous pensons des lieux de vie conviviaux et fédérateurs. On s'y croise et on s'y mêle, on y vient pour se rencontrer, échanger, déguster un café, se détendre, se concentrer... et se restaurer sainement, à toute heure.",
          keyPoints: [
            {
              icon: "Users",
              title: "Espaces conviviaux",
              description: "Des lieux de rencontre et d'échange",
            },
            {
              icon: "Coffee",
              title: "Moments de détente",
              description: "Pause café et relaxation",
            },
            {
              icon: "Utensils",
              title: "Restauration saine",
              description: "À toute heure de la journée",
            },
          ],
        },
        {
          id: "services-1",
          type: "services",
          slug: "services",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          title: "Nos services",
          subtitle: "Une cuisine de métier et de goût",
          services: [
            {
              id: "service-1",
              title: "Restauration d'entreprise",
              description: "Cuisine de métier engagée, naturelle et de saison",
              features: [
                "Menu élaboré par nos chefs",
                "Produits frais et locaux",
                "Respect de la saisonnalité",
              ],
              color: "#dbeafe",
              image: "/assets/images/restaurant-3.webp",
            },
            {
              id: "service-2",
              title: "Aménagement d'espaces",
              description: "Création de lieux de vie conviviaux et fédérateurs",
              features: [
                "Design sur mesure",
                "Espaces modulables",
                "Ambiance chaleureuse",
              ],
              color: "#fce7f3",
              image: "/assets/images/restaurant-1.webp",
            },
            {
              id: "service-3",
              title: "Conseil et accompagnement",
              description: "Support personnalisé pour votre projet",
              features: [
                "Étude de faisabilité",
                "Suivi de projet",
                "Formation des équipes",
              ],
              color: "#fef3c7",
              image: "/assets/images/restaurant-2.webp",
            },
          ],
        },
        {
          id: "values-1",
          type: "values",
          slug: "values",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          title: "Nos valeurs",
          subtitle: "Vive la Cause Déjeuner !",
          values: [
            {
              id: "value-1",
              title: "Cuisine de métier engagée",
              description:
                "Chaque ingrédient est sélectionné avec exigence, auprès de producteurs locaux partageant nos valeurs : qualité, transparence et durabilité. Nous défendons une gastronomie responsable, ancrée dans son terroir et ouverte sur la créativité, où chaque plat sublime le produit sans jamais le trahir.",
              icon: "ChefHat",
              color: "green",
            },
            {
              id: "value-2",
              title: "Éco-responsabilité",
              description:
                "Éco-responsabilité : au cœur de notre ADN. Du champ à l’assiette, nous privilégions les circuits courts, les produits de saison et la gestion raisonnée des ressources.Notre engagement est reconnu par le label 2 Écotables, faisant de nous le 1er restaurateur d’entreprise labellisé à ce niveau d’exigence.",
              color: "emerald",
              icon: "Leaf",
            },
            {
              id: "value-3",
              title: "Lieux fédérateurs",
              description:
                "Des lieux fédérateurs où l’on partage bien plus qu’un repas.Nos espaces conviviaux invitent à la rencontre, à la discussion et à la détente — parce qu’un bon déjeuner, c’est aussi un moment d’échange.",
              icon: "Heart",
              color: "orange",
            },
          ],
        },
        {
          id: "testimonials-1",
          type: "testimonials",
          slug: "testimonials",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          title: "Ce qu'en disent nos clients",
          subtitle: "Témoignages",
          testimonials: [
            {
              id: "testimonial-1",
              name: "Marie Dubois",
              role: "Directrice RH",
              company: "TechCorp",
              content:
                "Depuis l'arrivée de 11H59, nos collaborateurs sont ravis. La qualité des repas et l'ambiance chaleureuse ont transformé nos pauses déjeuner.",
              rating: 5,
            },
            {
              id: "testimonial-2",
              name: "Pierre Martin",
              role: "CEO",
              company: "InnovaSpace",
              content:
                "Un partenaire qui partage nos valeurs d'éco-responsabilité. L'équipe 11H59 a su créer un espace qui reflète notre culture d'entreprise.",
              rating: 5,
            },
          ],
        },
        {
          id: "contact-1",
          type: "contact",
          slug: "contact",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          title: "Contactez-nous",
          subtitle: "Prêt à révolutionner votre restauration ?",
          description:
            "Parlons de votre projet et découvrons ensemble comment transformer vos espaces de restauration.",
          address: "Paris, France",
          phone: "+33 1 23 45 67 89",
          email: "contact@11h59.fr",
          socialLinks: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/company/11h59",
              icon: "Linkedin",
            },
            {
              platform: "Instagram",
              url: "https://instagram.com/11h59",
              icon: "Instagram",
            },
          ],
        },
      ],
    };
  }
}

export interface CMSProvider {
  getPageContent(): Promise<PageContent>;
  getSection(type: string): Promise<PageSection | null>;
  updateSection(section: PageSection): Promise<PageSection>;
}

export class StrapiProvider implements CMSProvider {
  private baseUrl: string;
  private apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async getPageContent(): Promise<PageContent> {
    throw new Error("Strapi provider not implemented yet");
  }

  async getSection(_sectionType: string): Promise<PageSection | null> {
    throw new Error("Strapi provider not implemented yet");
  }

  async updateSection(_section: PageSection): Promise<PageSection> {
    throw new Error("Strapi provider not implemented yet");
  }
}

export class ContentfulProvider implements CMSProvider {
  private spaceId: string;
  private accessToken: string;

  constructor(spaceId: string, accessToken: string) {
    this.spaceId = spaceId;
    this.accessToken = accessToken;
  }

  async getPageContent(): Promise<PageContent> {
    throw new Error("Contentful provider not implemented yet");
  }

  async getSection(_sectionType: string): Promise<PageSection | null> {
    throw new Error("Contentful provider not implemented yet");
  }

  async updateSection(_section: PageSection): Promise<PageSection> {
    throw new Error("Contentful provider not implemented yet");
  }
}

export const cms = CMSAdapter.getInstance();
