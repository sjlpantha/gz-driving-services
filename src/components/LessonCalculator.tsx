'use client';

import { useState } from 'react';

const CASUAL_RATE = 80;
const PACK_5_PRICE = 340;
const PACK_10_PRICE = 640;

function getBestDeal(hours: number) {
  const casualTotal = hours * CASUAL_RATE;

  if (hours <= 0) return { total: 0, savings: 0, label: '', perHour: 0 };

  if (hours <= 4) {
    return {
      total: casualTotal,
      savings: 0,
      label: 'Casual lessons',
      perHour: CASUAL_RATE,
      suggestion: null,
    };
  }

  if (hours <= 9) {
    const packs5 = Math.ceil(hours / 5);
    const packTotal = packs5 * PACK_5_PRICE;
    const savings = casualTotal - packTotal;
    return {
      total: packTotal,
      savings: Math.max(0, savings),
      label: `${packs5} × 5-lesson pack${packs5 > 1 ? 's' : ''}`,
      perHour: Math.round(packTotal / (packs5 * 5)),
      suggestion: `${packs5 * 5} hours included`,
    };
  }

  const packs10 = Math.ceil(hours / 10);
  const packTotal = packs10 * PACK_10_PRICE;
  const savings = casualTotal - packTotal;
  return {
    total: packTotal,
    savings: Math.max(0, savings),
    label: `${packs10} × 10-lesson pack${packs10 > 1 ? 's' : ''}`,
    perHour: Math.round(packTotal / (packs10 * 10)),
    suggestion: `${packs10 * 10} hours included`,
  };
}

export default function LessonCalculator() {
  const [hours, setHours] = useState(5);
  const deal = getBestDeal(hours);

  return (
    <div className="bg-white border border-[#E8E8E8] rounded-[14px] p-6 lg:p-8">
      <h3 className="font-bold text-[#1a1a1a] text-xl mb-2">Lesson calculator</h3>
      <p className="text-gray-500 text-sm mb-8">
        Move the slider to see how much you save with a lesson pack.
      </p>

      {/* Slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-[#1a1a1a]">Number of lessons</label>
          <span className="text-2xl font-black text-[#B91C1C]">{hours}</span>
        </div>
        <input
          type="range"
          min={1}
          max={20}
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #B91C1C ${((hours - 1) / 19) * 100}%, #E8E8E8 ${((hours - 1) / 19) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>1</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
        </div>
      </div>

      {/* Result */}
      <div className="bg-[#FAFAF8] rounded-xl p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Best option</span>
          <span className="text-sm font-semibold text-[#1a1a1a]">{deal.label}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Total price</span>
          <span className="text-2xl font-black text-[#1a1a1a]">${deal.total}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Per lesson</span>
          <span className="text-sm font-semibold text-[#1a1a1a]">${deal.perHour}/hr</span>
        </div>
        {deal.savings > 0 && (
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8]">
            <span className="text-sm text-gray-500">You save</span>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-bold rounded-full">
              ${deal.savings}
            </span>
          </div>
        )}
        {'suggestion' in deal && deal.suggestion && (
          <p className="text-xs text-gray-400 pt-1">{deal.suggestion}</p>
        )}
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Casual rate: ${CASUAL_RATE}/hr · 5-pack: ${PACK_5_PRICE} · 10-pack: ${PACK_10_PRICE}
      </p>
    </div>
  );
}
