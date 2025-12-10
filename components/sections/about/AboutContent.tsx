import React from "react";
import { useTranslation } from "@/context/TranslationContext";

export const AboutContent = () => {
  const { translations } = useTranslation();
  const paragraphs = translations.common?.about
    ? Object.entries(translations.common.about)
    : [];
  const contentSection = paragraphs.map(([key, value]) => (
    <p key={key} dangerouslySetInnerHTML={{ __html: value as string }} />
  ));
  return <>{contentSection}</>;
};
