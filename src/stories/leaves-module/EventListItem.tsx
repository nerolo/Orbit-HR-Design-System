export type EventListItemVariant = 'list' | 'hover';

export interface EventListItemProps {
  month: string;
  day: number | string;
  title: string;
  subtitle: string;
  /** Colour of the status dot beside the title */
  dotColor?: string;
  /** `hover` is the larger variant used inside the hover popover */
  variant?: EventListItemVariant;
}

/** One dated row of a leave event list: date block, status dot, title and sub-line. */
export function EventListItem({
  month,
  day,
  title,
  subtitle,
  dotColor = '#b60058',
  variant = 'list',
}: EventListItemProps) {
  const isHover = variant === 'hover';
  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        display: 'flex', alignItems: 'center', gap: 12, height: 51, width: '100%',
        background: 'rgba(255,255,255,0.12)',
      }}
    >
      <div
        style={{
          width: 48, height: 51, boxSizing: 'border-box', padding: 4, flexShrink: 0, borderRadius: 4,
          background: '#efebe7', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 400, lineHeight: '12px', color: isHover ? '#f1528b' : '#2d2a2b', whiteSpace: 'nowrap' }}>
          {month}
        </span>
        <span style={{ width: 24, textAlign: 'center', fontSize: 16, fontWeight: 700, lineHeight: '21px', color: '#212121' }}>
          {day}
        </span>
      </div>
      <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span
            style={{
              width: 5, height: 5, flexShrink: 0, borderRadius: 9999, background: dotColor,
              border: '1px solid rgba(255,255,255,0.14)', boxSizing: 'border-box',
            }}
          />
          <span
            style={{
              fontSize: isHover ? 14 : 12, fontWeight: 500, lineHeight: isHover ? '21px' : '18px',
              color: '#2d2a2b', whiteSpace: 'nowrap',
            }}
          >
            {title}
          </span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 400, lineHeight: '12px', color: '#625f64', whiteSpace: 'nowrap' }}>
          {subtitle}
        </span>
      </div>
    </div>
  );
}

/** Dot colours used by the leave calendar for each kind of day. */
export const EVENT_DOT_COLORS = {
  holiday: '#b60058',
  swap: '#aed581',
  leave: '#64b5f6',
  warning: '#ffd54f',
} as const;
