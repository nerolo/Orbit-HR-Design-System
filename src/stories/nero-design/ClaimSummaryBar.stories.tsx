import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimSummaryBar, ClaimSummaryBarOnBackground } from './ClaimSummaryBar';

const meta = {
  title: 'Nero design/Claim Summary Bar',
  component: ClaimSummaryBar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    totalReceipts: 4,
    approvedCount: 1,
  },
  argTypes: {
    totalReceipts: { control: { type: 'number', min: 1 } },
    approvedCount: { control: { type: 'number', min: 0 } },
  },
} satisfies Meta<typeof ClaimSummaryBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `export function ClaimSummaryBar({ totalReceipts = 4, approvedCount = 1, amounts, onPushToNetsuite }) {
  const defaultAmounts = [
    { currency: 'HKD', amount: '58920.50' },
    { currency: 'RMB', amount: '291.9'   },
  ];
  const items = amounts ?? defaultAmounts;
  return (
    <div className="bg-[#f8f8f8] border border-[#eeeeee] flex items-center justify-between px-8 py-5 rounded-[2px] w-full"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', fontFamily: 'Hanken Grotesk, sans-serif' }}>
      <div className="flex flex-col gap-0.5">
        <p className="text-[12px] font-normal text-[#757575] leading-[21px]">
          Total {totalReceipts} Receipts
        </p>
        <p className="text-[16px] font-medium text-[#f1528b] leading-[27px]">
          {approvedCount}/{totalReceipts} Approved
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-start gap-2">
          <p className="text-[14px] font-bold text-[#2d2a2b] leading-[21px] whitespace-nowrap">
            Total Claims Amount:
          </p>
          <div className="flex flex-col gap-0.5">
            {items.map((a) => (
              <p key={a.currency} className="text-[14px] font-bold text-[#2d2a2b] leading-[21px] whitespace-nowrap">
                {a.currency} {a.amount}
              </p>
            ))}
          </div>
        </div>
        <button onClick={onPushToNetsuite}
          className="h-12 px-5 bg-[#f1528b] text-[#f8f8f8] text-[12px] font-bold uppercase rounded-[8px] whitespace-nowrap"
          style={{ boxShadow: '0px 4px 6px -1px rgba(33,33,33,0.2), 0px 2px 4px -2px rgba(33,33,33,0.2)' }}>
          Push to Netsuite
        </button>
      </div>
    </div>
  );
}`,
      },
    },
  },
};
export const AllApproved: Story = { args: { totalReceipts: 4, approvedCount: 4 } };
export const OnBackground: Story = { render: () => <ClaimSummaryBarOnBackground /> };
