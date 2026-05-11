"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SkillsTags } from "@/components/ui/SkillsTags";
import { BsGithub, BsBoxArrowUpRight} from "react-icons/bs";
import { useTranslation } from "@/context/TranslationContext";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  link: {
    github: string;
    live: string;
  } | null;
  imageUrl: string;
  index: number;
};

export const ProjectCard = ({
  title,
  description,
  tags,
  link,
  imageUrl,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { translations } = useTranslation();
  const ariaNav = translations?.common?.aria?.navigation as { [key: string]: string } | undefined;

  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // useEffect(() => {
  //   if (!isHovered) {
  //     scrolledOnceRef.current = false;
  //     return;
  //   }
  //   if (cardRef.current && !scrolledOnceRef.current) {
  //     scrolledOnceRef.current = true;
  //     cardRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //     });
  //   }
  // }, [isHovered]);

  return (
    <motion.div
      id={`project-card-${index + 1}`}
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={cardRef}
      tabIndex={0}
      aria-label={`Project: ${title}`}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <div className="project-card__links">
            <a
              href={link?.live || "#"}
              className={`project-card__link ${!link?.live ? "project-card__link--disabled" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaNav?.liveDemo?.replace("{{title}}", title) ?? `View live demo of ${title}`}
              aria-disabled={!link?.live}
            >
              <BsBoxArrowUpRight size={24} aria-hidden="true" />
            </a>
            <a
              href={link?.github || "#"}
              className={`project-card__link ${!link?.github ? "project-card__link--disabled" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaNav?.githubProject?.replace("{{title}}", title) ?? `View ${title} source code on GitHub`}
              aria-disabled={!link?.github}
            >
              <BsGithub size={24} aria-hidden="true" />
            </a>
          </div>
        </div>
        <p
          className={
            "project-card__description" +
            (isFocused ? " sm:max-h-[50rem]" : " sm:max-h-[6.25rem] line-clamp-3")
          }
        >
          {description}
        </p>
        {!isFocused && (
          <span className="see-more" aria-hidden="true">
            See more
          </span>
        )}
        <SkillsTags size={"0.6rem"} tags={tags} />
      </div>
      <Image
        src={imageUrl || "/images/project-placeholder.png"}
        alt={title}
        width={400}
        height={200}
        quality={90}
        className={`project-card__image ${isHovered ? "project-card__image--hovered" : ""}`}
      />
    </motion.div>
  );
};

export default ProjectCard;