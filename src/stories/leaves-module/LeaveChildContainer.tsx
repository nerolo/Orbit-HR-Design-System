import userIcon from '../../assets/figma/user.svg';
import { Segbar } from './Segbar';

export interface LeaveChildItem {
  name: string;
  /** e.g. "5 Working Days" */
  duration: string;
  /** Share of validity window used, 0–100 */
  percent?: number;
  validityDays?: string;
}

export interface LeaveChildContainerProps {
  items?: LeaveChildItem[];
}

const DEFAULT_ITEMS: LeaveChildItem[] = [
  { name: 'Paternity Leave (Statutory)', duration: '5 Working Days',    percent: 100, validityDays: '30 days' },
  { name: 'Paternity Leave (Company)',   duration: '10 Continuous Days', percent: 100, validityDays: '30 days' },
];

/** Groups the child leave entitlements of a parent leave type with their validity bars. */
export function LeaveChildContainer({ items = DEFAULT_ITEMS }: LeaveChildContainerProps) {
  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        width: 617, boxSizing: 'border-box', padding: 16, borderRadius: 8, background: '#efebe7',
        display: 'flex', flexDirection: 'column', gap: 24,
        boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.95), 0px 1px 2px rgba(0,0,0,0.14)',
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            width: 585, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 226px', gap: 8, overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 4, width: 329 }}>
            <img src={userIcon} alt="" width={11} height={14} />
            <span style={{ flex: 1, fontSize: 13, fontWeight: 400, lineHeight: '21px', color: '#2d2a2b' }}>{item.name}</span>
            <span style={{ fontSize: 12, fontWeight: 400, lineHeight: '18px', color: '#2d2a2b', textAlign: 'right', whiteSpace: 'nowrap' }}>
              {item.duration}
            </span>
          </div>
          <span
            style={{
              fontFamily: 'Space Mono, monospace', fontSize: 12, fontWeight: 700, lineHeight: '18px',
              color: '#b60058', textAlign: 'right', textTransform: 'uppercase', alignSelf: 'start',
            }}
          >
            Validity days
          </span>
          <div style={{ width: 275 }}>
            <Segbar percent={item.percent ?? 100} />
          </div>
          <span style={{ fontSize: 14, fontWeight: 400, lineHeight: '21px', color: '#625f64', textAlign: 'right', alignSelf: 'start', marginTop: -4 }}>
            {item.validityDays ?? '30 days'}
          </span>
        </div>
      ))}
    </div>
  );
}
