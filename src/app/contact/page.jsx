'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { sendEmail } from '../actions';
import { useFormStatus } from 'react-dom';
const ContactPage = () => {
  const { pending } = useFormStatus();
  const [formState, setFormState] = useState({ success: false, error: null });

  const text = 'Say Hello!';
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await sendEmail(formData);
    setFormState(result);
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className="text-accent">
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={handleSubmit}
          className="h-1/2 lg:h-full lg:w-1/2 border border-accent/40 text-accent rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Saurav,</span>
          <textarea
            rows={4}
            className="bg-white/20 border-b-2 border-b-accent p-2 outline-none resize-none "
            name="message"
            id="message"
          />
          <span>My mail address is:</span>
          <input
            name="email"
            id="email"
            type="email"
            className="bg-white/20 p-2 border-b-2 border-b-accent outline-none"
          />
          <span>Regards</span>
          <button className="bg-accent/40 rounded font-semibold text-accent p-4">
            {pending ? 'Sending...' : 'Send Message'}
          </button>
          {formState.success && (
            <p className="text-green-600" role="status">
              Message sent successfully!
            </p>
          )}
          {formState.error && (
            <p className="text-red-600" role="alert">
              {formState.error}
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
