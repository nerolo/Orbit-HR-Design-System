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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `export function UploadReceipts({ count = 14 }) {
  return (
    <div className="bg-[#f8f8f8] flex flex-col p-8 rounded-[2px] w-[443px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', fontFamily: 'Hanken Grotesk, sans-serif' }}>
      <div className="flex items-center gap-[4px] mb-9">
        {/* UploadIcon */}
        <span className="text-[10.5px] font-medium text-[#2d2a2b]">Upload Receipts</span>
      </div>
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-[60px] font-bold text-[#2d2a2b] leading-none">{count}</span>
        <span className="text-[12px] font-light text-[#625f64]">Receipts Uploaded</span>
      </div>
      <div className="border-t border-[#e0e0e0] mb-6" />
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-3 h-9 px-3 bg-[#f5f5f5] border border-[#efebe7] rounded-[6px] text-[14px] font-medium text-[#212121] w-fit"
          style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}>
          Choose Files
        </button>
        <p className="text-[10.5px] font-medium text-[#2d2a2b]">
          Upload receipt images or PDF files. Multiple files supported.
        </p>
      </div>
    </div>
  );
}`,
      },
    },
  },
};
export const Empty: Story = { args: { count: 0 } };
export const OnBackground: Story = { render: () => <UploadReceiptsOnBackground /> };
