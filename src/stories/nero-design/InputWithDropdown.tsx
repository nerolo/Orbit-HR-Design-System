import React, { useState } from 'react';

function ChevronDownIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const COUNTRIES = [
  { flag: '🇰🇪', name: 'Kenya', code: '+254' },
  { flag: '🇳🇬', name: 'Nigeria', code: '+234' },
  { flag: '🇸🇲', name: 'San Marino', code: '+378' },
];

export function InputWithDropdownDefault() {
  return (
    <div className="w-[384px]">
      <div className="flex items-center border border-[#fafafa] rounded-[8px] h-[40px] bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-1 px-3 text-[12px] text-[#78909c] shrink-0" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          <span>🇰🇪</span>
          <span>+254</span>
          <span className="text-[#78909c]"><ChevronDownIcon /></span>
        </div>
        <div className="w-px h-5 bg-[#fafafa]" />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="flex-1 px-3 outline-none bg-transparent text-[14px] font-normal placeholder-[#bdbdbd] leading-[21px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        />
      </div>
    </div>
  );
}

export function InputWithDropdownActive() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(COUNTRIES[0]);

  return (
    <div className="w-[384px] relative">
      <div className="flex items-center border border-[#fafafa] rounded-[8px] h-[40px] bg-white shadow-sm overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-3 text-[12px] text-[#78909c] shrink-0"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          <span>{selected.flag}</span>
          <span>{selected.code}</span>
          <span className="text-[#78909c]"><ChevronDownIcon /></span>
        </button>
        <div className="w-px h-5 bg-[#e0e0e0]" />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="flex-1 px-3 outline-none bg-transparent text-[14px] font-normal placeholder-[#bdbdbd] leading-[21px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        />
      </div>
      {open && (
        <div
          className="absolute top-full left-0 bg-white rounded-[6px] mt-1 z-10 overflow-hidden"
          style={{ boxShadow: '0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)', width: '160px' }}
        >
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              onClick={() => { setSelected(c); setOpen(false); }}
              className="w-full flex items-center gap-2 px-4 py-2 text-[12px] text-[#78909c] hover:bg-gray-50 text-left"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              <span>{c.flag}</span>
              <span>{c.name}</span>
              <span className="ml-auto">{c.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function InputWithDropdownAllStates() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Default</p>
        <InputWithDropdownDefault />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Active (dropdown open)</p>
        <InputWithDropdownActive />
      </div>
    </div>
  );
}
