import React from 'react';

export type ReceiptStatus = 'Approved' | 'Rejected' | 'Return' | 'Pending';

export interface ReceiptRow {
  id: number;
  status: ReceiptStatus;
  date?: string;
  currency?: string;
  amount?: string;
  costDept?: string;
  costLocation?: string;
  costDescription?: string;
  remarks?: string;
  accountCode?: string;
  fileName?: string;
}

export interface ExpenseTableProps {
  title?: string;
  rows?: ReceiptRow[];
  onDeleteRow?: (id: number) => void;
  onCopyRow?: (id: number) => void;
}

const STATUS_STYLES: Record<ReceiptStatus, { bg: string; text: string; label: string }> = {
  Approved: { bg: '#aed581', text: '#fafafa', label: 'Approved' },
  Rejected: { bg: '#e57373', text: '#fafafa', label: 'Rejected' },
  Return:   { bg: '#ffd54f', text: '#2d2a2b', label: 'Return' },
  Pending:  { bg: '#eceff1', text: '#2d2a2b', label: 'Pending' },
};

function StatusBadge({ status }: { status: ReceiptStatus }) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-[4px] text-[10.5px] font-bold whitespace-nowrap"
      style={{ backgroundColor: s.bg, color: s.text, fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      {s.label}
    </span>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function DateInput({ placeholder = 'Date' }: { placeholder?: string }) {
  return (
    <div className="flex items-center border border-[#b0bec5] rounded-[8px] px-3 h-[42px] bg-transparent gap-2 w-full">
      <span className="flex-1 text-[14px] text-[#bdbdbd]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        {placeholder}
      </span>
      <CalendarIcon />
    </div>
  );
}

function SelectInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center border border-[#b0bec5] rounded-[8px] px-3 h-[42px] bg-transparent gap-2 w-full">
      <span className="flex-1 text-[14px] text-[#bdbdbd] whitespace-nowrap" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        {placeholder}
      </span>
      <ChevronIcon />
    </div>
  );
}

function TextInput({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-[#b0bec5] rounded-[8px] px-3 h-[42px] text-[14px] text-[#2d2a2b] bg-transparent outline-none placeholder-[#bdbdbd]"
      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
    />
  );
}

function TableTextarea({ placeholder }: { placeholder: string }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={3}
      className="w-full border border-[#b0bec5] rounded-[8px] px-3 py-2 text-[14px] text-[#2d2a2b] bg-transparent outline-none resize-none placeholder-[#bdbdbd]"
      style={{ fontFamily: 'Hanken Grotesk, sans-serif', minHeight: '80px' }}
    />
  );
}

const defaultRows: ReceiptRow[] = [
  { id: 1, status: 'Pending',  fileName: 'receipt.jpg' },
  { id: 2, status: 'Return',   fileName: 'receipt.jpg' },
  { id: 3, status: 'Rejected', fileName: 'receipt.jpg' },
  { id: 4, status: 'Approved', fileName: 'receipt.jpg' },
];

const HEADERS = [
  { label: 'Image',            width: 'w-[109px]' },
  { label: 'Status',           width: 'w-[110px]' },
  { label: 'Transaction Date', width: 'w-[230px]' },
  { label: 'Currency',         width: 'w-[140px]' },
  { label: 'Amount',           width: 'w-[136px]' },
  { label: 'Cost Department',  width: 'w-[204px]' },
  { label: 'Cost Location',    width: 'w-[159px]' },
  { label: 'Cost Description', width: 'w-[300px]' },
  { label: 'Remarks',          width: 'w-[300px]' },
  { label: 'Account Code',     width: 'w-[232px]' },
  { label: 'File Name',        width: 'w-[169px]' },
  { label: '',                 width: 'w-[80px]'  },
];

export function ExpenseTable({
  title = 'Scanned Receipt Details',
  rows = defaultRows,
  onDeleteRow,
  onCopyRow,
}: ExpenseTableProps) {
  return (
    <div
      className="bg-[#f8f8f8] rounded-[2px] overflow-auto"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      {/* Table heading */}
      <div className="px-6 pt-6 pb-2">
        <h2 className="text-[21px] font-bold text-[#2d2a2b] tracking-[-0.01em]">{title}</h2>
        <p className="text-[12px] text-[#757575] mt-1 leading-[21px]">
          The table will show the receipt details that autofilled by the system. Please reference on{' '}
          <span className="text-[#e57373] font-bold underline cursor-pointer">Claim Rules</span>{' '}
          and verify the information before submitting it for approval.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-max border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-[#f0f0f0]">
              {HEADERS.map((h, i) => (
                <th
                  key={i}
                  className={`${h.width} h-[50px] px-3 text-left text-[12px] font-normal text-[#757575] whitespace-nowrap`}
                >
                  {h.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-[#f5f5f5] last:border-0">
                {/* Receipt image placeholder */}
                <td className="p-3 align-middle">
                  <div className="w-[75px] h-[100px] rounded-[6px] bg-[#e8e0d8] border border-[#efebe7] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </td>

                {/* Status */}
                <td className="px-3 py-4 align-middle">
                  <StatusBadge status={row.status} />
                </td>

                {/* Transaction Date */}
                <td className="px-2 py-3 align-middle w-[230px]">
                  <DateInput />
                </td>

                {/* Currency — dropdown */}
                <td className="px-2 py-3 align-middle">
                  <SelectInput placeholder="Currency" />
                </td>

                {/* Amount */}
                <td className="px-2 py-3 align-middle">
                  <TextInput placeholder="Amount" />
                </td>

                {/* Cost Department — dropdown */}
                <td className="px-2 py-3 align-middle">
                  <SelectInput placeholder="Cost Department" />
                </td>

                {/* Cost Location — dropdown */}
                <td className="px-2 py-3 align-middle">
                  <SelectInput placeholder="Cost Location" />
                </td>

                {/* Cost Description */}
                <td className="px-2 py-3 align-top">
                  <TableTextarea placeholder="Cost Description" />
                </td>

                {/* Remarks */}
                <td className="px-2 py-3 align-top">
                  <TableTextarea placeholder="Remarks" />
                </td>

                {/* Account Code */}
                <td className="px-3 py-3 align-middle">
                  <TextInput placeholder="Account Code" />
                </td>

                {/* File Name */}
                <td className="px-3 py-4 align-middle">
                  <span className="text-[14px] text-[#424242] whitespace-nowrap">
                    {row.fileName ?? 'receipt.jpg'}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-3 py-4 align-middle">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onDeleteRow?.(row.id)}
                      className="flex items-center justify-center w-8 h-8 rounded-[8px] bg-white border border-[#e0e0e0] text-[#9e9e9e] hover:bg-[#f1528b] hover:border-[#f1528b] hover:text-white transition-colors"
                      style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)' }}
                      title="Delete row"
                    >
                      <TrashIcon />
                    </button>
                    <button
                      onClick={() => onCopyRow?.(row.id)}
                      className="flex items-center justify-center w-8 h-8 rounded-[8px] bg-white border border-[#e0e0e0] text-[#9e9e9e] hover:bg-[#f1528b] hover:border-[#f1528b] hover:text-white transition-colors"
                      style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)' }}
                      title="Duplicate row"
                    >
                      <CopyIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ExpenseTableOnBackground() {
  return (
    <div className="p-6 bg-[#f4f2f1]">
      <ExpenseTable />
    </div>
  );
}
