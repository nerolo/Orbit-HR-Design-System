import React from 'react';

export interface ClaimField {
  label: string;
  value: string;
}

export type ClaimStatus = 'Pending' | 'Approved' | 'Rejected' | 'Return' | 'Draft' | 'Completed';

const STATUS_CHIP: Record<ClaimStatus, { bg: string; text: string }> = {
  Pending:   { bg: '#ffb300', text: '#212121' },
  Approved:  { bg: '#9ccc65', text: '#ffffff' },
  Rejected:  { bg: '#ef5350', text: '#ffffff' },
  Return:    { bg: '#ffc107', text: '#2d2a2b' },
  Draft:     { bg: '#eceff1', text: '#212121' },
  Completed: { bg: '#9ccc65', text: '#ffffff' },
};

export interface ClaimRequestDetailsProps {
  title?: string;
  status?: ClaimStatus;
  fields?: ClaimField[];
}

const defaultFields: ClaimField[] = [
  { label: 'User Name', value: 'John Wang' },
  { label: 'Company name', value: 'Concept 4 Ltd' },
  { label: 'Office Location', value: 'HK Office' },
  { label: 'Created Date', value: '19 Oct 2026' },
];

export function ClaimRequestDetails({
  title = 'Expense Reimbursement Request',
  status = 'Pending',
  fields = defaultFields,
}: ClaimRequestDetailsProps) {
  const chip = STATUS_CHIP[status];

  return (
    <div
      className="bg-[#f8f8f8] flex flex-col p-8 rounded-[2px] w-[672px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      {/* Title block */}
      <div className="flex flex-col gap-1 mb-8">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-normal text-[#625f64] uppercase tracking-wide leading-[21px]">
            Expense Claim Title
          </p>
          <span
            className="inline-flex items-center h-[24px] px-[8px] py-[4px] rounded-[4px] text-[12px] font-bold whitespace-nowrap"
            style={{ backgroundColor: chip.bg, color: chip.text }}
          >
            {status}
          </span>
        </div>
        <h2 className="text-[21px] font-medium text-[#2d2a2b] leading-[36px] tracking-[-0.01em]">
          {title}
        </h2>
      </div>

      {/* Fields grid */}
      <div className="flex flex-wrap gap-8">
        {fields.map((field) => (
          <div key={field.label} className="flex flex-col gap-1 min-w-[200px]">
            <p className="text-[12px] font-light text-[#625f64] leading-[21px]">{field.label}</p>
            <p className="text-[21px] font-medium text-[#2d2a2b] leading-[36px]">{field.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClaimRequestDetailsOnBackground() {
  return (
    <div className="p-8 bg-[#f4f2f1]">
      <ClaimRequestDetails />
    </div>
  );
}
