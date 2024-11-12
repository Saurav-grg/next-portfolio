'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  if (!senderEmail || !message) {
    return {
      error: 'Please provide both an email address and a message.',
    };
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'menemy2323@gmail.com', // Replace with your email
      subject: 'New message from your website',
      text: `You received a new message from ${senderEmail}:\n\n${message}`,
    });

    return { success: true };
  } catch (error) {
    return {
      error: 'Failed to send the email. Please try again later.',
    };
  }
}
