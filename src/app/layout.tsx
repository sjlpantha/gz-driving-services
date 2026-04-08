import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { COMPANY } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gzdrivingservices.com.au'),
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `Professional driving lessons in Canberra, ACT. Patient, experienced instructor offering learner lessons, licence test prep, refresher lessons and defensive driving. Call ${COMPANY.phone}.`,
  keywords: ['driving lessons Canberra ACT', 'driving instructor Canberra', 'learner driver Canberra', 'driving school Canberra ACT', 'GZ Driving Services'],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://gzdrivingservices.com.au',
    siteName: COMPANY.name,
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: `Professional driving lessons in Canberra, ACT. Patient, experienced instructor. Call ${COMPANY.phone}.`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: `Professional driving lessons in Canberra, ACT. Call ${COMPANY.phone}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="bg-[#FAFAF8] text-[#1a1a1a] font-sans antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
