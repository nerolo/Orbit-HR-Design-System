import { EventListItem, EVENT_DOT_COLORS } from './EventListItem';
import type { EventListItemProps } from './EventListItem';

export interface HoverDateEventListProps {
  events?: EventListItemProps[];
}

const DEFAULT_EVENTS: EventListItemProps[] = [
  { month: 'Nov', day: 24, title: 'Thanksgiving Day', subtitle: '1 Day', dotColor: EVENT_DOT_COLORS.holiday },
  { month: 'Nov', day: 24, title: 'Annual Leave',     subtitle: 'AM',    dotColor: EVENT_DOT_COLORS.holiday },
  { month: 'Nov', day: 24, title: 'Annual Leave',     subtitle: 'PM',    dotColor: EVENT_DOT_COLORS.holiday },
];

/** Popover shown when hovering a calendar day that has more than one event. */
export function HoverDateEventList({ events = DEFAULT_EVENTS }: HoverDateEventListProps) {
  return (
    <div
      role="tooltip"
      style={{
        width: 228, boxSizing: 'border-box', padding: 24, borderRadius: 4, background: '#ffffff',
        display: 'flex', flexDirection: 'column', gap: 14,
        boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.95), 0px 8px 12px rgba(0,0,0,0.18)',
      }}
    >
      {events.map((event, i) => (
        <div key={i} style={{ width: 189 }}>
          <EventListItem {...event} variant="hover" />
        </div>
      ))}
    </div>
  );
}
