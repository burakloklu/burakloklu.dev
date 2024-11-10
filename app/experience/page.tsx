// app/experience/page.tsx
'use client';

import Home from '../page';
import { useEffect } from 'react';

export default function ExperiencePage() {
  useEffect(() => {
    // Scroll to the "experience" section after a short delay
    const timeoutId = setTimeout(() => {
      const element = document.getElementById('experience');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // Adjust delay if needed

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount
  }, []);

  return <Home />;
}
