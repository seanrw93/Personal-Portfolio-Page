"use client";

import { useTranslation } from "@/context/TranslationContext";

export const ContactDescription = () => {
    const { translations } = useTranslation();
    const {description, email, linkedin, lookingForward} = translations.common?.contact;

  return (
    <div className="contact-description" >
        <p className="mb-4">{description}</p>
        <p className="mb-4">{email} {" "}{linkedin}.</p>
        <p>{lookingForward}</p>
    </div>
  )
}
