import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimTools, ClaimToolsOnBackground } from './ClaimTools';

const meta = {
  title: 'Nero design/Claim Tools',
  component: ClaimTools,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ClaimTools>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `export function ClaimTools({ onRates, onRules }) {
  return (
    <div className="bg-[#f8f8f8] flex flex-col gap-8 items-center justify-center px-4 py-6 rounded-[4px] w-[142px]"
      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
      <button onClick={onRates}
        className="flex flex-col items-center justify-between p-4 bg-[#f5f5f5] rounded-[4px] size-[110px] hover:bg-[#eeeeee] transition-colors"
        style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M15 9.5a3 3 0 0 0-6 0c0 2 6 2.5 6 5a3 3 0 0 1-6 0" />
        </svg>
        <span className="text-[12px] font-normal text-[#2d2a2b] tracking-wide">RATES</span>
      </button>
      <button onClick={onRules}
        className="flex flex-col items-center justify-between p-4 bg-[#f5f5f5] rounded-[4px] size-[110px] hover:bg-[#eeeeee] transition-colors"
        style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="12" y2="17" />
        </svg>
        <span className="text-[12px] font-normal text-[#2d2a2b] tracking-wide">RULES</span>
      </button>
    </div>
  );
}`,
      },
    },
  },
};
export const OnBackground: Story = { render: () => <ClaimToolsOnBackground /> };
