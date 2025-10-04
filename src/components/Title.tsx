import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className = '' }: TitleProps) {
  return (
    <div className={`text-6xl md:text-7xl mb-4 ${className}`} style={{ fontFamily: 'var(--font-dm-serif), serif' }}>
      {children}
    </div>
  );
}
