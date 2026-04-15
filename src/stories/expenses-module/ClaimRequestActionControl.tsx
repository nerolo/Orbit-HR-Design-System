import React from 'react';

export type ClaimRequestActionControlVariant = 'Staff' | 'Return' | 'Push NS' | 'Mgr approve';

export interface ClaimRequestActionControlProps {
  variant?: ClaimRequestActionControlVariant;
  totalReceipts?: number;
  totalHKD?: string;
  totalRMB?: string;
  returnSummary?: string;
  onSaveDraft?: () => void;
  onSubmit?: () => void;
  onReturn?: () => void;
  onPushToNetsuite?: () => void;
  onApprove?: () => void;
}

export function ClaimRequestActionControl({
  variant = 'Staff',
  totalReceipts = 4,
  totalHKD = 'HKD 58920.50',
  totalRMB = 'RMB 291.9',
  returnSummary = '1 Returned, 1 Rejected',
  onSaveDraft,
  onSubmit,
  onReturn,
  onPushToNetsuite,
  onApprove,
}: ClaimRequestActionControlProps) {
  const isReturn = variant === 'Return';
  const isPushNS = variant === 'Push NS';
  const isMgrApprove = variant === 'Mgr approve';
  const isStaff = variant === 'Staff';

  return (
    <div
      className="bg-[#f8f8f8] border border-[#eeeeee] rounded-[2px] p-[33px] w-full"
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
      }}
    >
      <div className="flex items-start justify-between">
        {/* Left: Receipt count */}
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-normal text-[#757575]">
            Total Receipt:{' '}
            <span>{isReturn ? 5 : totalReceipts}</span>
          </p>
          {isReturn && (
            <p
              className="text-[18px] font-medium"
              style={{ color: '#b60058', lineHeight: '27px' }}
            >
              {returnSummary}
            </p>
          )}
        </div>

        {/* Right: Amounts + Action buttons */}
        <div className="flex gap-4 items-center">
          {/* Amounts */}
          <div className="flex gap-4 items-start">
            <p className="text-[16px] font-bold text-[#625f64] whitespace-nowrap leading-6">
              Total Claims Amont:
            </p>
            <div className="flex flex-col gap-0.5">
              <p className="text-[16px] font-bold text-[#2d2a2b] leading-6 whitespace-nowrap">
                {isReturn ? '-' : totalHKD}
              </p>
              <p className="text-[16px] font-bold text-[#2d2a2b] leading-6 whitespace-nowrap">
                {isReturn ? '-' : totalRMB}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          {isStaff && (
            <>
              <button
                onClick={onSaveDraft}
                className="h-[48px] px-[14px] py-[8px] border border-[#625f64] bg-[#f5f5f5] rounded-[8px] text-[14px] font-bold text-[#625f64] uppercase tracking-wide hover:bg-[#e0e0e0] transition-colors"
              >
                Save Draft
              </button>
              <button
                onClick={onSubmit}
                className="h-[48px] px-[20px] py-[12px] bg-[#f1528b] rounded-[8px] text-[14px] font-bold text-[#f8f8f8] uppercase tracking-wide hover:bg-[#e04077] transition-colors"
                style={{ boxShadow: '0px 4px 6px -1px rgba(33,33,33,0.2), 0px 2px 4px -2px rgba(33,33,33,0.2)' }}
              >
                Submit Request
              </button>
            </>
          )}

          {isReturn && (
            <button
              onClick={onReturn}
              className="h-[48px] px-[20px] py-[12px] bg-[#f1528b] rounded-[8px] text-[14px] font-bold text-[#f8f8f8] uppercase tracking-wide hover:bg-[#e04077] transition-colors"
              style={{ boxShadow: '0px 4px 6px -1px rgba(33,33,33,0.2), 0px 2px 4px -2px rgba(33,33,33,0.2)' }}
            >
              Return for Revise
            </button>
          )}

          {isPushNS && (
            <button
              onClick={onPushToNetsuite}
              className="h-[48px] px-[20px] py-[12px] bg-[#f1528b] rounded-[8px] text-[14px] font-bold text-[#f8f8f8] uppercase tracking-wide hover:bg-[#e04077] transition-colors"
              style={{ boxShadow: '0px 4px 6px -1px rgba(33,33,33,0.2), 0px 2px 4px -2px rgba(33,33,33,0.2)' }}
            >
              Push to Netsuite
            </button>
          )}

          {isMgrApprove && (
            <button
              onClick={onApprove}
              className="h-[48px] px-[20px] py-[12px] bg-[#f1528b] rounded-[8px] text-[14px] font-bold text-[#f8f8f8] uppercase tracking-wide hover:bg-[#e04077] transition-colors"
              style={{ boxShadow: '0px 4px 6px -1px rgba(33,33,33,0.2), 0px 2px 4px -2px rgba(33,33,33,0.2)' }}
            >
              Approve Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
