import React from 'react';

export function InputWithButtonActive() {
  return (
    <div className="w-[384px]">
      <div className="flex items-center border border-[#78909c] rounded-[8px] h-[40px] overflow-hidden px-3 bg-white">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 outline-none bg-transparent text-[14px] font-normal text-[#2d2a2b] placeholder-[#bdbdbd] leading-[21px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        />
        <button
          className="ml-2 px-[14px] py-2 bg-[#212121] text-[#fafafa] text-[10.5px] font-bold rounded-[6px] uppercase tracking-wider leading-none whitespace-nowrap"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Invite
        </button>
      </div>
    </div>
  );
}

export function InputWithButtonDisabled() {
  return (
    <div className="w-[384px]">
      <div className="flex items-center border border-[#fafafa] rounded-[8px] h-[40px] overflow-hidden px-3 bg-white shadow-sm">
        <input
          type="email"
          placeholder="Email Address"
          disabled
          className="flex-1 outline-none bg-transparent text-[14px] font-normal text-[#bdbdbd] placeholder-[#bdbdbd] leading-[21px] cursor-not-allowed"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        />
        <button
          disabled
          className="ml-2 px-[14px] py-2 bg-[#bdbdbd] text-[#fafafa] text-[10.5px] font-bold rounded-[6px] uppercase tracking-wider leading-none whitespace-nowrap cursor-not-allowed"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          Invite
        </button>
      </div>
    </div>
  );
}

export function InputWithButtonAllStates() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Active</p>
        <InputWithButtonActive />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Disabled</p>
        <InputWithButtonDisabled />
      </div>
    </div>
  );
}
