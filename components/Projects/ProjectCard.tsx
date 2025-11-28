"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  link: {
    github: string;
    live: string;
  } | null;
  imageUrl: string | null;
  index: number;
};

export const ProjectCard = ({
  title, description, tags, link = null, imageUrl = null, index
}: ProjectCardProps) => {

const [isHovered, setIsHovered] = useState(false);
const cardRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (isHovered && cardRef.current) {
        cardRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
  }
}, [isHovered]);

  return (
    <div 
        id={`project-card-${index + 1}`} 
        className="project-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={cardRef}
    >
      <div className="project-card__content">
          <h3 className="project-card__title">{title}</h3>
          <p 
            className={"project-card__description" + (isHovered ? " sm:max-h-[20rem]" : " sm:max-h-[6.25rem] line-clamp-4")}>
            {description}
          </p>
          <ul className="project-card__tags">
            {tags.map((tag, tagIndex) => (
              <li key={tagIndex} className="project-card__tag">
                  <span>
                    {tag}
                  </span>
              </li>
            ))}
          </ul>
      </div>
      <Image 
        src={imageUrl || "/images/project-placeholder.png"} 
        alt={title} 
        width={400} 
        height={200} 
        quality={90}
        className="project-card__image" />
    </div>
  );
};

export default ProjectCard;
