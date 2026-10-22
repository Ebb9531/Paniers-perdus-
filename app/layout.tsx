import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "700"],
  display: "swap",
});

const titre = "Panier Perdu – Fais revenir tes clients qui ont abandonné leur panier";
const description =
  "Deux relances écrites, personnalisées, envoyées automatiquement aux clients qui ont quitté ta boutique avec un panier plein. 29 € par mois, sans engagement.";

export const metadata: Metadata = {
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    locale: "fr_FR",
    type: "website",
    siteName: "Panier Perdu",
  },
  twitter: { card: "summary_large_image", title: titre, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12203a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
