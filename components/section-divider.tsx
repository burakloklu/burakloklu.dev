'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className='min-w-[100%] justify-items-center'>
      <motion.div
        className="dark:bg-[#ffffff33] bg-gray-300 sm:bg-gray-200  mt-12 mb-32 h-12 w-1 rounded-full sm:block sm:my-32 mr-auto ml-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
    </div>
  );
}
