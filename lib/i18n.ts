import type { Translations } from '@/types/translations';
import enTranslations from '@/locales/en/common.json';
import frTranslations from '@/locales/fr/common.json';

export const translations: Record<'en' | 'fr', Translations> = {
  en: enTranslations,
  fr: frTranslations,
};

export const getTranslation = (locale: string): Translations => {
  return translations[locale as 'en' | 'fr'] || translations.en;
};