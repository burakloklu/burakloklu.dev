// app/page.tsx

'use client';
import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useScrollSpy } from '@/lib/useScrollSpy';
import Navbar from '@/components/navbar';

export default function Home() {
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useScrollSpy(['about', 'projects', 'skills', 'experience', 'contact'], targetSection);

  // Navbar click handler
  const handleNavClick = (section: string) => {
    setTargetSection(section); // This prevents URL update during programmatic scroll
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      <main className="flex bg-slate-200 justify-center py-10">
        <div className="sm:bg-slate-100 sm:w-4/5 sm:p-8 sm:max-w-4xl p-4 sm:shadow-md rounded-lg justify-items-center sm:font-[Arial]">
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
