import { useState } from 'react';
import arrowLarge from '../../assets/figma/date-arrow-large.svg';
import arrowRight from '../../assets/figma/arrow-right.svg';

// ─── Types ────────────────────────────────────────────────────────────────────

export type DatePickerPreviewVariant = 'Selector' | 'Preview';
export type DayPeriod = 'Full Day' | 'AM' | 'PM';

export interface DatePickerPreviewProps {
  variant?: DatePickerPreviewVariant;
  startDate?: Date;
  endDate?: Date;
  /** Return-to-work date, shown in the Preview variant */
  returnDate?: Date;
  startPeriod?: DayPeriod;
  endPeriod?: DayPeriod;
  returnPeriod?: DayPeriod;
  onChange?: (value: { startPeriod: DayPeriod; endPeriod: DayPeriod }) => void;
}

const PERIODS: DayPeriod[] = ['Full Day', 'AM', 'PM'];
const FONT = 'Hanken Grotesk, sans-serif';
const MONO = 'Space Mono, monospace';

const pad = (n: number) => String(n).padStart(2, '0');
const monthYear = (d: Date) => d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
const weekday = (d: Date) => d.toLocaleDateString('en-GB', { weekday: 'long' });

// ─── Selector variant ─────────────────────────────────────────────────────────

function DateBlock({
  label, date, period, onPeriod,
}: { label: string; date: Date; period: DayPeriod; onPeriod: (p: DayPeriod) => void }) {
  return (
    <div
      style={{
        width: 230, boxSizing: 'border-box', padding: 16, borderRadius: 8, overflow: 'hidden',
        background: '#f8f8f8', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
        display: 'flex', flexDirection: 'column', gap: 2, alignSelf: 'start',
      }}
    >
      <p style={{ margin: 0, fontSize: 10, fontWeight: 600, lineHeight: '14px', letterSpacing: 0.6, color: '#b60058' }}>
        {label}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: 36, fontWeight: 700, lineHeight: '40px', color: '#2d2a2b' }}>{pad(date.getDate())}</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span style={{ fontSize: 12, fontWeight: 600, lineHeight: '16px', color: '#2d2a2b', textTransform: 'uppercase' }}>
            {monthYear(date)}
          </span>
          <span style={{ fontSize: 11, fontWeight: 400, lineHeight: '14px', color: '#625f64' }}>{weekday(date)}</span>
        </div>
      </div>
      <div role="group" aria-label={`${label} period`} style={{ display: 'flex', alignItems: 'flex-end', padding: '8px 0' }}>
        {PERIODS.map((p, i) => {
          const active = p === period;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={active}
              onClick={() => onPeriod(p)}
              style={{
                height: 32, padding: '10px 16px', boxSizing: 'border-box', cursor: 'pointer',
                marginRight: i < PERIODS.length - 1 ? -1 : 0,
                border: '1px solid #a97e88',
                borderRadius: i === 0 ? '8px 0 0 8px' : i === PERIODS.length - 1 ? '0 8px 8px 0' : 0,
                background: active ? '#b60058' : '#fafafa', color: active ? '#f8f8f8' : '#2d2a2b',
                fontFamily: FONT, fontSize: 14, fontWeight: 700, lineHeight: '21px', textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Preview variant ──────────────────────────────────────────────────────────

function DateChip({
  label, date, period, outlined = false,
}: { label: string; date: Date; period: DayPeriod; outlined?: boolean }) {
  return (
    <div
      style={{
        flex: 1, minWidth: 0, height: 90, position: 'relative', overflow: 'hidden', whiteSpace: 'nowrap', borderRadius: 8,
        boxSizing: 'border-box',
        background: outlined ? '#f8f8f8' : '#efebe7', border: outlined ? '1px solid #b60058' : 'none',
      }}
    >
      <span style={{ position: 'absolute', left: 12, top: 10, fontFamily: MONO, fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#b60058', textTransform: 'uppercase' }}>
        {label}
      </span>
      <span style={{ position: 'absolute', left: 12, top: 24, fontSize: 30, fontWeight: 700, lineHeight: '40px', color: '#2d2a2b' }}>
        {pad(date.getDate())}
      </span>
      <span style={{ position: 'absolute', left: 50, top: 28, fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#2d2a2b' }}>
        {date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
      </span>
      <span style={{ position: 'absolute', left: 50, top: 44, fontSize: 10, fontWeight: 400, color: '#625f64', textTransform: 'uppercase' }}>
        {weekday(date)}
      </span>
      <span style={{ position: 'absolute', left: 12, top: 66, fontSize: 12, fontWeight: 500, lineHeight: '18px', color: '#b60058' }}>
        {period}
      </span>
    </div>
  );
}

// ─── DatePickerPreview ────────────────────────────────────────────────────────

export function DatePickerPreview({
  variant = 'Selector',
  startDate = new Date(2020, 4, 8),
  endDate = new Date(2020, 4, 16),
  returnDate = new Date(2020, 4, 19),
  startPeriod = 'Full Day',
  endPeriod = 'Full Day',
  returnPeriod = 'AM',
  onChange,
}: DatePickerPreviewProps) {
  const [start, setStart] = useState<DayPeriod>(startPeriod);
  const [end, setEnd] = useState<DayPeriod>(endPeriod);

  if (variant === 'Preview') {
    return (
      <div style={{ fontFamily: FONT, width: 601, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <DateChip label="Start Date" date={startDate} period={startPeriod} />
        <img src={arrowRight} alt="" width={20} height={20} style={{ flexShrink: 0 }} />
        <DateChip label="End Date" date={endDate} period={endPeriod} />
        <DateChip label="Return Date" date={returnDate} period={returnPeriod} outlined />
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: FONT, display: 'inline-grid', gridTemplateColumns: 'repeat(3, fit-content(100%))', gap: 16,
        padding: '16px 24px', borderRadius: 8, background: '#efebe7',
      }}
    >
      <DateBlock
        label="START DATE"
        date={startDate}
        period={start}
        onPeriod={p => { setStart(p); onChange?.({ startPeriod: p, endPeriod: end }); }}
      />
      <img src={arrowLarge} alt="" width={62} height={138} style={{ alignSelf: 'center', justifySelf: 'center' }} />
      <DateBlock
        label="END DATE"
        date={endDate}
        period={end}
        onPeriod={p => { setEnd(p); onChange?.({ startPeriod: start, endPeriod: p }); }}
      />
    </div>
  );
}
