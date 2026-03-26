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

function TableInput({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-[#b0bec5] rounded-[8px] px-3 py-2 text-[14px] text-[#2d2a2b] bg-transparent outline-none placeholder-[#bdbdbd] h-[42px]"
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
  { label: 'Image',            width: 'w-[107px]' },
  { label: 'Status',           width: 'w-[122px]' },
  { label: 'Transaction Date', width: 'w-[213px]' },
  { label: 'Currency',         width: 'w-[130px]' },
  { label: 'Amount',           width: 'w-[130px]' },
  { label: 'Cost Department',  width: 'w-[195px]' },
  { label: 'Cost Location',    width: 'w-[145px]' },
  { label: 'Cost Description', width: 'w-[300px]' },
  { label: 'Remarks',          width: 'w-[300px]' },
  { label: 'Account Code',     width: 'w-[180px]' },
  { label: 'File Name',        width: 'w-[130px]' },
];

export function ExpenseTable({
  title = 'Scanned Receipt Details',
  rows = defaultRows,
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
              {HEADERS.map((h) => (
                <th
                  key={h.label}
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
                <td className="px-2 py-3 align-middle">
                  <TableInput placeholder="Date" />
                </td>

                {/* Currency */}
                <td className="px-2 py-3 align-middle">
                  <TableInput placeholder="Currency" />
                </td>

                {/* Amount */}
                <td className="px-2 py-3 align-middle">
                  <TableInput placeholder="Amount" />
                </td>

                {/* Cost Department */}
                <td className="px-2 py-3 align-middle">
                  <TableInput placeholder="Cost Department" />
                </td>

                {/* Cost Location */}
                <td className="px-2 py-3 align-middle">
                  <TableInput placeholder="Cost Location" />
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
                  <TableInput placeholder="Account Code" />
                </td>

                {/* File Name */}
                <td className="px-3 py-4 align-middle">
                  <span className="text-[14px] text-[#424242] whitespace-nowrap">
                    {row.fileName ?? 'receipt.jpg'}
                  </span>
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
