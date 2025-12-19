"use server";

import { Resend } from 'resend'; 

type Result = { ok: boolean } | { ok: false; error: string };

const resend = new Resend(process.env.RESEND_API_KEY!); 

export const submitMessage = async (_prev: Result | null, formData: FormData): Promise<Result | null> => {
  const email = formData.get('email') as string || '';
  const subject = formData.get('subject') as string || '';
  const message = formData.get('message') as string || '';
  console.log('Contact form submitted:', { email, subject, message });

  try {

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 's.roennau_wergen@proton.me',
        subject: `New Portfolio Message: ${subject}`,
        text: `Sender: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    return { ok: true}
  } catch (error) {
    return { ok: false }
 }
}