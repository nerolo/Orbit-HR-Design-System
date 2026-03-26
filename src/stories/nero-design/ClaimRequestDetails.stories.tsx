import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimRequestDetails, ClaimRequestDetailsOnBackground } from './ClaimRequestDetails';

const meta = {
  title: 'Nero design/Claim Request Details',
  component: ClaimRequestDetails,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'Expense Reimbursement Request',
  },
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof ClaimRequestDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OnBackground: Story = { render: () => <ClaimRequestDetailsOnBackground /> };
