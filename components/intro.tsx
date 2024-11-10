"use client";
import Image from "next/image";
import React from "react";
import portrait from "../public/portrait.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick, setHasExperienceAnimated } =
    useActiveSectionContext();

  function handleContactClick(name: SectionName) {
    return () => {
      setActiveSection(name);
      setTimeOfLastClick(Date.now());
      setHasExperienceAnimated(true);
    };
  }

  return (
    <section
      ref={ref}
      className="max-w-[50rem] text-center scroll-m-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portrait}
              alt="Burak portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stifness: 125,
              delay: 0.3,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Burak.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">5 years</span> of experience. I&apos;m
        passionate about{" "}
        <span className="font-semibold italic">turning ideas into reality</span>
        , and I love{" "}
        <span className="font-semibold underline">
          solving problems through code!
        </span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-sm font-medium sm:text-sm"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          className="group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="/contact"
          onClick={handleContactClick("Contact")}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group flex items-center bg-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/Burak_Loklu_Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="flex items-center bg-white text-gray-700 text-[1rem] p-3 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://linkedin.com/in/burakloklu"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
