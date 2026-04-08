'use client';

import { useState } from 'react';

interface ServiceImageProps {
  id: string;
  title: string;
  icon: string;
  duration: string;
  flipped: boolean;
}

export default function ServiceImage({ id, title, icon, duration, flipped }: ServiceImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`rounded-[14px] overflow-hidden min-h-[300px] lg:min-h-[360px] relative ${
        flipped ? 'lg:col-start-1' : ''
      } ${failed ? 'bg-gradient-to-br from-red-50 to-red-100' : 'bg-red-50'}`}
    >
      {!failed && (
        <img
          src={`/services/${id}.png`}
          alt={title}
          className="w-full h-full object-cover absolute inset-0"
          onError={() => setFailed(true)}
        />
      )}

      {/* Fallback shown when image missing */}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          <div className="w-20 h-20 rounded-2xl bg-white/70 flex items-center justify-center text-5xl shadow-sm">
            {icon}
          </div>
          <p className="text-[#B91C1C] font-semibold text-center text-sm opacity-60">
            Add photo: public/services/{id}.png
          </p>
        </div>
      )}

      {/* Overlay label — always shown */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-5">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="text-white font-bold">{title}</span>
        </div>
        <div className="mt-1 px-3 py-0.5 inline-block rounded-full bg-[#B91C1C] text-white text-xs font-medium">
          {duration}
        </div>
      </div>
    </div>
  );
}
