import { useState } from 'react';
import type { CSSProperties } from 'react';
import chevronLeft from '../../assets/figma/chevron-left-small.svg';
import chevronRight from '../../assets/figma/chevron-right-small.svg';
import { EventListItem, EVENT_DOT_COLORS } from './EventListItem';
import type { EventListItemProps } from './EventListItem';
import { TentativeLeaveTitleCard } from './TentativeLeaveTitleCard';

// ─── Types ────────────────────────────────────────────────────────────────────

export type CalendarInfoListVariant = 'Default' | 'Tentative Leave select';

export interface TentativeLeaveItem {
  title: string;
  dateRange: string;
}

export interface CalendarInfoListProps {
  variant?: CalendarInfoListVariant;
  events?: EventListItemProps[];
  tentativeLeaves?: TentativeLeaveItem[];
  /** Index of the pre-selected tentative leave (Tentative Leave select variant) */
  selectedIndex?: number;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_EVENTS: EventListItemProps[] = [
  { month: 'May', day: 1,  title: 'Thanksgiving Day', subtitle: 'Full Day', dotColor: EVENT_DOT_COLORS.holiday },
  { month: 'May', day: 9,  title: 'Weekend Swap',     subtitle: 'AM',       dotColor: EVENT_DOT_COLORS.swap },
  { month: 'May', day: 10, title: 'Weekend Swap',     subtitle: 'PM',       dotColor: EVENT_DOT_COLORS.swap },
  { month: 'May', day: 21, title: 'Annual Leave',     subtitle: 'Full Day', dotColor: EVENT_DOT_COLORS.leave },
  { month: 'May', day: 22, title: 'Annual Leave',     subtitle: 'AM',       dotColor: EVENT_DOT_COLORS.leave },
  { month: 'May', day: 24, title: 'Wut Holiday',      subtitle: 'Full Day', dotColor: EVENT_DOT_COLORS.holiday },
  { month: 'May', day: 24, title: 'No Pay Leave',     subtitle: 'PM',       dotColor: EVENT_DOT_COLORS.leave },
  { month: 'May', day: 24, title: 'Weekend Swap',     subtitle: 'PM',       dotColor: EVENT_DOT_COLORS.warning },
];

const DEFAULT_TENTATIVE: TentativeLeaveItem[] = Array.from({ length: 6 }, () => ({
  title: 'Tentative Leave Title',
  dateRange: '29 May 2026 - 30 Jan 2027',
}));

const HEADER_BUTTON: CSSProperties = {
  width: '100%', boxSizing: 'border-box', padding: '8px 14px', borderRadius: 8, border: 'none',
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexShrink: 0,
  fontFamily: 'Space Mono, monospace', fontSize: 12, fontWeight: 700, lineHeight: '18px',
  color: '#2d2a2b', textTransform: 'uppercase',
};

// ─── CalendarInfoList ─────────────────────────────────────────────────────────

export function CalendarInfoList({
  variant = 'Default',
  events = DEFAULT_EVENTS,
  tentativeLeaves = DEFAULT_TENTATIVE,
  selectedIndex = 1,
}: CalendarInfoListProps) {
  const [selected, setSelected] = useState(selectedIndex);
  const isTentative = variant === 'Tentative Leave select';

  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        width: 231, height: 366, boxSizing: 'border-box', padding: isTentative ? '0 16px' : '0 8px',
        display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto', overflowX: 'hidden',
      }}
    >
      {isTentative ? (
        <>
          <div
            style={{
              ...HEADER_BUTTON, background: '#efebe7',
              boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.95), 0px 1px 1px rgba(0,0,0,0.14)',
            }}
          >
            <img src={chevronLeft} alt="" width={16} height={16} />
            <span style={{ flex: 1, textAlign: 'center' }}>Tentative</span>
            <img src={chevronRight} alt="" width={16} height={16} />
          </div>
          {tentativeLeaves.map((leave, i) => (
            <TentativeLeaveTitleCard
              key={i}
              title={leave.title}
              dateRange={leave.dateRange}
              showSelect={i === selected}
              selected={i === selected}
              onClick={() => setSelected(i)}
            />
          ))}
        </>
      ) : (
        <>
          <div
            style={{
              ...HEADER_BUTTON, background: '#fafafa', overflow: 'hidden',
              boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.95), 0px 1px 2px rgba(0,0,0,0.14)',
            }}
          >
            Events
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 8px' }}>
            {events.map((event, i) => (
              <EventListItem key={i} {...event} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
