import React from 'react';

export interface RejectClaimReasonProps {
  reviewerName?: string;
  reviewerDate?: string;
  reviewerAvatarUrl?: string;
  reason?: string;
}

export function RejectClaimReason({
  reviewerName = 'Ada Wong',
  reviewerDate = '21 March 2025',
  reviewerAvatarUrl,
  reason = 'Unfortunately, your claim request has been rejected due to insufficient documentation. We need more detailed evidence to support your case. Please review the requirements and resubmit with the necessary information.',
}: RejectClaimReasonProps) {
  return (
    <div
      className="bg-[#f8f8f8] flex flex-col gap-8 p-8 rounded-[2px] w-[514px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between">
        <p className="text-[14px] font-light text-[#212121] leading-[21px]">
          Reject Claim Request Reason
        </p>

        {/* Reviewer avatar + name + date */}
        <div className="flex items-center gap-3 shrink-0">
          {reviewerAvatarUrl ? (
            <img
              src={reviewerAvatarUrl}
              alt={reviewerName}
              className="w-[48px] h-[48px] rounded-[8px] object-cover"
            />
          ) : (
            <div className="w-[48px] h-[48px] rounded-[8px] bg-[#cfd8dc] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#607d8b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold text-[#212121] leading-6 whitespace-nowrap">
              {reviewerName}
            </span>
            <span className="text-[14px] font-medium text-[#757575] leading-6 whitespace-nowrap">
              {reviewerDate}
            </span>
          </div>
        </div>
      </div>

      {/* Reason text area */}
      <div className="border border-[#b0bec5] rounded-[8px] px-[12px] py-[12px] min-h-[156px]">
        <p className="text-[14px] font-normal text-[#212121] leading-[1.25]">
          {reason}
        </p>
      </div>
    </div>
  );
}

export function RejectClaimReasonOnBackground() {
  return (
    <div className="p-8 bg-[#f4f2f1]">
      <RejectClaimReason />
    </div>
  );
}
