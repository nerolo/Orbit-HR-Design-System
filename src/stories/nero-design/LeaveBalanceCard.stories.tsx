import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LeaveBalanceCard, LeaveBalanceCardOnBackground } from './LeaveBalanceCard';

const meta = {
  title: 'Nero design/Leave Balance Card',
  component: LeaveBalanceCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    annualUsed: 12,
    annualTotal: 15,
    sickUsed: 2,
    sickTotal: 2,
    casualUsed: 0,
    casualTotal: 5,
    maternityUsed: 10,
    maternityTotal: 10,
    unpaidUsed: 1,
  },
  argTypes: {
    annualUsed:     { control: { type: 'number', min: 0 } },
    annualTotal:    { control: { type: 'number', min: 1 } },
    sickUsed:       { control: { type: 'number', min: 0 } },
    sickTotal:      { control: { type: 'number', min: 1 } },
    casualUsed:     { control: { type: 'number', min: 0 } },
    casualTotal:    { control: { type: 'number', min: 1 } },
    maternityUsed:  { control: { type: 'number', min: 0 } },
    maternityTotal: { control: { type: 'number', min: 1 } },
    unpaidUsed:     { control: { type: 'number', min: 0 } },
  },
} satisfies Meta<typeof LeaveBalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `const LEAVE_ITEMS = [
  { label: 'Annual Leave',    used: 12, total: 15   },
  { label: 'Paid Sick Leave', used: 2,  total: 2    },
  { label: 'Casual Leave',    used: 0,  total: 5    },
  { label: 'Maternity Leave', used: 10, total: 10   },
  { label: 'Unpaid Leave',    used: 1,  total: null },
];

function LeaveRow({ item }) {
  const pct = item.total ? Math.round((item.used / item.total) * 100) : 50;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-normal text-[#212121]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          {item.label}
        </span>
        <span className="text-[12px] font-bold"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          <span className="text-[#b60058]">{item.used}</span>
          <span className="text-[#212121]"> / {item.total ?? '—'}</span>
        </span>
      </div>
      <div className="h-2 rounded-full bg-[#e0e0e0] overflow-hidden">
        <div className="h-full rounded-full bg-[#b60058]" style={{ width: \`\${pct}%\` }} />
      </div>
    </div>
  );
}

export function LeaveBalanceCard() {
  const totalRemaining = LEAVE_ITEMS.reduce((acc, item) =>
    acc + (item.total ? item.total - item.used : 0), 0);

  return (
    <div className="bg-[#f8f8f8] w-[348px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}>
      <div className="flex flex-col gap-4 px-4 py-3 border-b border-[#efebe7]">
        {LEAVE_ITEMS.map((item) => <LeaveRow key={item.label} item={item} />)}
      </div>
      <div className="flex items-baseline gap-2 px-6 py-4 border-t border-[#efebe7]">
        <span className="text-[30px] font-bold text-[#212121] leading-[40px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          {totalRemaining}
        </span>
        <span className="text-[16px] font-normal text-[#625f64] leading-[27px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          days remaining
        </span>
      </div>
    </div>
  );
}`,
      },
    },
  },
};
export const OnBackground: Story = { render: () => <LeaveBalanceCardOnBackground /> };
