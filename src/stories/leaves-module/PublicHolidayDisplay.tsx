export type HolidayTone = 'default' | 'success' | 'warning';

export interface PublicHolidayItem {
  month: string;
  day: number | string;
  title: string;
  subtitle?: string;
  /** default = public holiday, success = approved leave, warning = pending leave */
  tone?: HolidayTone;
}

export interface PublicHolidayDisplayProps {
  items?: PublicHolidayItem[];
}

const DEFAULT_ITEMS: PublicHolidayItem[] = [
  { month: 'Nov', day: 1,  title: 'Thanksgiving Day',     subtitle: '1 Day', tone: 'default' },
  { month: 'Nov', day: 2,  title: 'Black Friday',         subtitle: '1 Day', tone: 'default' },
  { month: 'Nov', day: 22, title: 'Annual Leave',         subtitle: '1 Day', tone: 'success' },
  { month: 'Nov', day: 26, title: 'Pending Annual Leave', subtitle: '1 Day', tone: 'warning' },
];

const TONE_BG: Record<HolidayTone, string> = {
  default: '#efebe7',
  success: '#aed581',
  warning: '#ffd54f',
};

/** Large list of the holidays and leave days falling in the selected period. */
export function PublicHolidayDisplay({ items = DEFAULT_ITEMS }: PublicHolidayDisplayProps) {
  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        boxSizing: 'border-box', padding: '32px 24px', borderRadius: 8, background: '#f8f8f8',
        display: 'flex', flexDirection: 'column', gap: 23,
      }}
    >
      {items.map((item, i) => {
        const tone = item.tone ?? 'default';
        return (
          <div key={i} style={{ width: 429, display: 'flex', alignItems: 'center', gap: 17 }}>
            <div
              style={{
                width: 69, height: 73, boxSizing: 'border-box', padding: 6, borderRadius: 6, flexShrink: 0,
                background: TONE_BG[tone], boxShadow: '0px 1.4px 2.9px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 17, lineHeight: '17px', color: tone === 'default' ? '#f1528b' : '#2d2a2b' }}>{item.month}</span>
              <span style={{ fontSize: 28.65, fontWeight: 700, lineHeight: '43px', color: '#212121', textAlign: 'center' }}>{item.day}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: 23, fontWeight: 700, lineHeight: '30px', color: '#2d2a2b' }}>{item.title}</span>
              <span style={{ fontSize: 23, fontWeight: 500, lineHeight: '23px', color: '#625f64' }}>{item.subtitle ?? '1 Day'}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
