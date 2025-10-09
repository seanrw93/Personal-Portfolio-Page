import type { Metadata } from "next";
import { Header } from "@/components/Header"
import { Inter } from "next/font/google";
import "@/app/globals.css";

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
  };
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-primary-bg text-primary-text relative antialiased`}
      >
        <div className="background-circle background-circle--pink"></div>
        <div className="background-circle background-circle--purple"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
