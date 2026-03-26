import React from 'react';

function CheckIcon({ color = '#bdbdbd' }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ReturnIcon({ color = '#bdbdbd' }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 14 4 9 9 4" />
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

export type ApprovalStatus = 'default' | 'approved' | 'returned';

export interface ApprovalButtonProps {
  status?: ApprovalStatus;
  size?: 'default' | 'mini';
  onApprove?: () => void;
  onReturn?: () => void;
}

export function ApprovalButton({
  status = 'default',
  size = 'default',
  onApprove,
  onReturn,
}: ApprovalButtonProps) {
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
  const returnColor = status === 'returned' ? '#ffb300' : '#bdbdbd';

  return (
    <div className={`inline-flex items-center ${gap} ${padding} rounded-[4px]`}
      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
      {/* Approve button */}
      <button
        onClick={onApprove}
        className={`${btnSize} ${approveHighlight} flex flex-col items-center justify-center rounded-[2px] cursor-pointer transition-all`}
      >
        {status === 'approved' && (
          <div className="w-[4px] h-[4px] rounded-full bg-[#aed581] shadow-[0px_0px_4px_0px_#62ff00] mb-1" />
        )}
        <CheckIcon color={approveColor} />
        {!isMini && (
          <span className="text-[9px] font-medium mt-1 text-[#bdbdbd] uppercase tracking-wide">Approve</span>
        )}
      </button>

      {/* Return button */}
      <button
        onClick={onReturn}
        className={`${btnSize} ${returnHighlight} flex flex-col items-center justify-center rounded-[2px] cursor-pointer transition-all`}
      >
        {status === 'returned' && (
          <div className="w-[4px] h-[4px] rounded-full bg-[#ffb300] shadow-[0px_0px_4px_0px_#ffb300] mb-1" />
        )}
        <ReturnIcon color={returnColor} />
        {!isMini && (
          <span className="text-[9px] font-medium mt-1 text-[#bdbdbd] uppercase tracking-wide">Return</span>
        )}
      </button>
    </div>
  );
}

export function ApprovalButtonAllStates() {
  return (
    <div className="flex flex-col gap-6 p-6" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
      <div>
        <p className="text-[11px] text-[#78909c] mb-3 uppercase tracking-wide">Default</p>
        <ApprovalButton status="default" />
      </div>
      <div>
        <p className="text-[11px] text-[#78909c] mb-3 uppercase tracking-wide">Approved</p>
        <ApprovalButton status="approved" />
      </div>
      <div>
        <p className="text-[11px] text-[#78909c] mb-3 uppercase tracking-wide">Returned</p>
        <ApprovalButton status="returned" />
      </div>
      <div>
        <p className="text-[11px] text-[#78909c] mb-3 uppercase tracking-wide">Mini — Default</p>
        <ApprovalButton size="mini" status="default" />
      </div>
      <div>
        <p className="text-[11px] text-[#78909c] mb-3 uppercase tracking-wide">Mini — Approved</p>
        <ApprovalButton size="mini" status="approved" />
      </div>
    </div>
  );
}
