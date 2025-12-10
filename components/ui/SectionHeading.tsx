"use client";

import { useTranslation } from "@/context/TranslationContext";

type SectionHeadingProps = {
  children?: React.ReactNode;
  titleSection?: Sections | null;
}

type Sections = "about" | "projects" | "skills" | "experience" | "contact";

export const SectionHeading = ({ titleSection = null, children = null }: SectionHeadingProps) => {

  const { translations } = useTranslation();
  const common = translations.common;
  const translatedHeading = common?.heading[titleSection as keyof typeof common.heading];

  return (
    <h2 className="section-header">{translatedHeading ?? children}</h2>
  )
};