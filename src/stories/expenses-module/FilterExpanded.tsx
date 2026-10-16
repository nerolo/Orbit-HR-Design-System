import React, { useState } from 'react';
import filterIcon from '../../assets/figma/filter-icon.svg';
import checkIcon from '../../assets/figma/checkbox-check.svg';
import clearIcon from '../../assets/figma/clear-x.svg';
import chevronDown from '../../assets/figma/chevron-down.svg';
import { CalendarSection } from '../leaves-module/CalendarSection';

// ─── Types ────────────────────────────────────────────────────────────────────

export type FilterExpandedVariant =
  | 'Default'
  | 'SU'
  | 'Finance'
  | 'Finance-date picker'
  | 'Template';

export interface FilterExpandedProps {
  variant?: FilterExpandedVariant;
  fromDate?: string;
  toDate?: string;
  names?: string[];
  onClear?: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const ALL_STATUSES = ['Draft', 'Pending', 'Manager Approved', 'Return', 'Rejected', 'Complete'];
const FINANCE_STATUSES = ['Manager Approved', 'Return', 'Rejected', 'Complete'];

const FONT = 'Hanken Grotesk, sans-serif';
const MONO = 'Space Mono, monospace';

function statusesFor(variant: FilterExpandedVariant): string[] {
  if (variant === 'Template') return ['Item'];
  if (variant === 'Finance' || variant === 'Finance-date picker') return FINANCE_STATUSES;
  return ALL_STATUSES;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: 0, fontSize: 16, fontWeight: 300, lineHeight: '21px', color: '#2d2a2b', whiteSpace: 'nowrap' }}>
      {children}
    </p>
  );
}

function Checkbox({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '2px 0', cursor: 'pointer', width: 'fit-content' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span
        aria-hidden
        style={{
          width: 18, height: 18, padding: 2, boxSizing: 'border-box', borderRadius: 4, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: checked ? '#b60058' : 'transparent',
          border: checked ? 'none' : '1px solid #b0bec5',
        }}
      >
        {checked && <img src={checkIcon} alt="" width={14} height={14} />}
      </span>
      <span style={{ fontSize: 12, fontWeight: 500, lineHeight: '18px', color: '#2d2a2b', whiteSpace: 'nowrap' }}>
        {label}
      </span>
    </label>
  );
}

function DateChip({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        width: 168, boxSizing: 'border-box', padding: '8px 16px', borderRadius: 8, overflow: 'hidden',
        background: '#f8e9ed', display: 'flex', flexDirection: 'column', gap: 8,
      }}
    >
      <p style={{ margin: 0, fontFamily: MONO, fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#2d2a2b', textTransform: 'uppercase' }}>
        {label}
      </p>
      <p style={{ margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '21px', color: '#2d2a2b' }}>{value}</p>
    </div>
  );
}

// ─── FilterExpanded ───────────────────────────────────────────────────────────

export function FilterExpanded({
  variant = 'Default',
  fromDate = '8 May 2020',
  toDate = '16 May 2020',
  names = ['Ada Wong', 'John Smith', 'Mary Lee', 'Tom Chan', 'Priya Patel'],
  onClear,
}: FilterExpandedProps) {
  const options = statusesFor(variant);
  const [checked, setChecked] = useState<string[]>(options);
  const [name, setName] = useState('');

  const isTemplate = variant === 'Template';
  const hasRequestedBy = variant === 'SU' || variant === 'Finance' || variant === 'Finance-date picker';
  const hasCalendar = variant === 'Finance-date picker';

  function toggle(option: string) {
    setChecked(c => (c.includes(option) ? c.filter(x => x !== option) : [...c, option]));
  }

  function clear() {
    setChecked([]);
    setName('');
    onClear?.();
  }

  return (
    <div
      style={{
        fontFamily: FONT, width: 428, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end',
      }}
    >
      {/* page controls */}
      <button
        type="button"
        style={{
          height: 40, padding: '10px 16px', boxSizing: 'border-box', borderRadius: 8, border: 'none',
          background: '#b60058', color: '#f8f8f8', display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: FONT, fontSize: 14, fontWeight: 700, lineHeight: '21px', textTransform: 'uppercase',
          boxShadow: 'inset 0px -1px 0px 0px rgba(255,255,255,0.95)', cursor: 'pointer',
        }}
      >
        Filter
        <img src={filterIcon} alt="" width={16} height={16} />
      </button>

      {/* filter card */}
      <div
        style={{
          position: 'relative', width: '100%', boxSizing: 'border-box', padding: 24, borderRadius: 8,
          background: '#f8f8f8', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start',
          boxShadow: '0px 4px 3px rgba(0,0,0,0.1), 0px 2px 2px rgba(0,0,0,0.1)',
        }}
      >
        <button
          type="button"
          onClick={clear}
          style={{
            position: 'absolute', top: 14, right: 16, height: 36, padding: '8px 0', border: 'none',
            background: 'transparent', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
            fontFamily: MONO, fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#b60058',
            textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}
        >
          Clear filters
          <img src={clearIcon} alt="" width={14} height={14} />
        </button>

        <Heading>{isTemplate ? 'Title' : 'Requested Status'}</Heading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: isTemplate ? 0 : 16, padding: '8px 0', width: '100%' }}>
          {options.map(option => (
            <Checkbox key={option} label={option} checked={checked.includes(option)} onToggle={() => toggle(option)} />
          ))}
        </div>

        {hasRequestedBy && (
          <>
            <Heading>Requested By</Heading>
            <div style={{ position: 'relative', width: '100%' }}>
              <select
                aria-label="Requested By"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{
                  appearance: 'none', width: '100%', height: 45, boxSizing: 'border-box', padding: '12px 40px 12px 12px',
                  borderRadius: 8, border: '1px solid #b0bec5', background: 'transparent', cursor: 'pointer',
                  fontFamily: FONT, fontSize: 16, fontWeight: 300, lineHeight: '21px',
                  color: name ? '#2d2a2b' : '#bdbdbd',
                }}
              >
                <option value="">Name</option>
                {names.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <img
                src={chevronDown}
                alt=""
                width={20}
                height={20}
                style={{ position: 'absolute', right: 12, top: 12, pointerEvents: 'none' }}
              />
            </div>
          </>
        )}

        {!isTemplate && (
          <>
            <Heading>Date range</Heading>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <DateChip label="From" value={fromDate} />
              <span style={{ fontSize: 16, fontWeight: 300, lineHeight: '21px', color: '#2d2a2b' }}>-</span>
              <DateChip label="To" value={toDate} />
            </div>
          </>
        )}

        {hasCalendar && (
          <div
            style={{
              width: '100%', boxSizing: 'border-box', borderRadius: 8, overflow: 'hidden',
              border: '1px solid #ffb3bc', background: '#f8f8f8', display: 'flex', justifyContent: 'center',
            }}
          >
            <CalendarSection />
          </div>
        )}
      </div>
    </div>
  );
}
