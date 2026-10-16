import React, { useState } from 'react';

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
  const [isGroupHovered, setIsGroupHovered] = useState(false);
  const isMini = size === 'mini';

  const approveColor = status === 'approved' ? '#aed581' : '#bdbdbd';
  const returnColor  = status === 'returned'  ? '#ffb300' : '#bdbdbd';

  // Container styles — neumorphic inset on hover
  const containerStyle: React.CSSProperties = {
    fontFamily: 'Hanken Grotesk, sans-serif',
    backgroundColor: isGroupHovered ? '#f4f2f1' : 'transparent',
    boxShadow: isGroupHovered
      ? 'inset 1px 1px 5px 0px #c5c5c5, inset -1px -1px 5px 0px white'
      : 'none',
    transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
  };

  // Per-button styles — neumorphic raised on group hover
  const getBtnStyle = (activeBg: string): React.CSSProperties => ({
    backgroundColor: activeBg,
    boxShadow: isGroupHovered
      ? '2px 2px 5px 0px #d1d1d1, -1px -1px 2px 0px white'
      : '0px 1px 2px 0px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.15s ease',
  });

  if (isMini) {
    return (
      <div
        className="inline-flex items-center gap-[4px] p-[8px] rounded-[4px]"
        style={containerStyle}
        onMouseEnter={() => setIsGroupHovered(true)}
        onMouseLeave={() => setIsGroupHovered(false)}
      >
        {/* Approve mini */}
        <button
          onClick={onApprove}
          className="w-[62px] h-[36px] flex items-center justify-between px-[12px] py-[16px] rounded-[2px] cursor-pointer"
          style={getBtnStyle('#f8f8f8')}
        >
          <div
            className="w-[2px] h-[2px] rounded-[1.2px]"
            style={{
              backgroundColor: status === 'approved' ? '#aed581' : '#e57373',
              boxShadow: status === 'approved'
                ? '0px 0px 3px 0px #62ff00'
                : '0px 0px 3px 0px #ff5c00',
            }}
          />
          <CheckIcon color={approveColor} />
        </button>

        {/* Return mini */}
        <button
          onClick={onReturn}
          className="w-[62px] h-[36px] flex items-center justify-between px-[12px] py-[16px] rounded-[2px] cursor-pointer"
          style={getBtnStyle('#f8f8f8')}
        >
          <div
            className="w-[2px] h-[2px] rounded-[1.2px]"
            style={{
              backgroundColor: '#e57373',
              boxShadow: '0px 0px 3px 0px #ff5c00',
            }}
          />
          <ReturnIcon color={returnColor} />
        </button>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-[8px] p-[12px] rounded-[4px]"
      style={containerStyle}
      onMouseEnter={() => setIsGroupHovered(true)}
      onMouseLeave={() => setIsGroupHovered(false)}
    >
      {/* Return button */}
      <button
        onClick={onReturn}
        className="w-[62px] h-[100px] flex flex-col items-center justify-between px-[4px] py-[16px] rounded-[2px] cursor-pointer"
        style={getBtnStyle(status === 'returned' ? '#fff8e1' : '#fafafa')}
      >
        <div
          className="w-[2px] h-[2px] rounded-[1.2px]"
          style={{
            backgroundColor: status === 'returned' ? '#ffb300' : '#bdbdbd',
            boxShadow: status === 'returned' ? '0px 0px 3px 0px #ffb300' : 'none',
          }}
        />
        <ReturnIcon color={returnColor} />
        <span className="text-[9px] font-medium uppercase tracking-[0.5px]" style={{ color: returnColor }}>
          Return
        </span>
      </button>

      {/* Approve button */}
      <button
        onClick={onApprove}
        className="w-[62px] h-[100px] flex flex-col items-center justify-between px-[4px] py-[16px] rounded-[2px] cursor-pointer"
        style={getBtnStyle(status === 'approved' ? '#f1f8e9' : '#fafafa')}
      >
        <div
          className="w-[2px] h-[2px] rounded-[1.2px]"
          style={{
            backgroundColor: status === 'approved' ? '#aed581' : '#bdbdbd',
            boxShadow: status === 'approved'
              ? '0px 0px 4px 0px #62ff00'
              : 'none',
          }}
        />
        <CheckIcon color={approveColor} />
        <span className="text-[9px] font-medium uppercase tracking-[0.5px]" style={{ color: approveColor }}>
          Approve
        </span>
      </button>
    </div>
  );
}

export function ApprovalButtonAllStates() {
  return (
    <div className="flex flex-col gap-6 p-6" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
      <div>
        <p className="text-[11px] text-[#78909c] mb-3 uppercase tracking-wide">Default (hover over it)</p>
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
