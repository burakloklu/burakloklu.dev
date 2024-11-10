// hooks/useScrollSpy.ts

import { useEffect, useRef, useState } from 'react';

// Debounce function to prevent frequent URL updates
function debounce(func: Function, delay: number) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export function useScrollSpy(sectionIds: string[], targetSection: string | null) {
  const lastSectionId = useRef<string | null>(null);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

  useEffect(() => {
    // Debounced function to update the URL only after the scroll settles
    const debouncedUpdateURL = debounce((sectionId: string) => {
      // Avoid updating URL during programmatic scroll
      if (!isProgrammaticScroll && window.location.pathname !== `/${sectionId}`) {
        window.history.replaceState({}, '', `/${sectionId}`);
      }
    }, 100);

    const handleScroll = () => {
      if (isProgrammaticScroll) return; // Skip URL updates during programmatic scroll

      // Calculate distances of sections from viewport top
      const distances = sectionIds.map((id) => {
        const element = document.getElementById(id);
        if (!element) return { id, distance: Number.MAX_VALUE };
        const rect = element.getBoundingClientRect();
        return { id, distance: Math.abs(rect.top) };
      });

      // Find the closest section to the top of the viewport
      const closestSection = distances.reduce((prev, curr) =>
        curr.distance < prev.distance ? curr : prev
      );

      // Update URL if the closest section changes
      if (lastSectionId.current !== closestSection.id) {
        lastSectionId.current = closestSection.id;
        debouncedUpdateURL(closestSection.id);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call to set the correct URL on page load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, isProgrammaticScroll]);

  // Detect the end of programmatic (navbar-triggered) scroll
  useEffect(() => {
    if (targetSection) {
      setIsProgrammaticScroll(true); // Temporarily disable URL updates
      const element = document.getElementById(targetSection);
      element?.scrollIntoView({ behavior: 'smooth' });
      
      // Set timeout to re-enable URL updates after smooth scroll completes
      const timeoutId = setTimeout(() => {
        setIsProgrammaticScroll(false);
      }, 800); // Adjust duration to match scroll animation time

      return () => clearTimeout(timeoutId);
    }
  }, [targetSection]);
}
