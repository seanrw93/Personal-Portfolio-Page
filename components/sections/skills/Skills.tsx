"use client";

import { useSectionInView } from "@/hooks/.";
import { useTranslation } from '@/context/TranslationContext'
import { SectionHeading } from "../../ui/SectionHeading";

import { skillsData } from "@/lib/data";

import { motion } from "framer-motion";

export const Skills = () => {
  const { ref } = useSectionInView("skills");
  const { translations } = useTranslation();
  const { skills } = translations.common?.heading || {};

  const tags = skillsData.map((skill, index) => (
    <li key={index} className="tags-container__tag">{skill}</li>
  ));

  return (
    <motion.section 
      className="section section--skills" 
      id="skills" 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
        <SectionHeading>{skills}</SectionHeading>
        <ul className="tags-container">{tags}</ul>
    </motion.section>
  )
};