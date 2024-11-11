'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { sendGAEvent } from '@next/third-parties/google';

type SectionName = (typeof links)[number]['name'];
type NavbarProps = {
  onNavClick: (section: string) => void;
};

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isMounted, setIsMounted] = useState(false);

  const { activeSection, setActiveSection, setTimeOfLastClick, setHasExperienceAnimated } = useActiveSectionContext();

  // Set the flag after the component is mounted to indicate it's safe to use client-side-only features.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing until the component is mounted
  }

  function handleClick(name: SectionName) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault(); // Prevent the default behavior of <a> which causes a refresh
      onNavClick(name.toLowerCase()); // Call the click handler from page.tsx

      const route = `/${name.toLowerCase()}`;

      // Update the browser's URL without refreshing the page
      window.history.pushState({}, '', route);

      setActiveSection(name);
      setTimeOfLastClick(Date.now());
      setHasExperienceAnimated(true);

      // Smooth scrolling to the section
      document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

      sendGAEvent('event', 'navbarClick', {
        event_category: 'Navigation',
        event_label: name,
      });
    };
  }

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <a
                href={link.hash} // Keep <a> for SEO and accessibility
                onClick={handleClick(link.name)}
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300',
                  {
                    'text-gray-950 dark:text-gray-200': activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
