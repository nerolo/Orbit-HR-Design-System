import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ExpenseTable, ExpenseTableOnBackground, ExpenseTableFinanceOnBackground } from './ExpenseTable';

const meta = {
  title: 'Expenses module/Expense Table',
  component: ExpenseTable,
  parameters: { layout: 'padded' },
  tags: ['ai-generated'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['staff', 'finance'],
      description: 'Switches between staff view (editable rows + delete/copy actions) and finance view (approval column + staff name field)',
    },
    title: {
      control: 'text',
      description: 'Heading displayed above the receipt table',
    },
    rows: { table: { disable: true } },
    onDeleteRow: { table: { disable: true } },
    onCopyRow: { table: { disable: true } },
    onApprove: { table: { disable: true } },
    onReturn: { table: { disable: true } },
  },
  args: {
    title: 'Scanned Receipt Details',
    variant: 'staff',
  },
} satisfies Meta<typeof ExpenseTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Smoke check: title prop must arrive as a visible heading in the DOM
export const Staff: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: 'Scanned Receipt Details' })
    ).toBeVisible();
  },
};

export const Finance: Story = {
  args: { variant: 'finance' },
};

export const OnBackground: Story = {
  render: () => <ExpenseTableOnBackground />,
};

export const FinanceOnBackground: Story = {
  render: () => <ExpenseTableFinanceOnBackground />,
};

// CssCheck — exactly one per project.
// Verifies that Tailwind arbitrary-color classes are resolved by the shared preview.
// ExpenseTable heading uses text-[#2d2a2b]; fails if Tailwind did not load.
export const CssCheck: Story = {
  args: { title: 'Scanned Receipt Details' },
  play: async ({ canvas }) => {
    const heading = canvas.getByRole('heading', { name: 'Scanned Receipt Details' });
    await expect(getComputedStyle(heading).color).toBe('rgb(45, 42, 43)');
  },
};
