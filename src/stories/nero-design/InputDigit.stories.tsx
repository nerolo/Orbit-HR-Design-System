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

export const AllStates: Story = {};
export const Default: Story = { render: () => <InputDigitDefault /> };
export const Active: Story = { render: () => <InputDigitActive /> };
export const OTPRow: Story = { render: () => <InputDigitOTPRow /> };
