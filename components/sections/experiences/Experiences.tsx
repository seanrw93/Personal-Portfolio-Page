"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { SectionHeading } from "../../ui/SectionHeading";

export const Experiences = () => {
  const { ref } = useSectionInView("experience");

  return (
    <section className="section section--experiences" id="experience" ref={ref}>
        <SectionHeading>Experiences</SectionHeading>
    </section>
  )
};