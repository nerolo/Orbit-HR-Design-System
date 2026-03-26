import React, { useState } from 'react';

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const MENU_ITEMS = ['Option one', 'Option two', 'Option three'];

export function LineInputDefault() {
  return (
    <div className="w-[224px]">
      <div className="flex flex-col gap-1">
        <label className="text-[12px] font-medium text-[#2d2a2b] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Label
        </label>
        <div className="flex items-center justify-between border-b border-[#b0bec5] py-2">
          <input
            type="text"
            placeholder="eg. Lucas"
            className="flex-1 outline-none bg-transparent text-[12px] font-normal text-[#b0bec5] placeholder-[#b0bec5] leading-[21px]"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          />
          <span className="text-[#78909c]"><ChevronDownIcon /></span>
        </div>
      </div>
    </div>
  );
}

export function LineInputActive() {
  return (
    <div className="w-[224px]">
      <div className="flex flex-col gap-1">
        <label className="text-[12px] font-medium text-[#2d2a2b] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Label
        </label>
        <div className="flex items-center justify-between border-b border-[#455a64] py-2">
          <input
            type="text"
            defaultValue="eg. Lucas"
            className="flex-1 outline-none bg-transparent text-[12px] font-normal text-[#2d2a2b] leading-[21px]"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          />
          <span className="text-[#455a64]"><ChevronDownIcon /></span>
        </div>
      </div>
    </div>
  );
}

export function LineInputMenuExpand() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState('');

  return (
    <div className="w-[224px] relative">
      <div className="flex flex-col gap-1">
        <label className="text-[12px] font-medium text-[#2d2a2b] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Label
        </label>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between border-b border-[#455a64] py-2 text-left w-full"
        >
          <span className="text-[12px] text-[#2d2a2b]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {selected || 'eg. Lucas'}
          </span>
          <span className="text-[#455a64]"><ChevronDownIcon /></span>
        </button>
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#fafafa] rounded-[6px] shadow-md mt-1 z-10 overflow-hidden">
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => { setSelected(item); setOpen(false); }}
              className="w-full text-left px-4 py-2 text-[12px] text-[#2d2a2b] hover:bg-gray-100"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function LineInputAllStates() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Default</p>
        <LineInputDefault />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Active</p>
        <LineInputActive />
      </div>
      <div>
        <p className="text-[12px] text-[#78909c] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Menu Expand</p>
        <LineInputMenuExpand />
      </div>
    </div>
  );
}
