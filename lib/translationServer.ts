import { translations } from '@/lib/i18n';
import type { Translations } from '@/types/translations';

export const getServerTranslation = (locale: string): Translations => {
  const safeLocale = locale === 'fr' ? 'fr' : 'en';
  return translations[safeLocale];
};