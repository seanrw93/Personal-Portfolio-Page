"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

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
  title,
  description,
  tags,
  link = null,
  imageUrl = null,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"], // Animates as card enters viewport
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  useEffect(() => {
    if (isHovered && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }

    if (isHovered && imageRef.current) {
      imageRef.current.classList.add("project-card__image--hovered");
    } else if (imageRef.current) {
      imageRef.current.classList.remove("project-card__image--hovered");
    }
  }, [isHovered]);

  return (
    <motion.div
      id={`project-card-${index + 1}`}
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={cardRef}
      role="article"
      tabIndex={0}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p
          className={
            "project-card__description" +
            (isFocused
              ? " sm:max-h-[50rem]"
              : " sm:max-h-[6.25rem] line-clamp-3")
          }
          aria-expanded={isFocused ? "true" : "false"}
        >
          {description}
        </p>
        <span 
          className="see-more"
          aria-hidden={isFocused ? "true" : "false"}
          style={isFocused ? { display: "none" } : { display: "inline-block" }}
          >
            See more
        </span>
        <ul className="project-card__tags">
          {tags.map((tag, tagIndex) => (
            <li key={tagIndex} className="project-card__tag">
              <span>{tag}</span>
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
        ref={imageRef}
        className="project-card__image"
      />
    </motion.div>
  );
};

export default ProjectCard;
