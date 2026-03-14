"use client";

import { useState, useEffect } from "react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useTranslation } from "@/context/TranslationContext";
import { SectionHeading } from "../../ui/SectionHeading";
import { Modal } from "../../ui/Modal";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import { SkillsTags } from "@/components/ui/SkillsTags";

export const Experiences = () => {
  const { locale, translations } = useTranslation();
  const { experience } = translations.common?.heading || {};
  const { ref } = useSectionInView("experience");

  // Track screen width safely
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Modal state (one modal open at a time)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section section--experiences" id="experience" ref={ref}>
      <SectionHeading>{experience}</SectionHeading>

      <VerticalTimeline lineColor="#f5f5f5">
        {experiencesData.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              backgroundColor: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={!isMobile ? exp.period : ""}
            icon={exp.icon}
            iconStyle={{
              objectFit: "contain",
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <h3 className="font-semibold text-lg">
              {exp.title[locale as "en" | "fr"]}
            </h3>

            <p className="font-semibold !mt-1">{exp.company}</p>
            <p className="font-normal !mt-0">{exp.location}</p>

            {isMobile && (
              <p className="text-xs !mt-0">{exp.period}</p>
            )}

            <p>{exp.description[locale as "en" | "fr"]}</p>

            <SkillsTags
              size={"0.5rem"}
              tags={exp.skills[locale as "en" | "fr"]}
            />

            {exp.responsibilities[locale as "en" | "fr"].length > 0 && (
              <button
                onClick={() => setOpenIndex(index)}
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 my-2 ml-auto"
              >
                More Info
              </button>
            )}

            {/* Modal */}
            <Modal
              isOpen={openIndex === index}
              onClose={() => setOpenIndex(null)}
            >
              <Modal.Title>
                <div className="sm:flex sm:flex-row">
                  <img
                    src={exp.icon.props.src || "/images/placeholder.png"}
                    alt={exp.icon.props.alt || "Experience Image"}
                    className="w-32 h-32 object-cover mb-4 rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">
                      {exp.title[locale as "en" | "fr"]}
                    </h2>
                    <p className="text-gray-600">
                      {exp.company} | {exp.period}
                    </p>
                  </div>
                </div>
              </Modal.Title>

              <Modal.Content>
                <h3 className="text-gray-700">
                  {locale === "en" ? "Responsibilities:" : "Responsabilités :"}
                </h3>
                <ul className="mt-2 list-outside list-disc pl-5">
                  {exp.responsibilities[locale as "en" | "fr"].map(
                    (item, idx) => (
                      <li key={idx} className="mt-1">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </Modal.Content>

              <Modal.Actions>
                <button
                  onClick={() => setOpenIndex(null)}
                  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                >
                  Close
                </button>
              </Modal.Actions>
            </Modal>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
