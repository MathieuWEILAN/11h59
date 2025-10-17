import { Container } from "@/components/ui/Container";
import { NavigationItem } from "@/types/cms";

interface FooterProps {
  siteName: string;
  copyright: string;
  links: NavigationItem[];
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

export function Footer({
  siteName,
  copyright,
  links,
  socialLinks,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <Container size="xl">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-4">
                {siteName}
              </div>
              <p className="text-gray-400 mb-4">
                Révolutionner la restauration d&apos;entreprise avec des
                solutions éco-responsables et des espaces conviviaux.
              </p>
              {socialLinks && (
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      <span className="sr-only">{social.platform}</span>
                      <div className="w-6 h-6 bg-gray-400 rounded" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <nav className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="block text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Paris, France</p>
                <p>+33 1 23 45 67 89</p>
                <p>contact@11h59.fr</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
