import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, COMPANY } from '@/lib/constants';
import ServiceImage from '@/components/ServiceImage';

export const metadata: Metadata = {
  title: 'Driving Lesson Services',
  description: `Learner lessons, licence test prep, refresher lessons and defensive driving in Canberra, ACT. Professional instruction from ${COMPANY.name}. Call ${COMPANY.phone}.`,
};

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#B91C1C] flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="#FEF2F2" />
      <path d="M5 8l2 2 4-4" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a1a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-wider mb-5">
            Our Services
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Lessons for every level
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From your very first time behind the wheel through to licence-test preparation and beyond — we have a lesson that fits exactly where you are right now.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:gap-14">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                  i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex flex-col gap-5 ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-[#1a1a1a]">{service.title}</h2>
                  </div>

                  <p className="text-gray-500 leading-relaxed">{service.fullDesc}</p>

                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a] mb-3 uppercase tracking-wide">What&apos;s included</p>
                    <ul className="flex flex-col gap-2.5">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="text-[#A07730]">⏱</span>
                    <span>{service.duration}</span>
                  </div>

                  <Link
                    href="/book"
                    className="self-start inline-flex items-center px-6 py-3 rounded-[40px] bg-[#B91C1C] text-white font-semibold text-sm hover:bg-[#991B1B] transition-colors"
                  >
                    Book this service
                  </Link>
                </div>

                {/* Visual card — image with fallback */}
                <ServiceImage
                  id={service.id}
                  title={service.title}
                  icon={service.icon}
                  duration={service.duration}
                  flipped={i % 2 === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B91C1C] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Not sure which lesson to book?</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Give us a call or send a message — we&apos;ll recommend the right service based on your experience and goals.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-[40px] bg-white text-[#B91C1C] font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              WhatsApp us
            </a>
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
