'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import HeroCarAnimation from '@/components/HeroCarAnimation';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import TestimonialPlaceholder from '@/components/TestimonialPlaceholder';
import { COMPANY, STATS, SERVICES, PRICING_PACKAGES, WHY_GZ } from '@/lib/constants';

// Animated stat bar item
function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center gap-1 px-6 py-2"
    >
      <span className="text-2xl lg:text-3xl font-black text-white">{value}</span>
      <span className="text-white/70 text-xs lg:text-sm text-center">{label}</span>
    </motion.div>
  );
}

// Animated satisfaction bar
function SatisfactionBar({ label, percent, delay }: { label: string; percent: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between text-xs">
        <span className="text-white/70">{label}</span>
        <span className="text-white font-semibold">{percent}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ delay, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-[#B91C1C]"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true });

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column */}
            <div className="flex flex-col gap-6">
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[40px] border border-[#B91C1C]/20 bg-red-50 text-[#B91C1C] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#B91C1C] animate-pulse" />
                  Now accepting students — Orange NSW
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-tight tracking-tight"
              >
                Learn and drive<br />
                with{' '}
                <em className="text-[#B91C1C] not-italic">confidence.</em>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-500 text-lg leading-relaxed max-w-lg"
              >
                Professional driving instruction in Orange, NSW. Patient, experienced, and fully accredited — helping learners of all levels get road-ready.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/book"
                  className="inline-flex items-center px-6 py-3.5 rounded-[40px] bg-[#B91C1C] text-white font-semibold text-sm hover:bg-[#991B1B] transition-colors shadow-md hover:shadow-lg"
                >
                  Book your first lesson
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3.5 rounded-[40px] border-2 border-[#1a1a1a]/20 text-[#1a1a1a] font-semibold text-sm hover:border-[#B91C1C] hover:text-[#B91C1C] transition-colors"
                >
                  View services
                </Link>
              </motion.div>

              {/* Quick trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center gap-4 text-xs text-gray-400 pt-2"
              >
                <span className="flex items-center gap-1">
                  <span className="text-[#A07730]">★★★★★</span> 5.0 rated
                </span>
                <span className="w-px h-4 bg-[#E8E8E8]" />
                <span>97% pass rate</span>
                <span className="w-px h-4 bg-[#E8E8E8]" />
                <span>Pick-up included</span>
              </motion.div>
            </div>

            {/* Right column — animated car */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative h-[320px] lg:h-[400px]"
            >
              <HeroCarAnimation />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#B91C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">What we offer</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-[#1a1a1a] tracking-tight">
              Services for every stage
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re a complete beginner or returning after years off the road, we have the right lesson for you.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDesc}
                  href="/services"
                  compact
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#B91C1C] font-semibold text-sm hover:gap-3 transition-all"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Transparent pricing</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-[#1a1a1a] tracking-tight">
              Simple, honest pricing
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
              No hidden fees. Pick-up included. Save more when you commit to a pack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {PRICING_PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <PricingCard {...pkg} />
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            All prices include pick-up and drop-off within Orange. Packages never expire.{' '}
            <Link href="/pricing" className="text-[#B91C1C] underline">Full pricing details →</Link>
          </p>
        </div>
      </section>

      {/* ─── WHY GZ ─── */}
      <section ref={whyRef} className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

            {/* Left: copy */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Why choose us</span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-black text-[#1a1a1a] tracking-tight leading-snug">
                  We make learning to drive feel easy
                </h2>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Every student is different. We tailor each lesson to your current skill level, learning style, and goals — no cookie-cutter curriculums.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {WHY_GZ.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#B91C1C] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[#1a1a1a] text-sm leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#B91C1C] font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn more about us →
              </Link>
            </div>

            {/* Right: dark panel */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 flex flex-col gap-8">
              {/* Satisfaction bars */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">Student outcomes</h3>
                <div className="flex flex-col gap-5">
                  <SatisfactionBar label="First attempt pass rate" percent={97} delay={0.2} />
                  <SatisfactionBar label="Overall satisfaction" percent={99} delay={0.35} />
                  <SatisfactionBar label="Would recommend to a friend" percent={100} delay={0.5} />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Testimonials */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">What students say</h3>
                <TestimonialPlaceholder />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="bg-[#B91C1C] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Book your first lesson today — pick-up included. Give us a call or send a WhatsApp message on{' '}
              <a href={`tel:${COMPANY.phoneIntl}`} className="font-bold text-white underline">
                {COMPANY.phone}
              </a>
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[40px] bg-white text-[#B91C1C] font-semibold text-sm hover:bg-gray-50 transition-colors shadow-md"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp us
              </a>
              <a
                href={`tel:${COMPANY.phoneIntl}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[40px] border-2 border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                📞 {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
