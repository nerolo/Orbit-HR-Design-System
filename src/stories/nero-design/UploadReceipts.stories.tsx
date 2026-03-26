import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { UploadReceipts, UploadReceiptsOnBackground } from './UploadReceipts';

const meta = {
  title: 'Nero design/Upload Receipts',
  component: UploadReceipts,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    count: 14,
  },
  argTypes: {
    count: { control: { type: 'number', min: 0 } },
  },
} satisfies Meta<typeof UploadReceipts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Empty: Story = { args: { count: 0 } };
export const OnBackground: Story = { render: () => <UploadReceiptsOnBackground /> };
