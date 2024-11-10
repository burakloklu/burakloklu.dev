import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Burak Loklu',
  description: 'Bananas are a fruit, but they’re also a mood. Catch the vibe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-200 text-gray-950 relative pt-16 sm:pt-24`}>
        <ActiveSectionContextProvider>
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
      <GoogleAnalytics gaId="G-5PCQ2BM9HZ" />
    </html>
  );
}
