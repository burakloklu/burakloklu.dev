'use client';
import React, { createContext, useContext, useState } from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveContextContextType = {
  activeSection: SectionName | ''; // Allow empty string as initial state
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName | ''>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  hasExperienceAnimated: boolean;
  setHasExperienceAnimated: React.Dispatch<React.SetStateAction<boolean>>;
};

const ActiveSectionContext = createContext<ActiveContextContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName | ''>(''); // Set as empty string initially
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const [hasExperienceAnimated, setHasExperienceAnimated] = useState(false);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        hasExperienceAnimated,
        setHasExperienceAnimated,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionContextProvider'
    );
  }
  return context;
}
