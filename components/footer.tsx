import React from 'react';
import usaFlag from '../public/usa_gray.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-4 block text-[#888] text-[0.9rem] font-serif">Copyright © 2024, Burak Loklu. All rights reserved.</small>
      <div className="flex justify-center items-center mb-2 text-xs">
        <span className="stars flex gap-4 space-x-1 text-[1rem] text-[#ccc]">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </span>
        <Image src={usaFlag} height={50} quality="95" priority={true} alt="American flag" className="mx-4" />
        <span className="stars flex gap-4 space-x-1 text-[1rem] text-[#ccc]">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </span>
      </div>
    </footer>
  );
}
