import type { Metadata } from "next";
import { Header } from "@/components/Header"
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const translations = {
    meta: {
      title: "Sean | Personal Portfolio",
      description: "Showcasing my work and my projects as a frontend developer."
    }
  };
  
  return {
    title: translations.meta.title,
    description: translations.meta.description,
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-primary-bg text-primary-text relative antialiased`}
      >
        <div className="background-circle background-circle--pink"></div>
        <div className="background-circle background-circle--purple"></div>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
