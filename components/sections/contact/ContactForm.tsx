"use client";

import { useActionState } from "react";
import { useFormStatus } from 'react-dom';
import { useTranslation } from '@/context/TranslationContext'
import { SubmitButton } from '@/components/buttons'
import { FaPaperPlane } from 'react-icons/fa'
import { submitMessage } from '.';

export const ContactForm = () => {
  const { translations } = useTranslation();
  const { pending } = useFormStatus();
  const [result, formAction] = useActionState(submitMessage, null);
  const { email, message, submit, sending, success, error } = translations.common?.contact?.form || {};

  const successMessage = result?.ok === true && (
    <div className="contact-form__description">
      <p className="text-green-600 text-lg font-semibold">{success}</p>
    </div>
  );
  
  const errorMessage = result?.ok === false && (
    <div className="contact-form__description">
      <p className="text-red-600 text-lg font-semibold">{error}</p>
    </div>
  );

  if (result === null) {
    return (
      <form 
        className="contact-form"
        action={formAction}
      >
        <input 
          className="contact-form__input" 
          type="email" 
          name="email"
          placeholder={email} 
          required
        />
        <input 
          className="contact-form__input" 
          type="text" 
          name="subject"
          placeholder={"Subject"}
        />
        <textarea 
          className="contact-form__textarea" 
          name="message"
          placeholder={message} 
          required
        ></textarea>
        <SubmitButton disabled={pending}>
          {pending ? sending : submit}
          <FaPaperPlane 
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" 
          />
        </SubmitButton>
      </form>
    )
  } else {
    return successMessage || errorMessage;
  }
}
