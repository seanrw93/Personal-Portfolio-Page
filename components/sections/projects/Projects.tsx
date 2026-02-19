"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { useTranslation } from "@/context/TranslationContext"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProjectCard } from "."
import { projectsData } from "@/lib/data"


export const Projects = () => {
  
  const { ref } = useSectionInView("projects");
  const { locale } = useTranslation();

  const projects = projectsData.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      description={project.description[locale as "en" | "fr"]}
      tags={project.tags}
      link={project.links || null}
      imageUrl={project.imageUrl || null}
      index={index}
    />
  ));
  
  return (
    <section 
      id="projects" 
      className="section section--projects" 
      ref={ref}
    >
      <SectionHeading titleSection="projects" />
      <div className="projects-container">
        {projects}
      </div>
    </section>
  )
}
