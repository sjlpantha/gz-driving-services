import type { Metadata } from 'next';
import { COMPANY, SERVICE_AREAS } from '@/lib/constants';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Book a Driving Lesson',
  description: `Book a driving lesson with ${COMPANY.name} in Canberra, ACT. Fill in the form or call ${COMPANY.phone} to get started.`,
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFAF8] py-16 lg:py-20 border-b border-[#E8E8E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Get in touch</span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-black text-[#1a1a1a] tracking-tight">
            Book a lesson
          </h1>
          <p className="mt-5 text-gray-500 leading-relaxed max-w-xl mx-auto">
            Fill in the form below and we&apos;ll get back to you within a few hours to confirm your booking. For faster response, WhatsApp or call us directly.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Form — takes up 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Booking request form</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">

              {/* Quick contact */}
              <div className="bg-[#1a1a1a] rounded-[14px] p-6 flex flex-col gap-4">
                <h3 className="font-bold text-white text-lg">Prefer to call?</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  The fastest way to book is to call or WhatsApp us directly. We typically respond within minutes.
                </p>
                <a
                  href={`tel:${COMPANY.phoneIntl}`}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
                >
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-white font-bold text-lg">{COMPANY.phone}</p>
                    <p className="text-white/40 text-xs">Tap to call</p>
                  </div>
                </a>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl p-4 transition-colors"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg className="w-7 h-7 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="text-white font-bold">WhatsApp us</p>
                    <p className="text-white/70 text-xs">Chat with us now</p>
                  </div>
                </a>
              </div>

              {/* Service area */}
              <div className="bg-white border border-[#E8E8E8] rounded-[14px] p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-2 flex items-center gap-2">
                  <span>📍</span> Service area
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  We service Canberra and surrounding suburbs. Pick-up and drop-off is always included.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-red-50 text-[#B91C1C] text-xs font-medium rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  Not on the list? Give us a call — we&apos;ll usually accommodate.
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white border border-[#E8E8E8] rounded-[14px] p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                  <span>🕐</span> Availability
                </h3>
                <div className="flex flex-col gap-2 text-sm">
                  {[
                    { day: 'Monday – Friday', hours: '7:00 am – 7:00 pm' },
                    { day: 'Saturday', hours: '7:00 am – 5:00 pm' },
                    { day: 'Sunday', hours: '9:00 am – 3:00 pm' },
                  ].map((slot) => (
                    <div key={slot.day} className="flex justify-between">
                      <span className="text-gray-500">{slot.day}</span>
                      <span className="font-medium text-[#1a1a1a]">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
