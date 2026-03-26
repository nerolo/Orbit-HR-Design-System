import React from 'react';

function UploadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function PaperclipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

export interface UploadReceiptsProps {
  count?: number;
  onChooseFiles?: () => void;
}

export function UploadReceipts({ count = 14, onChooseFiles }: UploadReceiptsProps) {
  return (
    <div
      className="bg-[#f8f8f8] flex flex-col p-8 rounded-[2px] w-[443px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-center gap-[4px] mb-9">
        <UploadIcon />
        <span className="text-[10.5px] font-medium text-[#2d2a2b]">Upload Receipts</span>
      </div>

      {/* Count */}
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-[60px] font-bold text-[#2d2a2b] leading-none">{count}</span>
        <span className="text-[12px] font-light text-[#625f64]">Receipts Uploaded</span>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e0e0e0] mb-6" />

      {/* File upload */}
      <div className="flex flex-col gap-2">
        <button
          onClick={onChooseFiles}
          className="flex items-center gap-3 h-9 px-3 bg-[#f5f5f5] border border-[#efebe7] rounded-[6px] text-[14px] font-medium text-[#212121] w-fit"
          style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
        >
          <PaperclipIcon />
          Choose Files
        </button>
        <p className="text-[10.5px] font-medium text-[#2d2a2b]">
          Upload receipt images or PDF files. Multiple files supported.
        </p>
      </div>
    </div>
  );
}

export function UploadReceiptsOnBackground() {
  return (
    <div className="p-8 bg-[#f4f2f1]">
      <UploadReceipts />
    </div>
  );
}
