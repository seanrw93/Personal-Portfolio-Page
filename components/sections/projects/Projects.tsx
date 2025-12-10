"use client";

import { useTranslation } from "@/context/TranslationContext"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProjectCard } from "."
import { projectsData } from "@/lib/data"


export const Projects = () => {
  
  const { locale } = useTranslation();

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
      <SectionHeading titleSection="projects" />
      <div className="projects-container">
        {projects}
      </div>
    </section>
  )
}
