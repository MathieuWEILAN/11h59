import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "11H59 - Révolutionner la restauration d'entreprise",
  description:
    "Cuisine de métier engagée, naturelle et de saison. Créateur de lieux de vie conviviaux et fédérateurs pour les entreprises. 1er restaurateur d'entreprise labelisé 2 écotables.",
  keywords: [
    "restauration",
    "entreprise",
    "cuisine",
    "écotable",
    "éco-responsable",
    "bien-être",
  ],
  openGraph: {
    title: "11H59 - Révolutionner la restauration d'entreprise",
    description:
      "Cuisine de métier engagée, naturelle et de saison. Créateur de lieux de vie conviviaux et fédérateurs pour les entreprises.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
