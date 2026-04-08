import type { Metadata } from 'next';
import Link from 'next/link';
import { PRICING_PACKAGES, COMPANY } from '@/lib/constants';
import PricingCard from '@/components/PricingCard';
import LessonCalculator from '@/components/LessonCalculator';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Pricing & Packages',
  description: `Transparent driving lesson pricing in Orange, NSW. Casual lessons from $80/hr or save with our 5 or 10-lesson packs. ${COMPANY.name} — ${COMPANY.phone}.`,
};

const PRICING_FAQS = [
  {
    question: 'What if I need to cancel or reschedule?',
    answer: 'We ask for at least 24 hours notice. Cancellations made with less than 24 hours notice may incur a 50% charge. We understand that life happens — just reach out as early as possible and we\'ll always try to find a solution.',
  },
  {
    question: 'Do lesson packages expire?',
    answer: 'No — your lesson pack never expires. Once purchased, you can use your lessons at any pace that suits you. Take a break for a few months and come back — your lessons will still be waiting.',
  },
  {
    question: 'Is pick-up and drop-off included?',
    answer: 'Yes — pick-up and drop-off is included in every lesson price, within the Orange service area. We\'ll come to your home, school, or workplace.',
  },
  {
    question: 'Can I use your car for the driving test?',
    answer: 'Yes, subject to availability. Many students prefer to use our Mazda 3 for the test since they\'re already familiar with it. There\'s an additional charge for vehicle use during the test itself — ask us for current pricing.',
  },
  {
    question: 'Can I mix services within a pack?',
    answer: 'Absolutely. You can use your lesson pack for any combination of services — for example, 3 learner lessons and 2 test-prep lessons from a 5-pack. Just let us know your goals and we\'ll build the right plan.',
  },
  {
    question: 'Do you offer gift vouchers?',
    answer: 'Yes! Driving lessons make a fantastic gift. Contact us directly to arrange a gift voucher for a friend or family member.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28 border-b border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-black text-[#1a1a1a] tracking-tight">
            Simple, honest pricing
          </h1>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            No hidden fees. Pick-up and drop-off always included. Save more when you commit to a lesson pack.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start mb-8">
            {PRICING_PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} {...pkg} />
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">
            All prices include pick-up and drop-off within Orange, NSW. Packages never expire. GST inclusive.
          </p>
        </div>
      </section>

      {/* What's included banner */}
      <section className="bg-[#FAFAF8] py-14 border-y border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚗', title: 'Pick-up included', desc: 'We come to you — home, school, or work.' },
              { icon: '🛡️', title: 'Dual-control car', desc: 'Mazda 3 with instructor controls for your safety.' },
              { icon: '📋', title: 'NSW logbook aligned', desc: 'Lessons structured to meet logbook requirements.' },
              { icon: '♾️', title: 'Packs never expire', desc: 'Use your lessons at your own pace, no rush.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-[#1a1a1a] text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Savings calculator</span>
            <h2 className="mt-3 text-3xl font-black text-[#1a1a1a] tracking-tight">
              See how much you save
            </h2>
            <p className="mt-3 text-gray-500 text-sm">
              Use the slider to calculate the best deal for the number of lessons you need.
            </p>
          </div>
          <LessonCalculator />
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Common questions</span>
            <h2 className="mt-3 text-3xl font-black text-[#1a1a1a] tracking-tight">
              Pricing questions answered
            </h2>
          </div>
          <FaqAccordion items={PRICING_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B91C1C] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to book?</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Call or WhatsApp us on{' '}
            <a href={`tel:${COMPANY.phoneIntl}`} className="font-bold text-white underline">{COMPANY.phone}</a>{' '}
            to get started, or fill in the booking form and we&apos;ll get back to you quickly.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/book"
              className="px-6 py-3 rounded-[40px] bg-white text-[#B91C1C] font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              Book online
            </Link>
            <a
              href={`tel:${COMPANY.phoneIntl}`}
              className="px-6 py-3 rounded-[40px] border-2 border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
