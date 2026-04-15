import React from 'react';

function LightningBoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d2a2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function CurrencyDollarIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#625f64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M15 9.5a3 3 0 0 0-6 0c0 2 6 2.5 6 5a3 3 0 0 1-6 0" />
    </svg>
  );
}

function DocumentTextIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#625f64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  );
}

function DocumentIcon({ color = '#ffffff' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  );
}

function UserIcon({ color = '#ffffff' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CheckCircleIcon({ color = '#ffffff' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export type ProgressStep = 'Draft' | 'Manager' | 'Finance';

export interface ClaimToolsProps {
  currentStep?: ProgressStep;
  onRates?: () => void;
  onRules?: () => void;
}

const STEPS: { label: ProgressStep; icon: (active: boolean) => React.ReactNode }[] = [
  { label: 'Draft',   icon: (a) => <DocumentIcon color={a ? '#ffffff' : '#90a4ae'} /> },
  { label: 'Manager', icon: (a) => <UserIcon color={a ? '#ffffff' : '#90a4ae'} /> },
  { label: 'Finance', icon: (a) => <CheckCircleIcon color={a ? '#ffffff' : '#90a4ae'} /> },
];

export function ClaimTools({ currentStep = 'Manager', onRates, onRules }: ClaimToolsProps) {
  const currentIndex = STEPS.findIndex(s => s.label === currentStep);

  return (
    <div
      className="bg-[#f8f8f8] flex flex-col rounded-[4px] p-8 w-[422px]"
      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      {/* Progress header */}
      <div className="flex items-center gap-1 mb-4">
        <LightningBoltIcon />
        <span className="text-[12px] font-medium text-[#2d2a2b]">Progress</span>
      </div>

      {/* Tool buttons */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={onRates}
          className="flex flex-col items-center justify-between p-[13px] bg-[#f5f5f5] rounded-[4px] size-[91px] hover:bg-[#eeeeee] transition-colors"
          style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)' }}
        >
          <CurrencyDollarIcon />
          <span className="text-[11.5px] font-normal text-[#625f64] tracking-wide">RATES</span>
        </button>

        <button
          onClick={onRules}
          className="flex flex-col items-center justify-between p-[13px] bg-[#f5f5f5] rounded-[4px] size-[91px] hover:bg-[#eeeeee] transition-colors"
          style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)' }}
        >
          <DocumentTextIcon />
          <span className="text-[11.5px] font-normal text-[#625f64] tracking-wide">RULES</span>
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e0e0e0] mb-4" />

      {/* Progress stepper */}
      <div className="flex items-center justify-between px-4 py-4 bg-[#f8f8f8] rounded-[4px]">
        {STEPS.map((step, i) => {
          const isComplete = i < currentIndex;
          const isCurrent = i === currentIndex;
          const isActive = isComplete || isCurrent;
          const bgColor = isActive ? '#212121' : '#cfd8dc';
          const textColor = isActive ? '#212121' : '#90a4ae';

          return (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="flex items-center justify-center rounded-[4px] size-[32px]"
                  style={{ backgroundColor: bgColor }}
                >
                  {step.icon(isActive)}
                </div>
                <span
                  className="text-[14px] font-bold whitespace-nowrap"
                  style={{ color: textColor }}
                >
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="flex-1 h-[4px] mx-2 rounded-[12px]"
                  style={{ backgroundColor: isComplete ? '#212121' : '#eceff1' }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export function ClaimToolsOnBackground() {
  return (
    <div className="p-8 bg-[#f4f2f1]">
      <ClaimTools />
    </div>
  );
}
