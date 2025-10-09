import type { Translations } from '@/types/translations';

export const translations: Record<'en' | 'fr', Translations> = {
  en: require('@/locales/en/common.json'),
  fr: require('@/locales/fr/common.json'),
};

export const getTranslation = (locale: string): Translations => {
  return translations[locale as 'en' | 'fr'] || translations.en;
};