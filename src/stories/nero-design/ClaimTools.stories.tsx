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
        {/* CurrencyDollarIcon */}
        <span className="text-[12px] font-normal text-[#2d2a2b] tracking-wide">RATES</span>
      </button>
      <button onClick={onRules}
        className="flex flex-col items-center justify-between p-4 bg-[#f5f5f5] rounded-[4px] size-[110px] hover:bg-[#eeeeee] transition-colors"
        style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)' }}>
        {/* DocumentTextIcon */}
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
