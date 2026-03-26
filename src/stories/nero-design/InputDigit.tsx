import React from 'react';

export interface InputDigitProps {
  label?: string;
  value?: string;
  isActive?: boolean;
  disabled?: boolean;
}

export function InputDigitDefault({
  label = 'Code',
  value = '',
  isActive = false,
  disabled = false,
}: InputDigitProps) {
  const borderColor = isActive ? '#455a64' : '#fafafa';
  return (
    <div className="flex flex-col gap-1 items-center">
      {label && (
        <label className="text-[12px] font-medium text-[#2d2a2b] leading-[21px] self-start" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          {label}
        </label>
      )}
      <input
        type="text"
        maxLength={1}
        defaultValue={value}
        disabled={disabled}
        className="w-[60px] h-[70px] rounded-[8px] bg-[#fafafa] text-center text-[24px] font-medium text-[#2d2a2b] outline-none"
        style={{
          fontFamily: 'Hanken Grotesk, sans-serif',
          border: `1px solid ${borderColor}`,
          boxShadow: isActive ? 'none' : '0 1px 2px rgba(0,0,0,0.05)',
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'text',
        }}
      />
    </div>
  );
}

export function InputDigitActive() {
  return <InputDigitDefault label="Code" value="4" isActive={true} />;
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
            className="w-[60px] h-[70px] rounded-[8px] bg-[#fafafa] text-center text-[24px] font-medium text-[#2d2a2b] outline-none"
            style={{
              fontFamily: 'Hanken Grotesk, sans-serif',
              border: i === 3 ? '1px solid #455a64' : '1px solid #fafafa',
              boxShadow: i === 3 ? 'none' : '0 1px 2px rgba(0,0,0,0.05)',
            }}
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
