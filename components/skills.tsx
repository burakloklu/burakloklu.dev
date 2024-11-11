'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVaritants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.08 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.5);

  return (
    <section ref={ref} id="skills" className="max-w-[45rem] scroll-mt-28 text-center mb-28 sm:mb-40">
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white font-medium border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVaritants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
