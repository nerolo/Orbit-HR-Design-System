import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RejectDialog, RejectDialogOnBackground } from './RejectDialog';

const meta = {
  title: 'Nero design/Reject Dialog',
  component: RejectDialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'Reject Expense Item',
    subtitle: 'Please provide a reason for rejecting the expense item.',
    placeholder: 'Enter rejection message',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof RejectDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OnBackground: Story = { render: () => <RejectDialogOnBackground /> };
