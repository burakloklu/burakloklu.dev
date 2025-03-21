// hooks.ts

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });

  const {
    setActiveSection,
    setHasExperienceAnimated,
    timeOfLastClick,
    hasExperienceAnimated,
  } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);

      // Remove the history update to prevent URL manipulation
      if (sectionName === "Experience") {
        setHasExperienceAnimated(true);
      }
    }
  }, [inView, setActiveSection, hasExperienceAnimated, sectionName, timeOfLastClick]);

  return { ref, inView, hasExperienceAnimated };
}
