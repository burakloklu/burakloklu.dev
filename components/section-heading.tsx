import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`text-4xl text-red-700 font-medium mb-8 ${className || 'text-center'}`}>
      {children}
    </h2>
  );
}
