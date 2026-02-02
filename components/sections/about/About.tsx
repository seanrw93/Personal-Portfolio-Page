"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { SectionHeading } from "../../ui/SectionHeading";
import { AboutContent } from "./AboutContent";
import { motion } from "framer-motion";

export const About = () => {
  const { ref } = useSectionInView("about");

  return (
    <motion.section 
      id="about" 
      className="section section--about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <SectionHeading titleSection="about" />
      <AboutContent />
    </motion.section>
  );
};
