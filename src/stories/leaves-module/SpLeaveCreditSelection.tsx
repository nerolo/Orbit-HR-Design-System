import { useState } from 'react';
import checkIcon from '../../assets/figma/checkbox-check-light.svg';
import calendarBrand from '../../assets/figma/calendar-brand.svg';
import calendarDark from '../../assets/figma/calendar-dark.svg';
import briefcase from '../../assets/figma/briefcase.svg';

export interface SpLeaveCredit {
  code: string;
  name: string;
  /** Expiry shown as plain text, e.g. "12-12-2027" */
  expiresOn: string;
  /** Selected date label; leave empty to show "Select date" */
  selectedDate?: string;
  checked?: boolean;
}

export interface SpLeaveCreditSelectionProps {
  credits?: SpLeaveCredit[];
  onChange?: (credits: SpLeaveCredit[]) => void;
}

const DEFAULT_CREDITS: SpLeaveCredit[] = [
  { code: 'SPLB-0001', name: 'Compensation Leave', expiresOn: '12-12-2027', selectedDate: '12 Dec 2027', checked: true },
  { code: 'SPLB-0002', name: 'Compensation Leave', expiresOn: '13-12-2027' },
  { code: 'SPLB-0003', name: 'Compensation Leave', expiresOn: '14-12-2027' },
];

/** Picks which special-leave credits (and on which date) to spend on an application. */
export function SpLeaveCreditSelection({ credits = DEFAULT_CREDITS, onChange }: SpLeaveCreditSelectionProps) {
  const [rows, setRows] = useState(credits);

  function toggle(index: number) {
    const next = rows.map((r, i) => (i === index ? { ...r, checked: !r.checked } : r));
    setRows(next);
    onChange?.(next);
  }

  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        width: 641, display: 'grid', gridTemplateColumns: '237px 155px minmax(0, 1fr)', gap: 24, alignItems: 'center',
      }}
    >
      {rows.map((row, i) => {
        const hasDate = !!row.selectedDate;
        return (
          <div key={row.code} style={{ display: 'contents' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={!!row.checked}
                onChange={() => toggle(i)}
                style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
              />
              <span
                aria-hidden
                style={{
                  width: 18, height: 18, padding: 2, boxSizing: 'border-box', borderRadius: 4, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: row.checked ? '#212121' : '#ffffff', border: row.checked ? 'none' : '1px solid #cfd8dc',
                }}
              >
                {row.checked && <img src={checkIcon} alt="" width={14} height={14} />}
              </span>
              <img src={briefcase} alt="" width={14} height={14} />
              <span style={{ flex: 1, fontSize: 13, fontWeight: 400, lineHeight: '21px', color: '#2d2a2b' }}>
                {row.code} {row.name}
              </span>
            </label>
            <span
              style={{
                fontFamily: 'Space Mono, monospace', fontSize: 12, fontWeight: 400, lineHeight: '18px',
                color: '#625f64', textTransform: 'uppercase',
              }}
            >
              Expires on {row.expiresOn}
            </span>
            <button
              type="button"
              style={{
                width: 187, boxSizing: 'border-box', padding: '8px 14px', borderRadius: 8, background: 'transparent',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                border: `1px solid ${hasDate ? '#b60058' : '#282526'}`,
                color: hasDate ? '#b60058' : '#2d2a2b',
                fontFamily: 'inherit', fontSize: 12, fontWeight: 700, lineHeight: '18px', whiteSpace: 'nowrap',
              }}
            >
              <img src={hasDate ? calendarBrand : calendarDark} alt="" width={14} height={14} />
              {row.selectedDate ?? 'Select date'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
