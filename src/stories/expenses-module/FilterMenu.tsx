import React, { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ClaimFilterStatus =
  | 'Draft'
  | 'Pending'
  | 'Manager Approved'
  | 'Return'
  | 'Rejected'
  | 'Complete';

export interface FilterMenuProps {
  defaultStatuses?: ClaimFilterStatus[];
  defaultName?: string;
  defaultFromDate?: Date;
  defaultToDate?: Date;
  onChange?: (filters: {
    statuses: ClaimFilterStatus[];
    name: string;
    fromDate: Date | null;
    toDate: Date | null;
  }) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const ALL_STATUSES: ClaimFilterStatus[] = [
  'Draft',
  'Pending',
  'Manager Approved',
  'Return',
  'Rejected',
  'Complete',
];

const NAMES = ['Ada Wong', 'John Smith', 'Mary Lee', 'Tom Chan', 'Priya Patel'];
const DAYS  = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(d: Date) {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Returns flat 7-col grid. Negative = prev-month day, null = next-month blank. */
function calGrid(year: number, month: number): (number | null)[] {
  const first      = new Date(year, month, 1).getDay();
  const daysIn     = new Date(year, month + 1, 0).getDate();
  const prevDays   = new Date(year, month, 0).getDate();
  const offset     = (first + 6) % 7;          // Mon = 0
  const grid: (number | null)[] = [];
  for (let i = offset - 1; i >= 0; i--) grid.push(-(prevDays - i));
  for (let d = 1; d <= daysIn; d++) grid.push(d);
  while (grid.length % 7) grid.push(null);
  return grid;
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear()
      && a.getMonth()    === b.getMonth()
      && a.getDate()     === b.getDate();
}

function inRange(d: Date, a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  const t = d.getTime();
  const [lo, hi] = a < b ? [a.getTime(), b.getTime()] : [b.getTime(), a.getTime()];
  return t > lo && t < hi;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#90a4ae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="#f1528b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="#f1528b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── FilterMenu ───────────────────────────────────────────────────────────────

export function FilterMenu({
  defaultStatuses = [],
  defaultName     = '',
  defaultFromDate,
  defaultToDate,
  onChange,
}: FilterMenuProps) {
  const [statuses,   setStatuses]   = useState<ClaimFilterStatus[]>(defaultStatuses);
  const [name,       setName]       = useState(defaultName);
  const [nameOpen,   setNameOpen]   = useState(false);
  const [fromDate,   setFromDate]   = useState<Date | null>(defaultFromDate ?? null);
  const [toDate,     setToDate]     = useState<Date | null>(defaultToDate   ?? null);
  const [hover,      setHover]      = useState<Date | null>(null);
  const [picking,    setPicking]    = useState<'from' | 'to'>('from');

  const now = new Date();
  const [yr,  setYr]  = useState(defaultFromDate?.getFullYear() ?? now.getFullYear());
  const [mo,  setMo]  = useState(defaultFromDate?.getMonth()    ?? now.getMonth());

  const grid  = calGrid(yr, mo);
  const weeks = Array.from({ length: grid.length / 7 }, (_, i) => grid.slice(i * 7, i * 7 + 7));
  const effectiveTo = toDate ?? (picking === 'to' && hover ? hover : null);

  function toggleStatus(s: ClaimFilterStatus) {
    const next = statuses.includes(s) ? statuses.filter(x => x !== s) : [...statuses, s];
    setStatuses(next);
    onChange?.({ statuses: next, name, fromDate, toDate });
  }

  function pickDay(day: number) {
    const d = new Date(yr, mo, day);
    if (picking === 'from' || (fromDate && toDate)) {
      setFromDate(d); setToDate(null); setPicking('to');
      onChange?.({ statuses, name, fromDate: d, toDate: null });
    } else {
      setToDate(d); setPicking('from');
      onChange?.({ statuses, name, fromDate, toDate: d });
    }
  }

  function prevMo() { mo === 0 ? (setMo(11), setYr(y => y - 1)) : setMo(m => m - 1); }
  function nextMo() { mo === 11 ? (setMo(0), setYr(y => y + 1)) : setMo(m => m + 1); }

  return (
    /*
     * Outer card
     * Figma: w-[428px] p-[24px] gap-[16px] rounded-[2px] bg-[#f8f8f8]
     * We use min-w-[428px] per user request
     */
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 16,                     // ← gap-[16px] from updated Figma
        alignItems: 'flex-start',
        padding: 24,                 // ← p-[24px]
        minWidth: 428,               // ← min-w-[428px]
        borderRadius: 2,             // ← rounded-[2px]
        backgroundColor: '#f8f8f8',
        boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.1), 0px 2px 4px 0px rgba(0,0,0,0.1)',
        position: 'relative',
      }}
    >

      {/* ══ Requested Status heading ══ */}
      {/* Figma: text-[16px] font-light leading-[21px] color #2d2a2b */}
      <p style={{ fontSize: 16, fontWeight: 300, lineHeight: '21px', color: '#2d2a2b',
                  margin: 0, whiteSpace: 'nowrap' }}>
        Requested Status
      </p>

      {/* ══ Checkbox list ══ */}
      {/* Figma: flex-col gap-[16px] py-[8px] rounded-[8px] w-full */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16,
                    paddingTop: 8, paddingBottom: 8, borderRadius: 8, width: '100%' }}>
        {ALL_STATUSES.map(s => {
          const checked = statuses.includes(s);
          return (
            /* Figma: h-[21px] items-start rounded-[4px] */
            <div key={s}
              onClick={() => toggleStatus(s)}
              style={{ display: 'flex', alignItems: 'flex-start', height: 21,
                       borderRadius: 4, cursor: 'pointer' }}
            >
              {/* Figma inner: flex gap-[8px] items-start */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                {/* Checkbox box: size-[18px] rounded-[4px] border #cfd8dc */}
                <div style={{
                  width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                  border: `1px solid ${checked ? '#f1528b' : '#cfd8dc'}`,
                  backgroundColor: checked ? '#f1528b' : '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background-color 0.1s ease, border-color 0.1s ease',
                }}>
                  {checked && (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                      stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="10 3 5 9 2 6" />
                    </svg>
                  )}
                </div>
                {/* Label: text-[12px] font-medium leading-[18px] #2d2a2b */}
                <span style={{ fontSize: 12, fontWeight: 500, lineHeight: '18px',
                               color: '#2d2a2b', whiteSpace: 'nowrap' }}>
                  {s}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ══ Requested By heading ══ */}
      <p style={{ fontSize: 16, fontWeight: 300, lineHeight: '21px', color: '#2d2a2b',
                  margin: 0, whiteSpace: 'nowrap' }}>
        Requested By
      </p>

      {/* ══ Name input ══ */}
      {/* Figma: h-[45px] border #b0bec5 rounded-[8px] pr-[16px] py-[12px] px-[12px] */}
      <div style={{ position: 'relative', width: '100%', flexShrink: 0 }}>
        <button
          onClick={() => setNameOpen(o => !o)}
          style={{
            width: '100%', height: 45, display: 'flex', alignItems: 'center',
            paddingTop: 12, paddingBottom: 12, paddingLeft: 12, paddingRight: 16,
            borderRadius: 8, border: '1px solid #b0bec5',
            backgroundColor: 'transparent', cursor: 'pointer', boxSizing: 'border-box',
          }}
        >
          <span style={{ flex: 1, textAlign: 'left', fontSize: 16, fontWeight: 300,
                         lineHeight: '21px', color: name ? '#2d2a2b' : '#90a4ae' }}>
            {name || 'Name'}
          </span>
          <ChevronDown />
        </button>

        {nameOpen && (
          <div style={{
            position: 'absolute', zIndex: 10, top: '100%', left: 0, right: 0, marginTop: 4,
            borderRadius: 8, backgroundColor: 'white', border: '1px solid #cfd8dc',
            overflow: 'hidden', boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.1)',
          }}>
            {NAMES.map(n => (
              <button key={n}
                onClick={() => { setName(n); setNameOpen(false); onChange?.({ statuses, name: n, fromDate, toDate }); }}
                style={{ width: '100%', textAlign: 'left', padding: '10px 12px',
                         fontSize: 14, color: '#2d2a2b', background: 'transparent',
                         border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f8e9ed')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ══ Date range heading ══ */}
      <p style={{ fontSize: 16, fontWeight: 300, lineHeight: '21px', color: '#2d2a2b',
                  margin: 0, whiteSpace: 'nowrap' }}>
        Date range
      </p>

      {/* ══ From / To chips ══ */}
      {/* Figma: flex items-center justify-between w-full whitespace-nowrap */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', flexShrink: 0, whiteSpace: 'nowrap' }}>

        {/* FROM chip: w-[168px] flex-col gap-[8px] px-[16px] py-[8px] rounded-[8px] bg-[#f8e9ed] overflow-clip */}
        <div
          onClick={() => { setToDate(null); setPicking('from'); }}
          style={{ backgroundColor: '#f8e9ed', display: 'flex', flexDirection: 'column',
                   gap: 8, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8,
                   borderRadius: 8, width: 168, overflow: 'hidden', cursor: 'pointer', flexShrink: 0 }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#757575',
                      textTransform: 'uppercase', margin: 0 }}>From</p>
          <p style={{ fontSize: 16, fontWeight: 400, lineHeight: '21px', color: '#2d2a2b', margin: 0 }}>
            {fromDate ? fmt(fromDate) : '—'}
          </p>
        </div>

        {/* Dash separator */}
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: '21px', color: '#2d2a2b', margin: 0 }}>
          -
        </p>

        {/* TO chip */}
        <div style={{ backgroundColor: '#f8e9ed', display: 'flex', flexDirection: 'column',
                      gap: 8, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8,
                      borderRadius: 8, width: 168, overflow: 'hidden', flexShrink: 0 }}>
          <p style={{ fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#757575',
                      textTransform: 'uppercase', margin: 0 }}>To</p>
          <p style={{ fontSize: 16, fontWeight: 400, lineHeight: '21px', color: '#2d2a2b', margin: 0 }}>
            {toDate ? fmt(toDate) : '—'}
          </p>
        </div>
      </div>

      {/* ══ Calendar ══ */}
      {/* Figma: w-[380px] pb-[20px] pt-[16px] px-[20px] gap-[4px] rounded-[8px] border #ffb3bc bg-[#f8f8f8] overflow-clip */}
      <div style={{
        width: 380, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 4,
        paddingTop: 16, paddingBottom: 20, paddingLeft: 20, paddingRight: 20,
        borderRadius: 8, border: '1px solid #ffb3bc', backgroundColor: '#f8f8f8',
        overflow: 'hidden',
      }}>

        {/* Month nav: h-[32px] flex items-center justify-between */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      width: '100%', height: 32, flexShrink: 0, overflow: 'hidden' }}>
          {/* prev-btn: size-[28px] */}
          <button onClick={prevMo}
            style={{ width: 28, height: 28, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', borderRadius: '50%', border: 'none',
                     backgroundColor: 'transparent', cursor: 'pointer', flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f8e9ed')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <ChevronLeft />
          </button>
          {/* month label: SemiBold 14px leading-[20px] centered */}
          <p style={{ flex: 1, textAlign: 'center', fontSize: 14, fontWeight: 600,
                      lineHeight: '20px', color: '#2d2a2b', margin: 0 }}>
            {MONTHS[mo]} {yr}
          </p>
          <button onClick={nextMo}
            style={{ width: 28, height: 28, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', borderRadius: '50%', border: 'none',
                     backgroundColor: 'transparent', cursor: 'pointer', flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f8e9ed')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Day headers: h-[36px] flex items-center justify-between overflow-clip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      width: '100%', height: 36, overflow: 'hidden', flexShrink: 0 }}>
          {DAYS.map(d => (
            /* Figma: size-[36px] overflow-clip, text 12px font-medium centered top-[10px] */
            <div key={d} style={{ width: 36, height: 36, overflow: 'hidden', flexShrink: 0,
                                  position: 'relative' }}>
              <p style={{ position: 'absolute', top: 10, left: 18, transform: 'translateX(-50%)',
                          width: 36, textAlign: 'center', fontSize: 12, fontWeight: 500,
                          lineHeight: '16px', color: '#2d2a2b', margin: 0 }}>
                {d}
              </p>
            </div>
          ))}
        </div>

        {/* Separator: h-px bg-[#efebe7] */}
        <div style={{ height: 1, backgroundColor: '#efebe7', width: '100%', flexShrink: 0 }} />

        {/* Week rows */}
        {weeks.map((week, wi) => (
          <div key={wi} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                 width: '100%', height: 36, overflow: 'hidden', flexShrink: 0 }}>
            {week.map((day, di) => {
              if (day === null) {
                return <div key={di} style={{ width: 36, height: 36, flexShrink: 0 }} />;
              }

              const isPrev  = day <= 0;
              const dispDay = isPrev ? Math.abs(day) : day;
              const date    = isPrev
                ? new Date(mo === 0 ? yr - 1 : yr, mo === 0 ? 11 : mo - 1, dispDay)
                : new Date(yr, mo, dispDay);

              const isStart    = !isPrev && !!fromDate && sameDay(date, fromDate);
              const isEnd      = !isPrev && !!toDate   && sameDay(date, toDate);
              const isSelected = isStart || isEnd;
              const isRanged   = !isPrev && inRange(date, fromDate, effectiveTo);

              return (
                /* Figma: size-[36px] relative overflow-clip */
                <div key={di}
                  onClick={() => !isPrev && pickDay(dispDay)}
                  onMouseEnter={() => !isPrev && picking === 'to' && setHover(date)}
                  onMouseLeave={() => setHover(null)}
                  style={{ width: 36, height: 36, position: 'relative', overflow: 'hidden',
                           flexShrink: 0, cursor: isPrev ? 'default' : 'pointer' }}
                >
                  {/* Range background */}
                  {isRanged && (
                    <div style={{ position: 'absolute', inset: 0,
                                  backgroundColor: '#f8e9ed' }} />
                  )}

                  {isSelected ? (
                    /* Selected: bg-[#f1528b] SemiBold 13px #f8f8f8, absolute top-[10px] left-[18px] */
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: '#f1528b',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <p style={{ position: 'absolute', top: 10, left: 18, transform: 'translateX(-50%)',
                                  width: 36, textAlign: 'center', fontSize: 13, fontWeight: 600,
                                  lineHeight: '16px', color: '#f8f8f8', margin: 0 }}>
                        {dispDay}
                      </p>
                    </div>
                  ) : (
                    /* Normal: Regular 13px, current #2d2a2b, prev #78909c, absolute top-[10px] */
                    <p style={{ position: 'absolute', top: 10, left: 18, transform: 'translateX(-50%)',
                                width: 36, textAlign: 'center', fontSize: 13, fontWeight: 400,
                                lineHeight: '16px', color: isPrev ? '#78909c' : '#2d2a2b', margin: 0 }}>
                      {dispDay}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

    </div>
  );
}

// ── Preview on background ─────────────────────────────────────────────────────

export function FilterMenuOnBackground() {
  return (
    <div style={{ padding: 32, backgroundColor: '#f4f2f1' }}>
      <FilterMenu
        defaultFromDate={new Date(2020, 4, 8)}
        defaultToDate={new Date(2020, 4, 16)}
        defaultStatuses={['Pending']}
      />
    </div>
  );
}
