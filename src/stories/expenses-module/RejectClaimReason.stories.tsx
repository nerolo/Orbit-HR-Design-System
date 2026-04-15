import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RejectClaimReason, RejectClaimReasonOnBackground } from './RejectClaimReason';

const meta = {
  title: 'Expenses module/Reject Claim Reason',
  component: RejectClaimReason,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    reviewerName: { control: 'text' },
    reviewerDate: { control: 'text' },
    reviewerAvatarUrl: { control: 'text' },
    reason: { control: 'text' },
  },
} satisfies Meta<typeof RejectClaimReason>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reviewerName: 'Ada Wong',
    reviewerDate: '21 March 2025',
    reason: 'Unfortunately, your claim request has been rejected due to insufficient documentation. We need more detailed evidence to support your case. Please review the requirements and resubmit with the necessary information.',
  },
};

export const NoAvatar: Story = {
  args: {
    reviewerName: 'John Smith',
    reviewerDate: '5 April 2025',
    reason: 'The submitted receipts do not match the claimed amounts. Please provide original receipts and resubmit.',
  },
};

export const OnBackground: Story = { render: () => <RejectClaimReasonOnBackground /> };
