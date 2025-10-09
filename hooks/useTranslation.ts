'use client';

import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';
import type { Translations } from '@/types/translations';

export const useTranslation = (): Translations => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const safeLocale = locale === 'fr' ? 'fr' : 'en';
  return translations[safeLocale];
};
