"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import {
  BsArrowRight,
  BsArrowDown,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export const Intro = () => {
  const { common } = useTranslation();
  const hero = common?.hero;
  const btn = common?.btn;
  const url = common?.url;
  const aria = common?.aria;

  return (
    <section id="intro" className="section section--intro">
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
            {hero.welcome}
          </motion.h1>
          <motion.p
            className="intro-text__description"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
          >
            Hello, {hero.intro.name},{" "}
            <span className="font-bold">{hero.intro.role}</span>,{" "}
            {hero.intro.specialisedIn}{" "}
            <span className="font-bold italic">{hero.intro.description}</span>
            <br />
            {hero.intro.focus}{" "}
            <span className="underline">React (Next.js)</span>.
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
            <span className="mb-4 sm:mb-0">{hero.cta}</span>
            <BsArrowDown className="text-4xl sm:text-2xl animate-bounce group-hover:stroke-1 transition" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
