import { useState } from 'react';
import syncButton from '../../assets/figma/calendar-sync-button.svg';

// ─── Types ────────────────────────────────────────────────────────────────────

export type CalendarSectionVariant = 'With Dots' | 'Clean';
export type CalendarDot = 'holiday' | 'leave' | 'swap';

export interface CalendarSectionProps {
  variant?: CalendarSectionVariant;
  year?: number;
  /** 0-based month index (0 = January) */
  month?: number;
  /** Day-of-month where the selected range starts */
  rangeStart?: number | null;
  /** Day-of-month where the selected range ends */
  rangeEnd?: number | null;
  /** Indicator dots keyed by day-of-month (With Dots variant only) */
  dots?: Record<number, CalendarDot[]>;
  onRangeChange?: (range: { start: number | null; end: number | null }) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DOT_COLOR: Record<CalendarDot, string> = {
  holiday: '#b60058',
  leave:   '#42a5f5',
  swap:    '#aed581',
};

const LEGEND: { label: string; dot: CalendarDot }[] = [
  { label: 'Public holiday', dot: 'holiday' },
  { label: 'Leave',          dot: 'leave' },
  { label: 'Swap',           dot: 'swap' },
];

const defaultCalendarDots: Record<number, CalendarDot[]> = {
  1:  ['holiday'],
  9:  ['swap'],
  10: ['swap'],
  21: ['leave'],
  22: ['leave'],
  23: ['holiday', 'leave', 'swap'],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

interface Cell { day: number; inMonth: boolean }

/** Monday-first grid of 6-or-fewer weeks, padded with adjacent-month days. */
function buildWeeks(year: number, month: number): Cell[][] {
  const offset   = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysIn   = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const cells: Cell[] = [];
  for (let i = offset - 1; i >= 0; i--) cells.push({ day: prevDays - i, inMonth: false });
  for (let d = 1; d <= daysIn; d++) cells.push({ day: d, inMonth: true });
  for (let d = 1; cells.length % 7; d++) cells.push({ day: d, inMonth: false });
  return Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));
}

// ─── CalendarSection ──────────────────────────────────────────────────────────

export function CalendarSection({
  variant = 'With Dots',
  year = 2026,
  month = 4,
  rangeStart = 4,
  rangeEnd = 8,
  dots = defaultCalendarDots,
  onRangeChange,
}: CalendarSectionProps) {
  const [range, setRange] = useState({ start: rangeStart, end: rangeEnd });
  const showDots = variant === 'With Dots';
  const weeks = buildWeeks(year, month);

  function pickDay(day: number) {
    const picking = range.start !== null && range.end === null;
    const next = picking
      ? { start: Math.min(range.start!, day), end: Math.max(range.start!, day) }
      : { start: day, end: null };
    setRange(next);
    onRangeChange?.(next);
  }

  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        width: 360,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* month-nav */}
      <div style={{ height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: '20px', color: '#2d2a2b', textAlign: 'center' }}>
          {MONTHS[month]} {year}
        </p>
      </div>

      {/* day-headers */}
      <div style={{ height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {DAYS.map(d => (
          <div key={d} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 500, lineHeight: '16px', color: '#2d2a2b' }}>{d}</span>
          </div>
        ))}
      </div>

      {/* weeks */}
      {weeks.map((week, wi) => {
        // Continuous range bar behind the row (cells sit on a space-between grid)
        const inRange = week
          .map((c, i) => (c.inMonth && range.start !== null && range.end !== null
            && c.day >= range.start && c.day <= range.end ? i : -1))
          .filter(i => i >= 0);
        const step = '(100% - 36px) / 6';
        return (
        <div key={wi} style={{ position: 'relative', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {inRange.length > 0 && (
            <div
              aria-hidden
              style={{
                position: 'absolute', top: 0, height: 36, borderRadius: 4, background: '#ffb3bc',
                left: `calc(${inRange[0]} * ${step})`,
                width: `calc(${inRange[inRange.length - 1] - inRange[0]} * ${step} + 36px)`,
              }}
            />
          )}
          {week.map((cell, ci) => {
            const { day, inMonth } = cell;
            const isStart  = inMonth && day === range.start;
            const isEnd    = inMonth && range.end !== null && day === range.end;
            const isMiddle = inMonth && range.start !== null && range.end !== null
                             && day > range.start && day < range.end;
            const cellDots = showDots && inMonth ? dots[day] ?? [] : [];

            let color = '#2d2a2b';
            if (!inMonth) color = '#78909c';
            if (isStart || isEnd) color = '#f8f8f8';

            return (
              <button
                key={ci}
                type="button"
                disabled={!inMonth}
                onClick={() => pickDay(day)}
                aria-label={inMonth ? `${day} ${MONTHS[month]} ${year}` : undefined}
                aria-pressed={isStart || isEnd || isMiddle}
                style={{
                  width: 36, height: 36, position: 'relative', flexShrink: 0, padding: 0,
                  border: 'none', cursor: inMonth ? 'pointer' : 'default',
                  background: isStart || isEnd ? '#b60058' : 'transparent',
                  fontFamily: 'inherit', fontSize: 13, fontWeight: 400, lineHeight: '16px', color,
                }}
              >
                {day}
                {cellDots.length > 0 && (
                  <span style={{ position: 'absolute', top: 4, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 1 }}>
                    {cellDots.map(dot => (
                      <span
                        key={dot}
                        style={{
                          width: 5, height: 5, borderRadius: 9999, background: DOT_COLOR[dot],
                          border: '1px solid rgba(255,255,255,0.14)', boxSizing: 'border-box',
                        }}
                      />
                    ))}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        );
      })}

      {/* Calendar footer */}
      {showDots && (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 38, paddingTop: 8, width: 244 }}>
            {LEGEND.map(({ label, dot }) => (
              <div key={dot} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span
                  style={{
                    width: 5, height: 5, borderRadius: 9999, background: DOT_COLOR[dot],
                    border: '1px solid rgba(255,255,255,0.14)', boxSizing: 'border-box',
                  }}
                />
                <span style={{ fontSize: 12, fontWeight: 300, lineHeight: '18px', color: '#625f64', whiteSpace: 'nowrap' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <img
            src={syncButton}
            alt=""
            style={{ position: 'absolute', right: -2, top: 3, width: 50, height: 38 }}
          />
        </div>
      )}
    </div>
  );
}
