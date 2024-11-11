'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import { HiDownload } from 'react-icons/hi';
import portrait from '../public/portrait.jpg';
import usaFlag from '../public/usa.svg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { sendGAEvent } from '@next/third-parties/google';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] leading-7 mb-28 scroll-mt-28"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <SectionHeading className="sm:text-left">
          <div className="flex justify-between">
            <div className="flex flex-col">
              Burak Loklu
              <span className="text-sm sm:text-base italic">Software Engineer and Computer Science B.Sc. </span>
            </div>
          </div>
        </SectionHeading>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <p className="mb-3">
              Burak Loklu is a software engineer and machine learning enthusiast with a focus on high-performance applications and scalable
              API design. Holding a B.S. in Computer Science from Istanbul Nisantasi University, Burak began his professional career in the
              U.S. in 2019, developing efficient API platforms and backend solutions for applications including telecommunications,
              low-code/no-code platforms, and real-time collaboration.
            </p>
            <p className="mb-3">
              Currently, Burak is a Senior Software Engineer at An Abstract Level LLC, specializing in Python and TypeScript to build
              robust, data-driven solutions.
            </p>
            <div className="flex flex-row gap-4 max-[639px]:justify-center mt-10 h-12">
              <a
                className="group flex items-center whitespace-nowrap max-w-[15rem] sm:max-w-[13rem] font-medium sm:text-sm bg-[#f9fafc] px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="/Burak_Loklu_Resume.pdf"
                download="Burak_Loklu_Resume.pdf"
                onClick={() => sendGAEvent('event', 'buttonClicked', { event_category: 'Download', event_label: 'Resume Download' })}
              >
                Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>
              <a
                className="flex items-center w-[48px] font-medium sm:text-base bg-[#f9fafc] text-gray-700 text-[1rem] p-[14px] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://linkedin.com/in/burakloklu"
                target="_blank"
                onClick={() => sendGAEvent('event', 'buttonClicked', { event_category: 'Social', event_label: 'LinkedIn' })}
              >
                <BsLinkedin className="min-w-full min-h-full" />
              </a>
              <a
                className="flex items-center w-[48px] font-medium sm:text-base bg-[#f9fafc] text-gray-700 text-[1rem] p-[14px] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/burakloklu"
                target="_blank"
                onClick={() => sendGAEvent('event', 'buttonClicked', { event_category: 'Social', event_label: 'LinkedIn' })}
              >
                <BsGithub className="min-w-full min-h-full" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-start justify-center">
            <div className="flex flex-col items-center md:-mr-6 lg:-mr-8">
              <Image src={usaFlag} height={50} quality="95" priority={true} alt="American flag" className="-mt-[5.6rem] pb-16" />
              <div className="relative">
                <Image
                  src={portrait}
                  alt="Burak portrait"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
                <motion.span
                  className="absolute -bottom-2 right-2 text-3xl"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{
                    rotate: [0, 20, -20, 20, 0, 0], // Wave motion with pause at 0
                  }}
                  transition={{
                    repeat: Infinity, // Infinite loop
                    repeatType: 'loop', // Continuous loop after each cycle
                    duration: 8, // Total duration for one wave + pause cycle (3 seconds of wave + 5 seconds pause)
                    ease: 'easeInOut',
                    times: [0, 0.25, 0.5, 0.75, 1, 1], // Control the timing of the wave and stop
                  }}
                >
                  👋
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
