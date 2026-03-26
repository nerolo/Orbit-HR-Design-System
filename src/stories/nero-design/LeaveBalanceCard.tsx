import React from 'react';

interface LeaveItem {
  label: string;
  used: number;
  total: number | null;
  icon: React.ReactNode;
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f1528b">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f1528b">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f1528b" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function BanknotesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f1528b" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  );
}

const LEAVE_ITEMS: LeaveItem[] = [
  { label: 'Annual Leave',    used: 12, total: 15,   icon: <SunIcon /> },
  { label: 'Paid Sick Leave', used: 2,  total: 2,    icon: <HeartIcon /> },
  { label: 'Casual Leave',    used: 0,  total: 5,    icon: <CalendarIcon /> },
  { label: 'Maternity Leave', used: 10, total: 10,   icon: <HeartIcon /> },
  { label: 'Unpaid Leave',    used: 1,  total: null, icon: <BanknotesIcon /> },
];

function LeaveRow({ item }: { item: LeaveItem }) {
  const pct = item.total ? Math.round((item.used / item.total) * 100) : 50;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>{item.icon}</span>
          <span
            className="text-[14px] font-normal text-[#212121] leading-[21px]"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
          >
            {item.label}
          </span>
        </div>
        <span
          className="text-[12px] font-bold leading-[21px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          <span className="text-[#b60058]">{item.used}</span>
          <span className="text-[#212121]"> / {item.total ?? '—'}</span>
        </span>
      </div>
      {/* Progress bar */}
      <div className="h-2 rounded-full bg-[#e0e0e0] overflow-hidden">
        <div
          className="h-full rounded-full bg-[#b60058]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function LeaveBalanceCard() {
  const totalRemaining = LEAVE_ITEMS.reduce((acc, item) => {
    return acc + (item.total ? item.total - item.used : 0);
  }, 0);

  return (
    <div
      className="bg-[#f8f8f8] w-[348px]"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)' }}
    >
      {/* Leave rows */}
      <div className="flex flex-col gap-4 px-4 py-3 border-b border-[#efebe7]">
        {LEAVE_ITEMS.map((item) => (
          <LeaveRow key={item.label} item={item} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-baseline gap-2 px-6 py-4 border-t border-[#efebe7]">
        <span
          className="text-[30px] font-bold text-[#212121] leading-[40px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          {totalRemaining}
        </span>
        <span
          className="text-[16px] font-normal text-[#625f64] leading-[27px]"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
        >
          days remaining
        </span>
      </div>
    </div>
  );
}

export function LeaveBalanceCardOnBackground() {
  return (
    <div className="p-8 bg-[#f4f2f1]">
      <LeaveBalanceCard />
    </div>
  );
}
