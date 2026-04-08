'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER_TESTIMONIALS = [
  {
    name: "Sarah M.",
    suburb: "Orange",
    text: "Incredibly patient instructor. I was so nervous before my first lesson but felt completely at ease by the end. Passed first attempt!",
    stars: 5,
    initials: "SM",
    color: "#B91C1C",
  },
  {
    name: "Jake T.",
    suburb: "Spring Hill",
    text: "Booked the 10-lesson pack and it was absolutely worth it. Went from barely being able to park to confidently driving on highways.",
    stars: 5,
    initials: "JT",
    color: "#A07730",
  },
  {
    name: "Emily R.",
    suburb: "Canobolas",
    text: "Did a refresher course after not driving for 3 years. Within 2 lessons I felt completely confident again. Highly recommend!",
    stars: 5,
    initials: "ER",
    color: "#047857",
  },
];

export default function TestimonialPlaceholder() {
  return (
    <div className="flex flex-col gap-4">
      {PLACEHOLDER_TESTIMONIALS.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
        >
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: t.color }}
            >
              {t.initials}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white text-sm font-medium">{t.name}</span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-white/50 text-xs">{t.suburb}</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-[#A07730] text-xs">★</span>
                ))}
              </div>
              <p className="text-white/70 text-xs leading-relaxed">{t.text}</p>
            </div>
          </div>
        </motion.div>
      ))}

      <p className="text-white/30 text-xs text-center mt-2">
        — Placeholder testimonials — real reviews coming soon
      </p>
    </div>
  );
}
