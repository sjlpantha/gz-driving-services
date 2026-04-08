'use client';

import { useState } from 'react';

interface LogoImageProps {
  className?: string;
  inverted?: boolean;
}

export default function LogoImage({ className = 'h-10 w-auto object-contain', inverted = false }: LogoImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`flex items-center gap-1 font-bold text-lg ${inverted ? 'text-white' : 'text-[#1a1a1a]'}`}>
        <span className="text-[#B91C1C]">GZ</span>
        <span>Driving</span>
      </span>
    );
  }

  return (
    <img
      src="/logo.png"
      alt="GZ Driving Services"
      className={`${className} ${inverted ? 'brightness-0 invert' : ''}`}
      onError={() => setFailed(true)}
    />
  );
}
