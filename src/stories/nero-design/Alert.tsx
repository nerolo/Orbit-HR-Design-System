import React from 'react';

function ExclamationIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        fill={color}
      />
    </svg>
  );
}

export interface AlertProps {
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  color?: string;
}

export function AlertDefault({
  title = 'March 1st Readiness: 31 days remaining',
  subtitle = '87 days scheduled for forfeiture company-wide. Review high-risk employees.',
  actionLabel = 'Review',
  color = '#ef5350',
}: AlertProps) {
  return (
    <div className="relative w-full rounded-tr-[8px] rounded-br-[8px] overflow-hidden">
      <div className="absolute inset-0 opacity-20 rounded-tr-[8px] rounded-br-[8px]" style={{ backgroundColor: color }} />
      <div className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: color }} />
      <div className="relative flex items-center gap-3 pl-5 pr-4 py-[7px]">
        <span className="shrink-0"><ExclamationIcon color={color} /></span>
        <div className="flex flex-col flex-1 min-w-0">
          <p
            className="text-[14px] font-semibold leading-[1.5]"
            style={{ fontFamily: 'Roboto, sans-serif', color }}
          >
            {title}
          </p>
          <p
            className="text-[12px] font-normal whitespace-nowrap"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif', color }}
          >
            {subtitle}
          </p>
        </div>
        <button
          className="shrink-0 h-[36px] px-4 border rounded-[6px] bg-[#fafafa] text-[14px] font-medium whitespace-nowrap"
          style={{ fontFamily: 'Roboto, sans-serif', borderColor: color, color }}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

export function AlertDismissed() {
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return (
      <div className="flex items-center gap-2 text-[12px] text-[#625f64]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
        <span>Alert dismissed.</span>
        <button className="underline text-[#ef5350]" onClick={() => setVisible(true)}>Show again</button>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-tr-[8px] rounded-br-[8px] overflow-hidden">
      <div className="absolute inset-0 bg-[#ef5350] opacity-20 rounded-tr-[8px] rounded-br-[8px]" />
      <div className="absolute inset-y-0 left-0 w-1 bg-[#ef5350]" />
      <div className="relative flex items-center gap-3 pl-5 pr-4 py-[7px]">
        <span className="shrink-0"><ExclamationIcon color="#ef5350" /></span>
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-[14px] font-semibold text-[#ef5350] leading-[1.5]" style={{ fontFamily: 'Roboto, sans-serif' }}>
            March 1st Readiness: 31 days remaining
          </p>
          <p className="text-[12px] font-normal text-[#f44336]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            87 days scheduled for forfeiture company-wide. Review high-risk employees.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            className="h-[36px] px-4 border border-[#f44336] rounded-[6px] bg-[#fafafa] text-[#f44336] text-[14px] font-medium"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Review
          </button>
          <button onClick={() => setVisible(false)} className="text-[#ef5350] hover:opacity-70 ml-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
