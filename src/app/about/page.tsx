import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Our Instructor',
  description: `Meet the team behind ${COMPANY.name}. Professional, accredited driving instructor based in Canberra, ACT with years of experience helping learners pass their test.`,
};

const VEHICLE_FEATURES = [
  { icon: '🔄', label: 'Dual controls', desc: 'Instructor brake and accelerator for maximum safety' },
  { icon: '🪟', label: 'Great visibility', desc: 'Large windows and mirrors for clear all-round awareness' },
  { icon: '🔧', label: 'Regular servicing', desc: 'Maintained to manufacturer standards for reliability' },
  { icon: '❄️', label: 'Air conditioning', desc: 'Comfortable year-round in all Central West weather' },
  { icon: '📱', label: 'Modern tech', desc: 'Reversing camera and modern safety features' },
  { icon: '✅', label: 'Full insurance', desc: 'Fully insured for learner driver use' },
];

const GZ_DIFFERENCE = [
  {
    icon: '🎯',
    title: 'Goal-focused lessons',
    desc: 'Every lesson has a clear objective. We track your progress against the ACT logbook requirements so you always know where you stand.',
  },
  {
    icon: '🤝',
    title: 'Patient by nature',
    desc: 'We never raise our voice, never show frustration, and never make you feel rushed. Learning to drive is stressful enough on its own.',
  },
  {
    icon: '📍',
    title: 'Local knowledge',
    desc: 'We know every roundabout, intersection, and tricky merge lane in Canberra. You\'ll be coached on exactly what you\'ll face on test day.',
  },
  {
    icon: '🏆',
    title: 'Track record of success',
    desc: '97% of our students pass their driving test on the first attempt — well above the ACT state average.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFAF8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Instructor photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-red-100 to-red-50">
                  <img
                    src="/instructor.jpg"
                    alt="Prabin Maharjan — GZ Driving Services"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#B91C1C] rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                  <span className="text-lg font-black">5yr</span>
                  <span className="text-xs opacity-80">exp.</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Meet your instructor</span>
                <h1 className="mt-2 text-3xl lg:text-4xl font-black text-[#1a1a1a] tracking-tight">
                  Prabin Maharjan
                </h1>
                <p className="text-gray-500 text-sm mt-1">Accredited Driving Instructor · Canberra, ACT</p>
              </div>

              <p className="text-gray-500 leading-relaxed">
                With over 5 years of professional driving instruction experience in Canberra and the surrounding ACT region, I&apos;ve helped hundreds of learners go from nervous first-timers to confident, safe drivers.
              </p>
              <p className="text-gray-500 leading-relaxed">
                My approach is simple: calm, patient, and structured. I believe every student learns differently, and I adapt each lesson to meet you exactly where you are — never pushing faster than you&apos;re ready to go.
              </p>

              {/* Credentials */}
              <div className="flex flex-col gap-2.5">
                {[
                  'ACT Government Accredited Driving Instructor',
                  'First Aid Certified',
                  '5+ years professional instruction experience',
                  '500+ lessons delivered',
                  'Local to Canberra, ACT — knows every test route',
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-2.5 text-sm text-[#1a1a1a]">
                    <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-[#B91C1C] text-xs font-bold flex-shrink-0">✓</span>
                    {cred}
                  </div>
                ))}
              </div>

              <Link
                href="/book"
                className="self-start mt-2 px-6 py-3 rounded-[40px] bg-[#B91C1C] text-white font-semibold text-sm hover:bg-[#991B1B] transition-colors"
              >
                Book a lesson with us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="bg-white py-16 lg:py-20 border-y border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Teaching philosophy</span>
          <blockquote className="mt-6 text-2xl lg:text-3xl font-bold text-[#1a1a1a] leading-snug tracking-tight">
            &ldquo;A good driving instructor doesn&apos;t just teach you how to pass a test — they teach you how to stay safe for the rest of your life.&rdquo;
          </blockquote>
          <p className="mt-4 text-gray-400 text-sm">— GZ Driving Services</p>
        </div>
      </section>

      {/* The GZ Difference */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Why GZ</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-[#1a1a1a] tracking-tight">
              The GZ difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GZ_DIFFERENCE.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#E8E8E8] hover:border-[#FECACA] rounded-[14px] p-6 flex gap-4 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle showcase */}
      <section className="py-20 lg:py-28 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Copy */}
            <div className="flex flex-col gap-5">
              <span className="text-[#A07730] text-sm font-semibold uppercase tracking-wider">Our vehicle</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                Dual-control Mazda 3
              </h2>
              <p className="text-white/60 leading-relaxed">
                Our training vehicle is a modern, well-maintained Mazda 3 hatchback — the same style of car you&apos;ll encounter in everyday driving. It&apos;s fitted with dual controls, meaning the instructor always has access to a brake and accelerator pedal, keeping you safe at all times.
              </p>
              <p className="text-white/60 leading-relaxed">
                The Mazda 3 is widely regarded as one of the best learner vehicles: it&apos;s easy to drive, has excellent visibility, and behaves predictably in all conditions.
              </p>
              <Link
                href="/book"
                className="self-start px-6 py-3 rounded-[40px] bg-[#B91C1C] text-white font-semibold text-sm hover:bg-[#991B1B] transition-colors"
              >
                Book your first lesson
              </Link>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {VEHICLE_FEATURES.map((feature) => (
                <div
                  key={feature.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <p className="text-white font-semibold text-sm">{feature.label}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
