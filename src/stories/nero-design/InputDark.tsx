import React from 'react';

export function InputDarkDefault() {
  return (
    <div className="w-[384px] p-6 bg-[#212121] rounded-[12px]">
      <div className="opacity-75">
        <input
          type="text"
          placeholder="Email Address"
          className="w-full border border-[#cfd8dc] rounded-[8px] px-4 h-[42px] bg-transparent text-[14px] font-normal text-[#f8f8f8] placeholder-[#f8f8f8] outline-none leading-[14px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        />
      </div>
    </div>
  );
}

export function InputDarkActive() {
  return (
    <div className="w-[384px] p-6 bg-[#212121] rounded-[12px]">
      <div className="opacity-100">
        <input
          type="text"
          defaultValue="nero@orbit.hr"
          className="w-full border border-[#cfd8dc] rounded-[8px] px-4 h-[42px] bg-transparent text-[14px] font-normal text-[#f8f8f8] outline-none leading-[14px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        />
      </div>
    </div>
  );
}

export function InputDarkAllStates() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-[#2a2a2a] rounded-[12px]">
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Default (75% opacity)</p>
        <InputDarkDefault />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Active (100% opacity)</p>
        <InputDarkActive />
      </div>
    </div>
  );
}
