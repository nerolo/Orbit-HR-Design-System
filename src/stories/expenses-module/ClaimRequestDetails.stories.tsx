import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimRequestDetails, ClaimRequestDetailsOnBackground } from './ClaimRequestDetails';

const meta = {
  title: 'Expenses module/Claim Request Details',
  component: ClaimRequestDetails,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'Expense Reimbursement Request',
    status: 'Pending',
  },
  argTypes: {
    title: { control: 'text' },
    status: {
      control: 'select',
      options: ['Pending', 'Approved', 'Rejected', 'Return', 'Draft', 'Completed'],
    },
  },
} satisfies Meta<typeof ClaimRequestDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pending: Story = { args: { status: 'Pending' } };
export const Approved: Story = { args: { status: 'Approved' } };
export const Rejected: Story = { args: { status: 'Rejected' } };
export const Return: Story = { args: { status: 'Return' } };
export const Draft: Story = { args: { status: 'Draft' } };
export const OnBackground: Story = { render: () => <ClaimRequestDetailsOnBackground /> };
