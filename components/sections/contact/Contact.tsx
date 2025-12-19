"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { SectionHeading } from "../../ui/SectionHeading";
import { ContactDescription, ContactForm } from ".";

import { motion } from "framer-motion";

export const Contact = () => {
  const { ref } = useSectionInView("contact");

  return (
    <motion.section 
      className="section section--contact" 
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
        <SectionHeading titleSection="contact" />
        <ContactDescription />
        <ContactForm />
    </motion.section>
  )
};