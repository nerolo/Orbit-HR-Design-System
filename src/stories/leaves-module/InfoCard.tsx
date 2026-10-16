import React from 'react';

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#625f64" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#625f64" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#625f64" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export interface InfoCardProps {
  title?: string;
  value?: number | string;
  valueLabel?: string;
  meta?: string;
  layout?: 'single' | 'horizontal';
  icon?: 'chart' | 'calendar' | 'clock';
}

function IconComponent({ icon }: { icon: InfoCardProps['icon'] }) {
  if (icon === 'calendar') return <CalendarIcon />;
  if (icon === 'clock') return <ClockIcon />;
  return <ChartIcon />;
}

export function InfoCardSingle({
  title = 'Total Employees',
  value = 245,
  valueLabel = 'active',
  meta = 'Across all locations',
  layout = 'single',
  icon = 'chart',
}: InfoCardProps) {
  if (layout === 'horizontal') {
    return (
      <div
        className="flex items-center justify-between bg-[#f8f8f8] px-6 py-5 w-[400px] h-[100px]"
        style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
      >
        <div className="flex items-center gap-2">
          <IconComponent icon={icon} />
          <span className="text-[18px] font-medium text-[#2d2a2b] leading-[30px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {title}
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-[48px] font-bold text-[#2d2a2b] leading-[60px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {value}
          </span>
          <span className="text-[14px] font-medium text-[#625f64] leading-[16px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {valueLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col justify-between bg-[#f8f8f8] px-6 py-5 h-[200px] w-[286px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
    >
      <div className="flex items-center gap-2">
        <IconComponent icon={icon} />
        <span className="text-[18px] font-medium text-[#2d2a2b] leading-[30px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          {title}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-2">
          <span className="text-[48px] font-bold text-[#2d2a2b] leading-[60px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {value}
          </span>
          <span className="text-[14px] font-medium text-[#625f64] leading-[16px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            {valueLabel}
          </span>
        </div>
        <span className="text-[12px] font-medium text-[#625f64] leading-[21px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          {meta}
        </span>
      </div>
    </div>
  );
}

// Two-slot variant (stacked) — kept as-is for demo
export function InfoCardTwoSlot() {
  return (
    <div
      className="flex flex-col justify-between bg-[#f8f8f8] px-6 py-5 h-[200px] w-[286px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
    >
      <div className="flex items-center gap-2">
        <CalendarIcon />
        <span className="text-[18px] font-medium text-[#2d2a2b] leading-[30px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Leave Balance
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-[12px] font-medium text-[#625f64]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Annual</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[30px] font-bold text-[#2d2a2b] leading-[40px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>12</span>
            <span className="text-[14px] font-medium text-[#625f64]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>/ 15 days</span>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[12px] font-medium text-[#625f64]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Sick Leave</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[30px] font-bold text-[#2d2a2b] leading-[40px]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>2</span>
            <span className="text-[14px] font-medium text-[#625f64]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>/ 2 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InfoCardHorizontal() {
  return <InfoCardSingle title="Pending Leaves" value={12} valueLabel="awaiting approval" layout="horizontal" icon="clock" />;
}

export function InfoCardAllVariants() {
  return (
    <div className="flex flex-col gap-8 p-6 bg-[#f4f2f1]">
      <div>
        <p className="text-[12px] text-[#625f64] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Single Data</p>
        <InfoCardSingle />
      </div>
      <div>
        <p className="text-[12px] text-[#625f64] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Two Slots</p>
        <InfoCardTwoSlot />
      </div>
      <div>
        <p className="text-[12px] text-[#625f64] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>Horizontal</p>
        <InfoCardHorizontal />
      </div>
    </div>
  );
}
