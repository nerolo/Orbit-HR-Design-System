import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LeaveBalanceCard, LeaveBalanceCardOnBackground } from './LeaveBalanceCard';

const meta = {
  title: 'Nero design/Leave Balance Card',
  component: LeaveBalanceCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof LeaveBalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OnBackground: Story = { render: () => <LeaveBalanceCardOnBackground /> };
