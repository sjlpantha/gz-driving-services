'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function HeroCarAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [0, 400], [-50, 50]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0.6]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundImage: `
            linear-gradient(rgba(185,28,28,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185,28,28,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          backgroundColor: '#FEF2F2',
        }}
      />

      {/* Road */}
      <div className="absolute bottom-10 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#D1D5DB] to-transparent rounded-full" />
      <div className="absolute bottom-8 left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent rounded-full" />

      {/* Animated car */}
      <motion.div style={{ x, opacity }} className="relative z-10">
        <ModernCarSVG />
      </motion.div>

      {/* L plate */}
      <div className="absolute top-5 right-5 w-9 h-9 bg-white border-[3px] border-[#B91C1C] rounded-md flex items-center justify-center shadow-md">
        <span className="text-[#B91C1C] font-black text-base leading-none">L</span>
      </div>
    </div>
  );
}

function ModernCarSVG() {
  return (
    <svg
      viewBox="0 0 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[460px] drop-shadow-xl"
    >
      {/* ── Shadow ── */}
      <ellipse cx="250" cy="186" rx="185" ry="10" fill="#1a1a1a" opacity="0.10" />

      {/* ── Body lower (sill) ── */}
      <rect x="55" y="130" width="390" height="28" rx="6" fill="#991B1B" />

      {/* ── Main body ── */}
      <path
        d="
          M 70 130
          L 60 105
          L 72 105
          L 95 62
          C 102 50 115 42 132 40
          L 310 38
          C 338 38 358 48 372 62
          L 408 105
          L 440 105
          L 440 130
          Z
        "
        fill="#B91C1C"
      />

      {/* ── Roof (darker) ── */}
      <path
        d="M 110 105 L 128 63 C 134 52 146 44 160 42 L 308 40 C 332 40 350 50 362 63 L 390 105 Z"
        fill="#9B1616"
      />

      {/* ── Windscreen ── */}
      <path
        d="M 123 103 L 140 65 C 145 55 155 48 168 46 L 255 45 L 255 103 Z"
        fill="#BFDBFE"
        opacity="0.88"
      />
      {/* Windscreen glare */}
      <path d="M 133 95 L 148 62 C 152 54 160 49 170 47 L 185 47 L 165 95 Z" fill="white" opacity="0.18" />

      {/* ── Rear window ── */}
      <path
        d="M 260 45 L 305 45 C 328 45 345 53 356 65 L 378 103 L 260 103 Z"
        fill="#BFDBFE"
        opacity="0.88"
      />
      <path d="M 370 95 L 352 63 C 347 55 340 49 330 47 L 310 46 L 350 95 Z" fill="white" opacity="0.18" />

      {/* ── Side window divider ── */}
      <rect x="252" y="45" width="4" height="58" rx="2" fill="#9B1616" />

      {/* ── Door line ── */}
      <line x1="255" y1="110" x2="255" y2="138" stroke="#991B1B" strokeWidth="2" />

      {/* ── GZ DRIVING text ── */}
      <text
        x="250"
        y="124"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter, Arial, sans-serif"
        letterSpacing="2"
        opacity="0.92"
      >
        GZ DRIVING
      </text>

      {/* ── Front bumper ── */}
      <path d="M 430 105 L 445 108 L 445 130 L 430 130 Z" fill="#7F1D1D" />
      <rect x="432" y="110" width="14" height="7" rx="2" fill="#FCD34D" opacity="0.9" /> {/* headlight */}
      <rect x="432" y="119" width="8" height="4" rx="1" fill="#FCA5A5" opacity="0.7" /> {/* DRL */}

      {/* ── Rear bumper ── */}
      <path d="M 70 105 L 55 108 L 55 130 L 70 130 Z" fill="#7F1D1D" />
      <rect x="54" y="110" width="14" height="7" rx="2" fill="#FCA5A5" opacity="0.9" /> {/* tail light */}
      <rect x="57" y="119" width="8" height="4" rx="1" fill="#F87171" opacity="0.7" />

      {/* ── Door handle front ── */}
      <rect x="305" y="116" width="22" height="5" rx="2.5" fill="#7F1D1D" />
      {/* ── Door handle rear ── */}
      <rect x="173" y="116" width="22" height="5" rx="2.5" fill="#7F1D1D" />

      {/* ── Side mirror ── */}
      <path d="M 402 88 L 416 83 L 418 95 L 402 97 Z" fill="#7F1D1D" />
      <rect x="404" y="86" width="10" height="8" rx="2" fill="#93C5FD" opacity="0.6" />

      {/* ── Roof antenna ── */}
      <line x1="330" y1="38" x2="333" y2="20" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="333" cy="19" r="2.5" fill="#B91C1C" />

      {/* ── Front wheel ── */}
      <circle cx="358" cy="158" r="32" fill="#111827" />
      <circle cx="358" cy="158" r="24" fill="#1F2937" />
      <circle cx="358" cy="158" r="13" fill="#374151" />
      <circle cx="358" cy="158" r="5" fill="#6B7280" />
      {/* spokes */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1={358 + 6 * Math.cos((deg * Math.PI) / 180)}
          y1={158 + 6 * Math.sin((deg * Math.PI) / 180)}
          x2={358 + 22 * Math.cos((deg * Math.PI) / 180)}
          y2={158 + 22 * Math.sin((deg * Math.PI) / 180)}
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}

      {/* ── Rear wheel ── */}
      <circle cx="142" cy="158" r="32" fill="#111827" />
      <circle cx="142" cy="158" r="24" fill="#1F2937" />
      <circle cx="142" cy="158" r="13" fill="#374151" />
      <circle cx="142" cy="158" r="5" fill="#6B7280" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1={142 + 6 * Math.cos((deg * Math.PI) / 180)}
          y1={158 + 6 * Math.sin((deg * Math.PI) / 180)}
          x2={142 + 22 * Math.cos((deg * Math.PI) / 180)}
          y2={158 + 22 * Math.sin((deg * Math.PI) / 180)}
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}

      {/* ── Tyre highlight ── */}
      <path d="M 370 140 A 32 32 0 0 1 387 165" stroke="white" strokeWidth="2" opacity="0.12" strokeLinecap="round" />
      <path d="M 154 140 A 32 32 0 0 1 171 165" stroke="white" strokeWidth="2" opacity="0.12" strokeLinecap="round" />
    </svg>
  );
}
