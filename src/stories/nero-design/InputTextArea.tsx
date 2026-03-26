import React from 'react';

export function InputTextAreaDefault() {
  return (
    <div className="w-[384px]">
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-medium text-[#212121] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Message
        </label>
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full border border-[#b0bec5] rounded-[8px] px-4 py-3 bg-transparent text-[14px] font-normal text-[#2d2a2b] placeholder-[#bdbdbd] outline-none resize-none leading-[21px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif', height: '146px' }}
        />
      </div>
    </div>
  );
}

export function InputTextAreaActive() {
  return (
    <div className="w-[384px]">
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-medium text-[#212121] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Message
        </label>
        <textarea
          defaultValue="Hi there, I wanted to reach out about..."
          rows={5}
          className="w-full border border-[#78909c] rounded-[8px] px-4 py-3 bg-transparent text-[14px] font-normal text-[#2d2a2b] outline-none resize-none leading-[21px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif', height: '146px' }}
        />
      </div>
    </div>
  );
}

export function InputTextAreaAllStates() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Default</p>
        <InputTextAreaDefault />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Active</p>
        <InputTextAreaActive />
      </div>
    </div>
  );
}
