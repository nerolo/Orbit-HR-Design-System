import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimSummaryBar, ClaimSummaryBarOnBackground } from './ClaimSummaryBar';

const meta = {
  title: 'Nero design/Claim Summary Bar',
  component: ClaimSummaryBar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    totalReceipts: 4,
    approvedCount: 1,
  },
  argTypes: {
    totalReceipts: { control: { type: 'number', min: 1 } },
    approvedCount: { control: { type: 'number', min: 0 } },
  },
} satisfies Meta<typeof ClaimSummaryBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllApproved: Story = { args: { totalReceipts: 4, approvedCount: 4 } };
export const OnBackground: Story = { render: () => <ClaimSummaryBarOnBackground /> };
