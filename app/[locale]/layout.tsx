import type { Metadata } from "next";
import { Header } from "@/components/Header"
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";

import { TranslationProvider } from "@/context/TranslationContext";
import { getServerTranslation } from "@/lib/translationServer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sean | Portfolio",
    description: "Showcasing my work and my projects as a frontend developer.",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;
  const translations = getServerTranslation(locale);

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-primary-bg text-primary-text relative antialiased`}
      >
        <div className="background-circle background-circle--pink"></div>
        <div className="background-circle background-circle--purple"></div>
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
