'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function HeroCarAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Car moves from left (-60px) to right (+60px) as user scrolls 0→400px
  const x = useTransform(scrollY, [0, 400], [-60, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Warm grid background */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundImage: `
            linear-gradient(rgba(176,28,28,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(176,28,28,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundColor: '#FEF2F2',
        }}
      />

      {/* Road line */}
      <div className="absolute bottom-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8E8E8] to-transparent" />
      <div className="absolute bottom-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FECACA] to-transparent" />

      {/* Animated car */}
      <motion.div
        style={{ x, opacity }}
        className="relative z-10 drop-shadow-2xl"
      >
        <CarSVG />
      </motion.div>

      {/* L plate badge */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-white border-2 border-[#B91C1C] rounded-lg flex items-center justify-center shadow-md">
        <span className="text-[#B91C1C] font-black text-lg leading-none">L</span>
      </div>
    </div>
  );
}

function CarSVG() {
  return (
    <svg
      width="340"
      height="160"
      viewBox="0 0 340 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[340px]"
    >
      {/* Shadow */}
      <ellipse cx="170" cy="148" rx="130" ry="8" fill="#1a1a1a" opacity="0.12" />

      {/* Body */}
      <path
        d="M30 100 C30 100 50 100 60 98 L80 55 C85 45 95 38 120 36 L210 34 C235 34 250 42 262 55 L278 88 C290 90 305 95 310 100 L310 118 C310 122 306 126 302 126 L38 126 C34 126 30 122 30 118 Z"
        fill="#B91C1C"
      />

      {/* Roof highlight */}
      <path
        d="M90 55 C95 45 105 40 125 38 L205 36 C228 36 242 44 252 55 L88 56 Z"
        fill="#991B1B"
      />

      {/* Windscreen */}
      <path
        d="M100 58 C105 48 115 42 130 40 L205 38 C225 38 238 46 248 58 Z"
        fill="#BFDBFE"
        opacity="0.85"
      />

      {/* Side windows */}
      <rect x="145" y="42" width="50" height="36" rx="4" fill="#BFDBFE" opacity="0.85" />
      <rect x="100" y="44" width="38" height="32" rx="4" fill="#BFDBFE" opacity="0.85" />

      {/* Door lines */}
      <line x1="143" y1="50" x2="143" y2="105" stroke="#991B1B" strokeWidth="1.5" />
      <line x1="200" y1="50" x2="200" y2="105" stroke="#991B1B" strokeWidth="1.5" />

      {/* GZ DRIVING text on body */}
      <text
        x="155"
        y="96"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="700"
        fontFamily="Inter, Arial, sans-serif"
        letterSpacing="1"
        opacity="0.9"
      >
        GZ DRIVING
      </text>

      {/* Front bumper detail */}
      <rect x="280" y="102" width="28" height="18" rx="4" fill="#991B1B" />
      <rect x="285" y="106" width="12" height="8" rx="2" fill="#FCD34D" opacity="0.9" />

      {/* Rear bumper detail */}
      <rect x="32" y="102" width="28" height="18" rx="4" fill="#991B1B" />
      <rect x="35" y="106" width="10" height="8" rx="2" fill="#FCA5A5" opacity="0.9" />

      {/* Front wheel arch + wheel */}
      <ellipse cx="255" cy="128" rx="22" ry="22" fill="#1a1a1a" />
      <ellipse cx="255" cy="128" rx="16" ry="16" fill="#374151" />
      <ellipse cx="255" cy="128" rx="8" ry="8" fill="#6B7280" />
      <ellipse cx="255" cy="128" rx="3" ry="3" fill="#9CA3AF" />

      {/* Rear wheel arch + wheel */}
      <ellipse cx="90" cy="128" rx="22" ry="22" fill="#1a1a1a" />
      <ellipse cx="90" cy="128" rx="16" ry="16" fill="#374151" />
      <ellipse cx="90" cy="128" rx="8" ry="8" fill="#6B7280" />
      <ellipse cx="90" cy="128" rx="3" ry="3" fill="#9CA3AF" />

      {/* Wheel spoke lines front */}
      <line x1="255" y1="112" x2="255" y2="144" stroke="#9CA3AF" strokeWidth="1.5" />
      <line x1="239" y1="128" x2="271" y2="128" stroke="#9CA3AF" strokeWidth="1.5" />
      <line x1="244" y1="117" x2="266" y2="139" stroke="#9CA3AF" strokeWidth="1.5" />
      <line x1="244" y1="139" x2="266" y2="117" stroke="#9CA3AF" strokeWidth="1.5" />

      {/* Wheel spoke lines rear */}
      <line x1="90" y1="112" x2="90" y2="144" stroke="#9CA3AF" strokeWidth="1.5" />
      <line x1="74" y1="128" x2="106" y2="128" stroke="#9CA3AF" strokeWidth="1.5" />
      <line x1="79" y1="117" x2="101" y2="139" stroke="#9CA3AF" strokeWidth="1.5" />
      <line x1="79" y1="139" x2="101" y2="117" stroke="#9CA3AF" strokeWidth="1.5" />

      {/* Side mirror */}
      <path d="M274 76 L282 72 L285 80 L274 82 Z" fill="#991B1B" />

      {/* Roof antenna */}
      <line x1="190" y1="34" x2="190" y2="22" stroke="#991B1B" strokeWidth="2" />
      <circle cx="190" cy="21" r="2" fill="#991B1B" />
    </svg>
  );
}
