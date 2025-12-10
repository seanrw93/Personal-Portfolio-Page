"use client";

import { SectionHeading } from "../../ui/SectionHeading";
import { AboutContent } from "./AboutContent";
import { motion } from "framer-motion";

export const About = () => {

  return (
    <motion.section 
      id="about" 
      className="section section--about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading titleSection="about" />
      <AboutContent />
    </motion.section>
  );
};
