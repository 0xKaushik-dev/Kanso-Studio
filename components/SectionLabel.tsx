import React from 'react';

interface SectionLabelProps {
  number: string;
  title: string;
  className?: string;
  dark?: boolean;
}

export default function SectionLabel({ number, title, className = "", dark = false }: SectionLabelProps) {
  return (
    <div className={`flex justify-between items-center w-full mb-6 md:mb-12 text-sm font-medium tracking-wide ${dark ? 'text-gray-400' : 'text-gray-500'} ${className}`}>
      <span>/ {title}</span>
      <span>({number})</span>
    </div>
  );
}