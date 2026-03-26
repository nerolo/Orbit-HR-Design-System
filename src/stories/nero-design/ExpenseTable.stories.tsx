import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExpenseTable, ExpenseTableOnBackground } from './ExpenseTable';

const meta = {
  title: 'Nero design/Expense Table',
  component: ExpenseTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    title: 'Scanned Receipt Details',
  },
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof ExpenseTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OnBackground: Story = { render: () => <ExpenseTableOnBackground /> };
