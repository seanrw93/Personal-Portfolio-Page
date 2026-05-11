"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useTranslation } from '@/context/TranslationContext'
import { SubmitButton } from '@/components/buttons'
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'
import { submitMessage } from './actions';

export const ContactForm = () => {
  const { translations } = useTranslation();
  const { pending } = useFormStatus();
  const [result, formAction] = useActionState(submitMessage, null);
  const { email, message, subject, submit, sending, success, error } = translations.common?.contact?.form || {};

  if (result?.ok === true) {
    return (
      <div className="contact-form__description">
        <p className="text-green-600 text-lg font-semibold">{success}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" action={formAction}>
      <label htmlFor="contact-email" className="sr-only">{email}</label>
      <input
        id="contact-email"
        className="contact-form__input"
        type="email"
        name="email"
        placeholder={email}
        required
        autoComplete="email"
      />

      <label htmlFor="contact-subject" className="sr-only">{subject ?? "Subject"}</label>
      <input
        id="contact-subject"
        className="contact-form__input"
        type="text"
        name="subject"
        placeholder={subject ?? "Subject"}
        autoComplete="off"
      />

      <label htmlFor="contact-message" className="sr-only">{message}</label>
      <textarea
        id="contact-message"
        className="contact-form__textarea"
        name="message"
        placeholder={message}
        required
      />

      {result?.ok === false && (
        <div className="contact-form__description" aria-live="polite" role="alert">
          <p className="text-red-600 text-lg font-semibold mb-3">{error}</p>
        </div>
      )}

      <SubmitButton disabled={pending}>
        {pending ? sending : submit}
        {pending && <FaSpinner aria-hidden="true" className="animate-spin text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />}
        <FaPaperPlane aria-hidden="true" className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </SubmitButton>
    </form>
  );
};
