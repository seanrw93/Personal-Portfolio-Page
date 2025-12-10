"use client";

import { SectionHeading } from "../../ui/SectionHeading";
import { ContactDescription, ContactForm } from ".";

import { motion } from "framer-motion";

export const Contact = () => {

  return (
    <motion.section 
      className="section section--contact" 
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
        <SectionHeading titleSection="contact" />
        <ContactDescription />
        <ContactForm />
    </motion.section>
  )
};