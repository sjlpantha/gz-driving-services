'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  compact?: boolean;
}

export default function ServiceCard({ icon, title, description, href = '/services', compact = false }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="group bg-white border border-[#E8E8E8] hover:border-[#FECACA] rounded-[14px] p-6 flex flex-col gap-4 transition-colors duration-200"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-2xl flex-shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-[#1a1a1a] text-lg leading-snug">{title}</h3>
        <p className={`text-gray-500 text-sm leading-relaxed ${compact ? 'line-clamp-3' : ''}`}>
          {description}
        </p>
      </div>

      {/* Link */}
      <Link
        href={href}
        className="text-[#B91C1C] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200 mt-auto"
      >
        Learn more
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
}
