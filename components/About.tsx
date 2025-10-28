"use client";

import { SectionHeading } from "./SectionHeading";
import { useTranslation } from "@/context/TranslationContext";
import { motion } from "framer-motion";

export const About = () => {
  const { translations } = useTranslation();
  const heading = translations.common?.heading.about;
  const paragraphs = translations.common?.about ? Object.entries(translations.common.about) : [];
  const contentSection = paragraphs.map(([key, value]) => (
    <p key={key} dangerouslySetInnerHTML={{ __html: value as string }} />
  ));

  return (
    <motion.section 
      id="about" 
      className="section section--about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>{heading}</SectionHeading>
      {contentSection}
    </motion.section>
  );
};
