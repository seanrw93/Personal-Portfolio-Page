"use client";

import { useTranslation } from "@/context/TranslationContext"
import { SectionHeading } from "@/components/SectionHeading"
import { ProjectCard } from "./ProjectCard"
import { projectsData } from "@/lib/data"


export const Projects = () => {

  const { translations, locale } = useTranslation();

  const common = translations.common;
  const heading = common?.heading;

  const projects = projectsData.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      description={project.description[locale as "en" | "fr"]}
      tags={project.tags}
      link={null}
      imageUrl={project.imageUrl || null}
      index={index}
    />
  ));
  
  return (
    <section 
      id="projects" 
      className="section section--projects" 
    >
      <SectionHeading>{heading?.projects}</SectionHeading>
      <div className="projects-container">
        {projects}
      </div>
    </section>
  )
}
