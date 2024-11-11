'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/lib/utils';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 max-w-[45rem] w-[min(100%, 45rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-center -mt-2 dark:text-white/80">
        The best way to reach me is by email at{' '}
        <a className="underline" href="mailto:burakloklu@gmail.com">
          burakloklu@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-4 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data } = await sendEmail(formData);
          let error;
          if (data?.error != null) {
            error = getErrorMessage(data.error);
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={50}
        ></input>
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
