import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimRequestActionControl } from './ClaimRequestActionControl';

const meta = {
  title: 'Expenses module/Claim Request Action Control',
  component: ClaimRequestActionControl,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['Staff', 'Return', 'Push NS', 'Mgr approve'],
      description: 'The role/state of the action control bar',
    },
  },
} satisfies Meta<typeof ClaimRequestActionControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Staff: Story = {
  args: {
    variant: 'Staff',
    totalReceipts: 4,
    totalHKD: 'HKD 58920.50',
    totalRMB: 'RMB 291.9',
  },
};

export const Return: Story = {
  args: {
    variant: 'Return',
    returnSummary: '1 Returned, 1 Rejected',
  },
};

export const PushToNetsuite: Story = {
  name: 'Push to Netsuite',
  args: {
    variant: 'Push NS',
    totalReceipts: 5,
    totalHKD: 'HKD 58920.50',
    totalRMB: 'RMB 291.9',
  },
};

export const ManagerApprove: Story = {
  name: 'Manager Approve',
  args: {
    variant: 'Mgr approve',
    totalReceipts: 5,
    totalHKD: 'HKD 58920.50',
    totalRMB: 'RMB 291.9',
  },
};
