import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoCardSingle, InfoCardTwoSlot, InfoCardHorizontal, InfoCardAllVariants } from './InfoCard';

const meta = {
  title: 'Nero design/Info Card',
  component: InfoCardSingle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'Total Employees',
    value: 245,
    valueLabel: 'active',
    meta: 'Across all locations',
    layout: 'single',
    icon: 'chart',
  },
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    valueLabel: { control: 'text' },
    meta: { control: 'text' },
    layout: { control: 'select', options: ['single', 'horizontal'] },
    icon: { control: 'select', options: ['chart', 'calendar', 'clock'] },
  },
} satisfies Meta<typeof InfoCardSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleData: Story = {
  parameters: {
    docs: {
      source: {
        code: `export function InfoCardSingle() {
  return (
    <div
      className="flex flex-col justify-between bg-[#f8f8f8] px-6 py-5 h-[200px] w-[286px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
    >
      <div className="flex items-center gap-2">
        {/* icon */}
        <span className="text-[18px] font-medium text-[#2d2a2b] leading-[30px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Total Employees
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-2">
          <span className="text-[48px] font-bold text-[#2d2a2b] leading-[60px]"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            245
          </span>
          <span className="text-[14px] font-medium text-[#625f64] leading-[16px]"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            active
          </span>
        </div>
        <span className="text-[12px] font-medium text-[#625f64] leading-[21px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Across all locations
        </span>
      </div>
    </div>
  );
}`,
      },
    },
  },
};
export const TwoSlots: Story = { render: () => <InfoCardTwoSlot /> };
export const Horizontal: Story = { render: () => <InfoCardHorizontal /> };
export const AllVariants: Story = { render: () => <InfoCardAllVariants /> };
