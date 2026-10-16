import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ApprovalButton, ApprovalButtonAllStates } from './ApprovalButton';

const meta = {
  title: 'Expenses module/Approval Button',
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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `function CheckIcon({ color = '#bdbdbd' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ReturnIcon({ color = '#bdbdbd' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 14 4 9 9 4" />
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

export function ApprovalButton({ status = 'default', size = 'default', onApprove, onReturn }) {
  const isMini = size === 'mini';
  const btnSize = isMini ? 'w-[62px] h-[36px]' : 'w-[62px] h-[100px]';
  const gap = isMini ? 'gap-[4px]' : 'gap-[8px]';
  const padding = isMini ? 'p-[8px]' : 'p-[12px]';
  const approveHighlight = status === 'approved'
    ? 'bg-[#f1f8e9] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
    : 'bg-[#fafafa] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]';
  const returnHighlight = status === 'returned'
    ? 'bg-[#fff8e1] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
    : 'bg-[#fafafa] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]';
  const approveColor = status === 'approved' ? '#aed581' : '#bdbdbd';
  const returnColor  = status === 'returned'  ? '#ffb300' : '#bdbdbd';

  return (
    <div className={\`inline-flex items-center \${gap} \${padding} rounded-[4px]\`}
      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
      <button onClick={onApprove}
        className={\`\${btnSize} \${approveHighlight} flex flex-col items-center justify-center rounded-[2px] cursor-pointer transition-all\`}>
        {status === 'approved' && (
          <div className="w-[4px] h-[4px] rounded-full bg-[#aed581] shadow-[0px_0px_4px_0px_#62ff00] mb-1" />
        )}
        <CheckIcon color={approveColor} />
        {!isMini && <span className="text-[9px] font-medium mt-1 text-[#bdbdbd] uppercase tracking-wide">Approve</span>}
      </button>
      <button onClick={onReturn}
        className={\`\${btnSize} \${returnHighlight} flex flex-col items-center justify-center rounded-[2px] cursor-pointer transition-all\`}>
        {status === 'returned' && (
          <div className="w-[4px] h-[4px] rounded-full bg-[#ffb300] shadow-[0px_0px_4px_0px_#ffb300] mb-1" />
        )}
        <ReturnIcon color={returnColor} />
        {!isMini && <span className="text-[9px] font-medium mt-1 text-[#bdbdbd] uppercase tracking-wide">Return</span>}
      </button>
    </div>
  );
}`,
      },
    },
  },
};
export const Approved: Story = { args: { status: 'approved' } };
export const Returned: Story = { args: { status: 'returned' } };
export const Mini: Story = { args: { size: 'mini' } };
export const AllStates: Story = { render: () => <ApprovalButtonAllStates /> };
