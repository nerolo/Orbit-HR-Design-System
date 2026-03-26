import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ApprovalButton, ApprovalButtonAllStates } from './ApprovalButton';

const meta = {
  title: 'Nero design/Approval Button',
  component: ApprovalButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    status: 'default',
    size: 'default',
  },
  argTypes: {
    status: { control: 'select', options: ['default', 'approved', 'returned'] },
    size: { control: 'select', options: ['default', 'mini'] },
  },
} satisfies Meta<typeof ApprovalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Approved: Story = { args: { status: 'approved' } };
export const Returned: Story = { args: { status: 'returned' } };
export const Mini: Story = { args: { size: 'mini' } };
export const AllStates: Story = { render: () => <ApprovalButtonAllStates /> };
