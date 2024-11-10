'use client';

import Home from '../page';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // Adjust delay if needed

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount
  }, []);

  return <Home />;
}
