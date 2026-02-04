import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { Header } from "@/components/navigation/Header";
import { ScrollToTopButton } from "@/components/buttons/ScrollToTopButton";
import { TranslationProvider } from "@/context/TranslationContext";
import { getServerTranslation } from "@/lib/translationServer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFrench = locale === "fr";

  const title = isFrench
    ? "Développeur Front-End React à Paris | Sean Roennau-Wergen"
    : "Front-End React Developer in Paris | Sean Roennau-Wergen";

  const description = isFrench
    ? "Développeur front-end spécialisé en intégration UI, React et Next.js. Expérience en design systems, accessibilité et performance."
    : "Front-end developer specialized in UI integration, React and Next.js, with experience in design systems, accessibility and performance.";

  return {
    title,
    description,
    authors: [{ name: "Sean Roennau-Wergen" }],
    robots: "index, follow",

    alternates: {
      canonical: `https://srw-dev.vercel.app/${locale}`,
      languages: {
        en: "https://srw-dev.vercel.app/en",
        fr: "https://srw-dev.vercel.app/fr",
      },
    },

    openGraph: {
      title,
      description,
      url: `https://srw-dev.vercel.app/${locale}`,
      siteName: "Sean Roennau-Wergen Portfolio",
      locale: isFrench ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const translations = getServerTranslation(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sean Roennau-Wergen",
    jobTitle: locale === "fr" ? "Développeur Front-End" : "Front-End Developer",
    url: `https://srw-dev.vercel.app/${locale}`,
    sameAs: [
      "https://www.linkedin.com/in/sean-roennau-wergen",
      "https://github.com/seanrw93",
    ],
  };

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
        <body className={`${inter.className} bg-primary-bg text-primary-text antialiased`}>
          <TranslationProvider initialLocale={locale} initialTranslations={translations}>
            <ScrollToTopButton />
            <Header />
              {children}
            <Analytics />
          </TranslationProvider>
        </body>
    </html>
  );
}
