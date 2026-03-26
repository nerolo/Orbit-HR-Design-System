import React from 'react';

export function InputDigitDefault() {
  return (
    <div className="flex flex-col gap-1 items-center">
      <label className="text-[12px] font-medium text-[#2d2a2b] leading-[21px] self-start" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Code
      </label>
      <input
        type="text"
        maxLength={1}
        className="w-[60px] h-[70px] border border-[#fafafa] rounded-[8px] bg-[#fafafa] text-center text-[24px] font-medium text-[#2d2a2b] outline-none shadow-sm"
        style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
      />
    </div>
  );
}

export function InputDigitActive() {
  return (
    <div className="flex flex-col gap-1 items-center">
      <label className="text-[12px] font-medium text-[#2d2a2b] leading-[21px] self-start" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Code
      </label>
      <input
        type="text"
        maxLength={1}
        defaultValue="4"
        className="w-[60px] h-[70px] border border-[#455a64] rounded-[8px] bg-[#fafafa] text-center text-[24px] font-medium text-[#2d2a2b] outline-none"
        style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
      />
    </div>
  );
}

export function InputDigitOTPRow() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="text-[12px] text-[#78909c] uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>OTP — 4 digits</p>
      <div className="flex gap-3">
        {[1, 2, 3, 4].map((i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            defaultValue={i <= 2 ? String(i) : ''}
            className={`w-[60px] h-[70px] rounded-[8px] bg-[#fafafa] text-center text-[24px] font-medium text-[#2d2a2b] outline-none ${
              i === 3
                ? 'border border-[#455a64]'
                : 'border border-[#fafafa] shadow-sm'
            }`}
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          />
        ))}
      </div>
    </div>
  );
}

export function InputDigitAllStates() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Default</p>
        <InputDigitDefault />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Active</p>
        <InputDigitActive />
      </div>
    </div>
  );
}
