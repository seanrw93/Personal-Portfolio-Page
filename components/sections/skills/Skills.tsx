"use client";

import { useSectionInView } from "@/hooks/.";
import { useTranslation } from '@/context/TranslationContext'
import { SectionHeading } from "../../ui/SectionHeading";

import { skillsData } from "@/lib/data";

export const Skills = () => {
  const { ref } = useSectionInView("skills");
  const { translations } = useTranslation();
  const { skills } = translations.common?.heading || {};

  const tags = skillsData.map((skill, index) => (
    <li key={index} className="tags-container__tag">{skill}</li>
  ));

  return (
    <section className="section section--skills" id="skills" ref={ref}>
        <SectionHeading>{skills}</SectionHeading>
        <ul className="tags-container">{tags}</ul>
    </section>
  )
};