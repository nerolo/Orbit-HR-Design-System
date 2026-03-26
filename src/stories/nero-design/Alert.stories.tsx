import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDefault, AlertDismissed } from './Alert';

const meta = {
  title: 'Nero design/Alert',
  component: AlertDefault,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    title: 'March 1st Readiness: 31 days remaining',
    subtitle: '87 days scheduled for forfeiture company-wide. Review high-risk employees.',
    actionLabel: 'Review',
    color: '#ef5350',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    actionLabel: { control: 'text' },
    color: { control: 'color' },
  },
} satisfies Meta<typeof AlertDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import React from 'react';

function ExclamationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        fill="#ef5350"
      />
    </svg>
  );
}

export function AlertDefault() {
  return (
    <div className="relative w-full rounded-tr-[8px] rounded-br-[8px] overflow-hidden">
      <div className="absolute inset-0 bg-[#ef5350] opacity-20 rounded-tr-[8px] rounded-br-[8px]" />
      <div className="absolute inset-y-0 left-0 w-1 bg-[#ef5350]" />
      <div className="relative flex items-center gap-3 pl-5 pr-4 py-[7px]">
        <span className="shrink-0"><ExclamationIcon /></span>
        <div className="flex flex-col flex-1 min-w-0">
          <p
            className="text-[14px] font-semibold text-[#ef5350] leading-[1.5]"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            March 1st Readiness: 31 days remaining
          </p>
          <p
            className="text-[12px] font-normal text-[#f44336] whitespace-nowrap"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          >
            87 days scheduled for forfeiture company-wide. Review high-risk employees.
          </p>
        </div>
        <button
          className="shrink-0 h-[36px] px-4 border border-[#f44336] rounded-[6px] bg-[#fafafa] text-[#f44336] text-[14px] font-medium whitespace-nowrap"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Review
        </button>
      </div>
    </div>
  );
}`,
      },
    },
  },
};
export const Dismissible: Story = { render: () => <AlertDismissed /> };
