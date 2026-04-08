import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQS, COMPANY } from '@/lib/constants';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: `Common questions about driving lessons with ${COMPANY.name} in Orange, NSW. How many lessons, what car, pick-up, test day and more.`,
};

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-wider mb-5">
            FAQ
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Frequently asked questions
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Everything you need to know before booking your first lesson.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-white border-t border-[#E8E8E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-3">Still have a question?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Reach out directly — we&apos;re happy to help.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-[40px] bg-[#B91C1C] text-white font-semibold text-sm hover:bg-[#991B1B] transition-colors"
            >
              WhatsApp us
            </a>
            <a
              href={`tel:${COMPANY.phoneIntl}`}
              className="px-6 py-3 rounded-[40px] border-2 border-[#E8E8E8] text-[#1a1a1a] font-semibold text-sm hover:border-[#B91C1C] hover:text-[#B91C1C] transition-colors"
            >
              {COMPANY.phone}
            </a>
            <Link
              href="/book"
              className="px-6 py-3 rounded-[40px] border-2 border-[#E8E8E8] text-[#1a1a1a] font-semibold text-sm hover:border-[#B91C1C] hover:text-[#B91C1C] transition-colors"
            >
              Book a lesson
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
