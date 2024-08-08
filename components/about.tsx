"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-7 mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in Computer Science,{" "}
        <span className="font-medium">
          I made a significant move from Istanbul to the United States in 2017
        </span>
        . My professional career officially began in 2019, where I immersed
        myself in the startup scene after securing work authorization. Over
        nearly five transformative years, guided by a seasoned mentor, I focused
        on refining my skills.
      </p>
      <p className="mb-3">
        During this time,{" "}
        <span className="font-medium">
          I specialized in delivering innovative solutions through web
          development. My experience spans creating intuitive user interfaces,
          developing cross-platform applications, and managing complex system
          integrations across various industries.
        </span>{" "}
        Projects have included applications in telecommunications, fintech, and
        e-commerce, where I utilized{" "}
        <span className="font-medium italic">
          Angular, React/Next.js, Node.js, and Python/Django
        </span>
        . These experiences have enhanced my proficiency in scalable software
        development and effective project management.
      </p>
    </motion.section>
  );
}
