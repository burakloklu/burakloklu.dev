// app/page.tsx

'use client';
import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import { useEffect, useState } from 'react';
import { useScrollSpy } from '@/lib/useScrollSpy';
import Navbar from '@/components/navbar';
import { sendGAEvent } from '@next/third-parties/google';

export default function Home() {
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useScrollSpy(['about', 'projects', 'skills', 'experience', 'contact'], targetSection);

  // Navbar click handler
  const handleNavClick = (section: string) => {
    setTargetSection(section); // This prevents URL update during programmatic scroll
  };

  useEffect(() => {
    let hasFired50 = false;
    let hasFired75 = false;

    const handleScroll = () => {
      const scrollDepth = (window.scrollY / document.documentElement.scrollHeight) * 100;

      // Tracking scroll depth events at 50% and 75%
      if (scrollDepth > 50 && !hasFired50) {
        sendGAEvent('event', 'scrollDepth', {
          event_category: 'Engagement',
          event_label: '50% Scrolled',
        });
        hasFired50 = true;
      }
      if (scrollDepth > 75 && !hasFired75) {
        sendGAEvent('event', 'scrollDepth', {
          event_category: 'Engagement',
          event_label: '75% Scrolled',
        });
        hasFired75 = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      <main className="flex dark:bg-gray-900 bg-slate-200 justify-center py-10">
        <div className="dark:bg-gray-800 sm:bg-slate-100 sm:w-4/5 sm:p-8 sm:max-w-4xl p-4 sm:shadow-md rounded-lg justify-items-center sm:font-[Arial]">
          <div id="about">
            <About />
          </div>
          <SectionDivider />
          <div id="experience">
            <Experience />
          </div>
          <SectionDivider />
          <div id="projects">
            <Projects />
          </div>
          <SectionDivider />
          <div id="skills">
            <Skills />
          </div>
          <SectionDivider />
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}
