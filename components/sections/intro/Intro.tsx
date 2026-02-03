"use client";

import { useState } from "react";
import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useTranslation } from "@/context/TranslationContext";
import Link from "next/link";
import {
  BsArrowRight,
  BsArrowDown,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export const Intro = () => {
  const { ref } = useSectionInView("home");

  const { translations } = useTranslation();
  const  {btn, url, aria } = translations?.common;
  const { name, role, freelance, specialisedIn, description, focus } = translations?.common?.hero?.intro;
  const { welcome, cta  } = translations?.common?.hero;

  const [firstRun, setFirstRun] = useState(true);
  
  return (
    <section id="home" className="section section--intro" ref={ref}>
      <div className="image-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={192}
            height={192}
            className="profile-image"
            quality={95}
            priority={true}
          />
        </motion.div>
        <div className="intro-text">
          <motion.h1
            className="intro-text__heading"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
          >
            {welcome}
          </motion.h1>
          <motion.p
            className="intro-text__description"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
          >
            Hello, {name},{" "}
            <span className="font-bold min-w-[250px] inline-block">
              <ReactTyped
                strings={[role, freelance].flat()}
                typeSpeed={60}
                backSpeed={50}
                startDelay={firstRun ? 1000 : 100}
                backDelay={800}
                smartBackspace
                loop
                onBegin={() => firstRun && setFirstRun(false)}
              />
            </span>,{" "}
            {specialisedIn}{" "}
            <span className="font-bold italic">{description}</span>
          </motion.p>
        </div>
        <motion.div
          className="btn-container text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.7 }}
        >
          <Link
            href="#contact"
            className="btn-primary group inline-flex items-center justify-center space-x-2"
            aria-label={aria.navigation.link.replace("{{section}}", "contact")}
          >
            <span>{btn.contactMe}</span>
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={url.cv}
            download
            className="btn-secondary group inline-flex items-center justify-center space-x-2"
          >
            <span>{btn.downloadCv}</span>
            <HiDownload className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            className="btn-secondary p-4 inline-flex items-center justify-center space-x-2"
            href={url.linkedin}
            target="_blank"
            aria-label={aria.navigation.linkedin}
          >
            <BsLinkedin />
          </a>
          <a
            className="btn-secondary p-4 inline-flex items-center justify-center space-x-2"
            href="https://github.com/seanrw93"
            target="_blank"
            aria-label={aria.navigation.github}
          >
            <BsGithub />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 1.2 }}
          className="mt-4 group"
        >
          <Link
            href="#about"
            className="btn-tertiary flex flex-col sm:flex-row items-center justify-center space-x-2"
            aria-label={aria.navigation.link.replace("{{section}}", "about")}
          >
            <span className="mb-4 sm:mb-0">{cta}</span>
            <BsArrowDown className="text-4xl sm:text-2xl animate-bounce group-hover:stroke-1 transition" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
