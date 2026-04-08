'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PricingCardProps {
  name: string;
  price: number;
  per: string;
  originalPrice: number | null;
  savings: number | null;
  badge: string | null;
  featured: boolean;
  description: string;
  features: string[];
  cta: string;
}

export default function PricingCard({
  name, price, per, originalPrice, savings, badge, featured, description, features, cta,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative flex flex-col rounded-[14px] p-6 lg:p-8 border-2 transition-all duration-200 ${
        featured
          ? 'border-[#B91C1C] shadow-xl shadow-red-100 bg-white'
          : 'border-[#E8E8E8] hover:border-[#FECACA] bg-white shadow-sm'
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-[#B91C1C] text-white text-xs font-semibold rounded-full shadow-sm whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      {/* Gold badge (best value) */}
      {badge && (
        <div className="absolute -top-3.5 right-6">
          <span className="px-3 py-1 bg-[#A07730] text-white text-xs font-semibold rounded-full shadow-sm whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}

      {/* Name */}
      <p className="text-sm font-semibold text-[#A07730] uppercase tracking-wider mb-3">{name}</p>

      {/* Price */}
      <div className="flex items-end gap-2 mb-1">
        <span className={`text-4xl font-black ${featured ? 'text-[#B91C1C]' : 'text-[#1a1a1a]'}`}>
          ${price}
        </span>
        <span className="text-gray-400 text-sm mb-1">{per}</span>
      </div>

      {/* Strike-through + savings */}
      {originalPrice && savings && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-400 text-sm line-through">${originalPrice}</span>
          <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
            Save ${savings}
          </span>
        </div>
      )}

      <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]">
            <span className="text-[#B91C1C] mt-0.5 flex-shrink-0">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/book"
        className={`w-full flex items-center justify-center py-3 px-6 rounded-[40px] font-semibold text-sm transition-all duration-200 ${
          featured
            ? 'bg-[#B91C1C] text-white hover:bg-[#991B1B] shadow-md'
            : 'border-2 border-[#B91C1C] text-[#B91C1C] hover:bg-[#B91C1C] hover:text-white'
        }`}
      >
        {cta}
      </Link>
    </motion.div>
  );
}
