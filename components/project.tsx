'use client';
import React, { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ name, title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-200 max-w-[24rem] sm:max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative h-[auto] sm:h-[24rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col pb-4 py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[50%] sm:h-[20rem] h-full group-odd:mr-[9rem] group-even:ml-[9rem] group-odd:sm:mr-[18rem] group-even:sm:ml-[20rem]">
          <h3 className="text-xl font-semibold">{name}</h3>
          <h3 className="text-sm text-[#888] font-medium italic">{title}</h3>
          <p className="mt-1 text-[0.9rem] text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap pt-2 gap-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project"
          quality={95}
          className="absolute top-8 -right-32 w-[16rem] h-[12rem] sm:w-[28.25rem] sm:h-[18rem] rounded-t-lg shadow-2xl 
        transition
        group-hover:scale-[1.10]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        
        group-even:right-[inital] 
        group-even:-left-32"
        />
      </section>
    </motion.div>
  );
}
