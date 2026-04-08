'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY } from '@/lib/constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  preferredTime: string;
  message: string;
}

const TIME_OPTIONS = [
  'Weekday morning (8am–12pm)',
  'Weekday afternoon (12pm–5pm)',
  'Weekday evening (5pm–7pm)',
  'Saturday morning',
  'Saturday afternoon',
  'Sunday morning',
  'Sunday afternoon',
  'Flexible – any time',
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', suburb: '', preferredTime: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-[#E8E8E8] rounded-[14px] p-8 lg:p-12 flex flex-col items-center text-center gap-4"
        >
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl mb-2">
            ✅
          </div>
          <h3 className="text-xl font-bold text-[#1a1a1a]">Request sent!</h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Thanks {form.name.split(' ')[0]}! We&apos;ll be in touch within a few hours. For faster response, WhatsApp us directly on{' '}
            <a href={COMPANY.whatsapp} className="text-[#B91C1C] font-medium">{COMPANY.phone}</a>.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', suburb: '', preferredTime: '', message: '' }); }}
            className="mt-2 text-sm text-gray-400 hover:text-[#B91C1C] transition-colors underline"
          >
            Submit another request
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="bg-white border border-[#E8E8E8] rounded-[14px] p-6 lg:p-8 flex flex-col gap-5"
        >
          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#1a1a1a]">Full name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Jane Smith"
                className="px-4 py-3 rounded-xl border border-[#E8E8E8] focus:border-[#B91C1C] focus:outline-none text-sm text-[#1a1a1a] placeholder:text-gray-300 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#1a1a1a]">Phone number *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="0400 000 000"
                className="px-4 py-3 rounded-xl border border-[#E8E8E8] focus:border-[#B91C1C] focus:outline-none text-sm text-[#1a1a1a] placeholder:text-gray-300 transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1a1a1a]">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@email.com"
              className="px-4 py-3 rounded-xl border border-[#E8E8E8] focus:border-[#B91C1C] focus:outline-none text-sm text-[#1a1a1a] placeholder:text-gray-300 transition-colors"
            />
          </div>

          {/* Suburb + Preferred time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#1a1a1a]">Preferred area / suburb *</label>
              <input
                type="text"
                name="suburb"
                value={form.suburb}
                onChange={handleChange}
                required
                placeholder="e.g. Orange CBD"
                className="px-4 py-3 rounded-xl border border-[#E8E8E8] focus:border-[#B91C1C] focus:outline-none text-sm text-[#1a1a1a] placeholder:text-gray-300 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#1a1a1a]">Preferred day / time</label>
              <select
                name="preferredTime"
                value={form.preferredTime}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-[#E8E8E8] focus:border-[#B91C1C] focus:outline-none text-sm text-[#1a1a1a] transition-colors bg-white"
              >
                <option value="">Select a time...</option>
                {TIME_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1a1a1a]">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your experience level, which service you're interested in, or any questions you have..."
              className="px-4 py-3 rounded-xl border border-[#E8E8E8] focus:border-[#B91C1C] focus:outline-none text-sm text-[#1a1a1a] placeholder:text-gray-300 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 py-3.5 px-8 rounded-[40px] bg-[#B91C1C] text-white font-semibold text-sm hover:bg-[#991B1B] disabled:opacity-60 transition-all duration-200 shadow-sm"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                </svg>
                Sending...
              </>
            ) : (
              'Send booking request'
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
