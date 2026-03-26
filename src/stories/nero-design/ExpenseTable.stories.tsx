import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExpenseTable, ExpenseTableOnBackground } from './ExpenseTable';

const meta = {
  title: 'Nero design/Expense Table',
  component: ExpenseTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    title: 'Scanned Receipt Details',
  },
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof ExpenseTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `const STATUS_STYLES = {
  Approved: { bg: '#aed581', text: '#fafafa', label: 'Approved' },
  Rejected: { bg: '#e57373', text: '#fafafa', label: 'Rejected' },
  Return:   { bg: '#ffd54f', text: '#2d2a2b', label: 'Return'   },
  Pending:  { bg: '#eceff1', text: '#2d2a2b', label: 'Pending'  },
};

function StatusBadge({ status }) {
  const s = STATUS_STYLES[status];
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] text-[10.5px] font-bold whitespace-nowrap"
      style={{ backgroundColor: s.bg, color: s.text, fontFamily: 'Hanken Grotesk, sans-serif' }}>
      {s.label}
    </span>
  );
}

const HEADERS = ['Image','Status','Transaction Date','Currency','Amount',
  'Cost Department','Cost Location','Cost Description','Remarks','Account Code','File Name'];

export function ExpenseTable({ title = 'Scanned Receipt Details', rows }) {
  const defaultRows = [
    { id: 1, status: 'Pending',  fileName: 'receipt.jpg' },
    { id: 2, status: 'Return',   fileName: 'receipt.jpg' },
    { id: 3, status: 'Rejected', fileName: 'receipt.jpg' },
    { id: 4, status: 'Approved', fileName: 'receipt.jpg' },
  ];
  return (
    <div className="bg-[#f8f8f8] rounded-[2px] overflow-auto"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', fontFamily: 'Hanken Grotesk, sans-serif' }}>
      <div className="px-6 pt-6 pb-2">
        <h2 className="text-[21px] font-bold text-[#2d2a2b] tracking-[-0.01em]">{title}</h2>
        <p className="text-[12px] text-[#757575] mt-1 leading-[21px]">
          Please reference on <span className="text-[#e57373] font-bold underline">Claim Rules</span> before submitting.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-max border-collapse">
          <thead>
            <tr className="border-b border-[#f0f0f0]">
              {HEADERS.map((h) => (
                <th key={h} className="h-[50px] px-3 text-left text-[12px] font-normal text-[#757575] whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(rows ?? defaultRows).map((row) => (
              <tr key={row.id} className="border-b border-[#f5f5f5] last:border-0">
                <td className="p-3 align-middle">
                  <div className="w-[75px] h-[100px] rounded-[6px] bg-[#e8e0d8] border border-[#efebe7]" />
                </td>
                <td className="px-3 py-4 align-middle"><StatusBadge status={row.status} /></td>
                <td className="px-2 py-3"><input placeholder="Date" className="border border-[#b0bec5] rounded-[8px] px-3 h-[42px] text-[14px] w-full" /></td>
                <td className="px-2 py-3"><input placeholder="Currency" className="border border-[#b0bec5] rounded-[8px] px-3 h-[42px] text-[14px] w-full" /></td>
                <td className="px-2 py-3"><input placeholder="Amount" className="border border-[#b0bec5] rounded-[8px] px-3 h-[42px] text-[14px] w-full" /></td>
                <td className="px-2 py-3"><input placeholder="Cost Department" className="border border-[#b0bec5] rounded-[8px] px-3 h-[42px] text-[14px] w-full" /></td>
                <td className="px-2 py-3"><input placeholder="Cost Location" className="border border-[#b0bec5] rounded-[8px] px-3 h-[42px] text-[14px] w-full" /></td>
                <td className="px-2 py-3"><textarea placeholder="Cost Description" rows={3} className="border border-[#b0bec5] rounded-[8px] px-3 py-2 text-[14px] w-full resize-none" /></td>
                <td className="px-2 py-3"><textarea placeholder="Remarks" rows={3} className="border border-[#b0bec5] rounded-[8px] px-3 py-2 text-[14px] w-full resize-none" /></td>
                <td className="px-3 py-3"><input placeholder="Account Code" className="border border-[#b0bec5] rounded-[8px] px-3 h-[42px] text-[14px] w-full" /></td>
                <td className="px-3 py-4"><span className="text-[14px] text-[#424242]">{row.fileName}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}`,
      },
    },
  },
};
export const OnBackground: Story = { render: () => <ExpenseTableOnBackground /> };
