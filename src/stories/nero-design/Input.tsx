import React from 'react';

// Shared icon components
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function InputDefault() {
  return (
    <div className="w-[384px]">
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-medium text-[#263238] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Name
        </label>
        <div className="flex items-center gap-2 border border-[#b0bec5] rounded-[8px] px-3 py-[12px] bg-white">
          <span className="text-[#78909c]"><MailIcon /></span>
          <input
            type="text"
            placeholder="Name"
            className="flex-1 outline-none bg-transparent text-[14px] font-light text-[#90a4ae] placeholder-[#90a4ae] leading-[21px]"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          />
          <span className="text-[#78909c]"><ChevronDownIcon /></span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <input type="checkbox" id="terms-default" className="rounded" />
          <label htmlFor="terms-default" className="text-[12px] text-[#78909c]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            Terms and Conditions
          </label>
        </div>
      </div>
    </div>
  );
}

export function InputFocus() {
  return (
    <div className="w-[384px]">
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-medium text-[#78909c] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Name
        </label>
        <div className="flex items-center gap-2 border border-[#455a64] rounded-[8px] px-3 py-[12px] bg-white">
          <span className="text-[#455a64]"><MailIcon /></span>
          <input
            type="text"
            placeholder="Name"
            defaultValue="Lucas"
            className="flex-1 outline-none bg-transparent text-[14px] font-normal text-[#212121] leading-[21px]"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          />
          <span className="text-[#455a64]"><ChevronDownIcon /></span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <input type="checkbox" id="terms-focus" className="rounded" />
          <label htmlFor="terms-focus" className="text-[12px] text-[#78909c]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            Terms and Conditions
          </label>
        </div>
      </div>
    </div>
  );
}

export function InputDisabled() {
  return (
    <div className="w-[384px]">
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-medium text-[#78909c] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Name
        </label>
        <div className="flex items-center gap-2 border border-[#b0bec5] rounded-[8px] px-3 py-[12px] bg-[#eceff1]">
          <span className="text-[#b0bec5]"><MailIcon /></span>
          <input
            type="text"
            placeholder="Name"
            disabled
            className="flex-1 outline-none bg-transparent text-[14px] font-light text-[#78909c] placeholder-[#78909c] leading-[21px] cursor-not-allowed"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          />
          <span className="text-[#b0bec5]"><ChevronDownIcon /></span>
        </div>
      </div>
    </div>
  );
}

export function InputAllStates() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Default</p>
        <InputDefault />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Focus</p>
        <InputFocus />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Disabled</p>
        <InputDisabled />
      </div>
    </div>
  );
}
