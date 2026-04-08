import Link from 'next/link';
import { COMPANY, NAV_LINKS } from '@/lib/constants';
import LogoImage from '@/components/LogoImage';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <LogoImage className="h-10 w-auto object-contain" inverted />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
            <p className="text-gray-400 text-sm mt-2">{COMPANY.location}</p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/book" className="text-gray-400 hover:text-white text-sm transition-colors">
                Book a Lesson
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${COMPANY.phoneIntl}`}
                className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <span>📞</span> {COMPANY.phone}
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <span>💬</span> WhatsApp us
              </a>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <span>📍</span> {COMPANY.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Licensed driving instructor · Canberra, ACT · Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
