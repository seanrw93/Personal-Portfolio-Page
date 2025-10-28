"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Translations } from "@/types/translations";

type TranslationContextType = {
  locale: string;
  translations: Translations;
  changeLanguage: (lang: string) => void;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

type TranslationProviderProps = {
  children: React.ReactNode;
  initialLocale?: string;
  initialTranslations?: Translations;
};

export const TranslationProvider = ({
  children,
  initialLocale,
  initialTranslations,
}: TranslationProviderProps) => {
  const router = useRouter();
  const [locale, setLocale] = useState(initialLocale || "en");
  const [translations] = useState<Translations>(
    (initialTranslations || {}) as Translations
  );

  useEffect(() => {
    if (initialLocale) {
      setLocale(initialLocale);
    } else {
      setLocale("en");
    }
  }, [initialLocale]);

  const changeLanguage = (lang: string) => {
    setLocale(lang);
    router.push(`/${lang}`);
  };

  return (
    <TranslationContext.Provider
      value={{ locale, changeLanguage, translations }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
