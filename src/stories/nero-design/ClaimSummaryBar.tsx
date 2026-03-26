import React from 'react';

export interface ClaimAmount {
  currency: string;
  amount: string;
}

export interface ClaimSummaryBarProps {
  totalReceipts?: number;
  approvedCount?: number;
  amounts?: ClaimAmount[];
  onPushToNetsuite?: () => void;
}

export function ClaimSummaryBar({
  totalReceipts = 4,
  approvedCount = 1,
  amounts = [
    { currency: 'HKD', amount: '58920.50' },
    { currency: 'RMB', amount: '291.9' },
  ],
  onPushToNetsuite,
}: ClaimSummaryBarProps) {
  return (
    <div
      className="bg-[#f8f8f8] border border-[#eeeeee] flex items-center justify-between px-8 py-5 rounded-[2px] w-full"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      {/* Left: status */}
      <div className="flex flex-col gap-0.5">
        <p className="text-[12px] font-normal text-[#757575] leading-[21px]">
          Total {totalReceipts} Receipts
        </p>
        <p className="text-[16px] font-medium text-[#f1528b] leading-[27px]">
          {approvedCount}/{totalReceipts} Approved
        </p>
      </div>

      {/* Right: amounts + action */}
      <div className="flex items-center gap-4">
        <div className="flex items-start gap-2">
          <p className="text-[14px] font-bold text-[#2d2a2b] leading-[21px] whitespace-nowrap">
            Total Claims Amount:
          </p>
          <div className="flex flex-col gap-0.5">
            {amounts.map((a) => (
              <p key={a.currency} className="text-[14px] font-bold text-[#2d2a2b] leading-[21px] whitespace-nowrap">
                {a.currency} {a.amount}
              </p>
            ))}
          </div>
        </div>

        <button
          onClick={onPushToNetsuite}
          className="h-12 px-5 bg-[#f1528b] text-[#f8f8f8] text-[12px] font-bold uppercase rounded-[8px] whitespace-nowrap"
          style={{ boxShadow: '0px 4px 6px -1px rgba(33,33,33,0.2), 0px 2px 4px -2px rgba(33,33,33,0.2)' }}
        >
          Push to Netsuite
        </button>
      </div>
    </div>
  );
}

export function ClaimSummaryBarOnBackground() {
  return (
    <div className="p-8 bg-[#f4f2f1]">
      <ClaimSummaryBar />
    </div>
  );
}
