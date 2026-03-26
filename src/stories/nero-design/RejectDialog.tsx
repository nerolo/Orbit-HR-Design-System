import React from 'react';

export interface RejectDialogProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  onCancel?: () => void;
  onReject?: (reason: string) => void;
}

export function RejectDialog({
  title = 'Reject Expense Item',
  subtitle = 'Please provide a reason for rejecting the expense item.',
  placeholder = 'Enter rejection message',
  onCancel,
  onReject,
}: RejectDialogProps) {
  const [reason, setReason] = React.useState('');

  return (
    <div
      className="bg-white flex flex-col gap-6 p-6 rounded-[8px] w-[421px]"
      style={{
        boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.1), 0px 2px 4px 0px rgba(0,0,0,0.1)',
        fontFamily: 'Hanken Grotesk, sans-serif',
      }}
    >
      {/* Content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-[21px] font-bold text-[#212121] tracking-[-0.21px] leading-[36px]">{title}</h2>
        <p className="text-[14px] font-normal text-[#607d8b] leading-[21px]">{subtitle}</p>

        {/* Textarea */}
        <div className="mt-2">
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder={placeholder}
            rows={5}
            className="w-full border border-[#cfd8dc] rounded-[8px] px-3 py-3 text-[14px] text-[#212121] bg-transparent outline-none resize-none placeholder-[#90a4ae]"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-6">
        <button
          onClick={onCancel}
          className="text-[10.5px] font-bold text-[#263238] uppercase tracking-wide bg-transparent"
        >
          cancel
        </button>
        <button
          onClick={() => onReject?.(reason)}
          className="h-10 px-4 bg-[#f1528b] text-white text-[10.5px] font-bold uppercase rounded-[8px]"
          style={{ boxShadow: '0px 4px 6px -1px rgba(244,67,54,0.2), 0px 2px 4px -2px rgba(244,67,54,0.2)' }}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export function RejectDialogOnBackground() {
  return (
    <div className="p-8 bg-[#f4f2f1]">
      <RejectDialog />
    </div>
  );
}
