import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputDigitDefault, InputDigitActive, InputDigitOTPRow, InputDigitAllStates } from './InputDigit';

const meta = {
  title: 'Nero design/Input Digit',
  component: InputDigitAllStates,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputDigitAllStates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  parameters: {
    docs: {
      source: {
        code: `export function InputDigitDefault() {
  return (
    <div className="flex flex-col gap-1 items-center">
      <label className="text-[12px] font-medium text-[#2d2a2b] leading-[21px] self-start"
        style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Code
      </label>
      <input
        type="text"
        maxLength={1}
        className="w-[60px] h-[70px] border border-[#fafafa] rounded-[8px] bg-[#fafafa] text-center text-[24px] font-medium text-[#2d2a2b] outline-none shadow-sm"
        style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
      />
    </div>
  );
}

export function InputDigitActive() {
  return (
    <div className="flex flex-col gap-1 items-center">
      <label className="text-[12px] font-medium text-[#2d2a2b] leading-[21px] self-start"
        style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        Code
      </label>
      <input
        type="text"
        maxLength={1}
        defaultValue="4"
        className="w-[60px] h-[70px] border border-[#455a64] rounded-[8px] bg-[#fafafa] text-center text-[24px] font-medium text-[#2d2a2b] outline-none"
        style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
      />
    </div>
  );
}`,
      },
    },
  },
};
export const Default: Story = { render: () => <InputDigitDefault /> };
export const Active: Story = { render: () => <InputDigitActive /> };
export const OTPRow: Story = { render: () => <InputDigitOTPRow /> };
