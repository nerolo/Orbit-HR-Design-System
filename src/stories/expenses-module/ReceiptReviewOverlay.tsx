import React, { useRef } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ReceiptFile {
  id: string;
  filename: string;
  size: string;
  /** Optional preview image URL. Shows placeholder receipt paper if omitted. */
  previewUrl?: string;
}

export interface ReceiptReviewOverlayProps {
  /** List of uploaded receipt files to display */
  files?: ReceiptFile[];
  onClose?: () => void;
  onUploadMore?: () => void;
  onScan?: () => void;
  /** Called with the file id when user clicks reupload; triggers a file picker */
  onReupload?: (id: string, file: File) => void;
  /** Called with the file id when user confirms removal */
  onRemove?: (id: string) => void;
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 6 5.5 6 16 6" />
      <path d="M15 6l-.867 10.143A2 2 0 0 1 12.138 18H7.862a2 2 0 0 1-1.995-1.857L5 6" />
      <path d="M8 9.5v5M12 9.5v5" />
      <path d="M8.5 6V4.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V6" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1.5 4 1.5 9 6.5 9" />
      <path d="M3.51 14a8 8 0 1 0 .49-5.34L1.5 9" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
}

// ─── Receipt Card ─────────────────────────────────────────────────────────────

interface ReceiptCardProps {
  file: ReceiptFile;
  onReupload: (id: string, file: File) => void;
  onRemove: (id: string) => void;
}

function ReceiptCard({ file, onReupload, onRemove }: ReceiptCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleReuploadClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected) {
      onReupload(file.id, selected);
      e.target.value = '';
    }
  }

  function handleRemoveClick() {
    const confirmed = window.confirm(`Remove "${file.filename}"?`);
    if (confirmed) onRemove(file.id);
  }

  return (
    <div className="bg-white flex flex-col rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)] overflow-hidden shrink-0 w-[442px]" style={{ height: 646 }}>
      {/* Image Preview */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-[#e0e0e0]">
        {file.previewUrl ? (
          <img
            src={file.previewUrl}
            alt={`Preview of ${file.filename}`}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder receipt paper */
          <div className="relative flex items-center justify-center w-full h-full bg-[#e0e0e0]">
            <div
              className="bg-[#fffefb] flex flex-col items-center rounded-[1px] overflow-hidden shadow-[0px_2px_5px_0px_rgba(0,0,0,0.22)]"
              style={{ width: 200, height: 575, padding: '9px 11px', gap: 2, fontFamily: 'Inter, sans-serif' }}
            >
              <p className="font-bold text-[#1f1f1f] text-center w-full" style={{ fontSize: 8.5 }}>RECEIPT</p>
              <p className="text-[#6b6b6b] text-center w-full" style={{ fontSize: 6 }}>Upload a receipt image</p>
              <p className="text-[#adadad] w-full mt-1" style={{ fontSize: 5.5 }}>- - - - - - - - - - - - - - - - - - - - -</p>
              <div className="flex-1 flex items-center justify-center w-full">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <p className="text-[#adadad] w-full" style={{ fontSize: 5.5 }}>- - - - - - - - - - - - - - - - - - - - -</p>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between px-3 py-[10px] shrink-0 w-full">
        {/* File Info */}
        <div className="flex flex-col gap-px leading-[18px]">
          <p className="font-medium text-[#2d2a2b] text-[12px] whitespace-nowrap" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {file.filename}
          </p>
          <p className="font-normal text-[#999] text-[12px] whitespace-nowrap" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {file.size}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[6px] items-center">
          {/* Hidden file input for reupload */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={handleFileChange}
            aria-label={`Replace ${file.filename}`}
          />
          <button
            onClick={handleReuploadClick}
            title="Replace image"
            aria-label={`Replace ${file.filename}`}
            className="bg-[#f5f5f5] flex items-center justify-center rounded-[4px] size-[28px] text-[#625f64] hover:bg-[#e0e0e0] transition-colors"
          >
            <RefreshIcon />
          </button>
          <button
            onClick={handleRemoveClick}
            title="Remove"
            aria-label={`Remove ${file.filename}`}
            className="bg-[#fff0f0] flex items-center justify-center rounded-[4px] size-[28px] text-[#e53935] hover:bg-[#ffcdd2] transition-colors"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── ReceiptReviewOverlay ──────────────────────────────────────────────────────

const DEFAULT_FILES: ReceiptFile[] = [
  { id: '1', filename: 'taxi_receipt_oct12.jpg', size: '1.2 MB' },
  { id: '2', filename: 'hotel_invoice_oct13.pdf', size: '2.4 MB' },
  { id: '3', filename: 'dinner_receipt_oct14.jpg', size: '890 KB' },
  { id: '4', filename: 'flight_boarding_oct11.png', size: '1.8 MB' },
];

export function ReceiptReviewOverlay({
  files = DEFAULT_FILES,
  onClose,
  onUploadMore,
  onScan,
  onReupload,
  onRemove,
}: ReceiptReviewOverlayProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleUploadMore() {
    fileInputRef.current?.click();
    onUploadMore?.();
  }

  function handleFileAdd(e: React.ChangeEvent<HTMLInputElement>) {
    // In a real app, this would add the new files to the list
    e.target.value = '';
  }

  const handleReupload = (id: string, file: File) => {
    onReupload?.(id, file);
  };

  const handleRemove = (id: string) => {
    onRemove?.(id);
  };

  return (
    /* Backdrop */
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[100px] pb-10 overflow-y-auto" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      {/* Modal */}
      <div
        className="bg-[#f8f8f8] flex flex-col gap-5 rounded-[8px] overflow-hidden"
        style={{
          width: 980,
          padding: '28px 32px',
          boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.1), 0px 8px 32px -4px rgba(0,0,0,0.15)',
          fontFamily: 'Hanken Grotesk, sans-serif',
        }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1">
            <h2
              className="font-bold text-[#2d2a2b] tracking-[-0.24px]"
              style={{ fontSize: 24, lineHeight: '36px' }}
            >
              Review Uploaded Receipts
            </h2>
            <p className="font-normal text-[#625f64]" style={{ fontSize: 14, lineHeight: '21px' }}>
              {files.length} receipt{files.length !== 1 ? 's' : ''} uploaded. Review images for clarity before scanning.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="bg-[#f5f5f5] flex items-center justify-center rounded-[4px] size-9 text-[#625f64] hover:bg-[#e0e0e0] transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Divider */}
        <div className="bg-[#eeebe7] h-px w-full shrink-0" />

        {/* Receipt Grid */}
        <div className="flex flex-wrap gap-4 w-full">
          {files.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full py-16 text-[#999]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="text-[14px]">No receipts uploaded yet.</p>
            </div>
          ) : (
            files.map((file) => (
              <ReceiptCard
                key={file.id}
                file={file}
                onReupload={handleReupload}
                onRemove={handleRemove}
              />
            ))
          )}
        </div>

        {/* Divider */}
        <div className="bg-[#eeebe7] h-px w-full shrink-0" />

        {/* Modal Footer */}
        <div className="flex items-center justify-between w-full">
          {/* Upload More — neumorphic style */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.pdf"
            multiple
            className="hidden"
            onChange={handleFileAdd}
            aria-label="Upload more receipts"
          />
          <button
            onClick={handleUploadMore}
            className="bg-[#fafafa] flex items-center justify-center px-4 py-[10px] rounded-[8px] font-bold text-[#2d2a2b] uppercase tracking-wide transition-all hover:brightness-95"
            style={{
              fontSize: 12,
              lineHeight: '18px',
              boxShadow: '-1px -1px 2px 0px white, 2px 2px 5px 0px #d1d1d1',
            }}
          >
            Upload More
          </button>

          {/* Initiate Scan — primary CTA */}
          <button
            onClick={onScan}
            className="flex items-center justify-center h-12 px-5 py-3 rounded-[8px] font-bold text-[#f8f8f8] uppercase transition-all hover:brightness-95 active:scale-[0.98]"
            style={{
              fontSize: 14,
              lineHeight: '21px',
              backgroundColor: '#f1528b',
              boxShadow: '0px 4px 6px 0px rgba(233,30,99,0.2), 0px 2px 4px 0px rgba(233,30,99,0.2)',
            }}
          >
            Initiate Scan
          </button>
        </div>
      </div>
    </div>
  );
}
