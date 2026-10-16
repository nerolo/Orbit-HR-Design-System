import checkIcon from '../../assets/figma/tentative-check.svg';

export interface TentativeLeaveTitleCardProps {
  title?: string;
  dateRange?: string;
  /** Reserves the checkmark column (shown only when `selected`) */
  showSelect?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function TentativeLeaveTitleCard({
  title = 'Tentative Leave Title',
  dateRange = '29 May 2026 - 30 Jan 2027',
  showSelect = true,
  selected = false,
  onClick,
}: TentativeLeaveTitleCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        width: 233, boxSizing: 'border-box', padding: '16px 12px', borderRadius: 4, border: 'none',
        display: 'flex', alignItems: 'flex-start', gap: 4, textAlign: 'left', cursor: onClick ? 'pointer' : 'default',
        background: selected ? 'rgba(239,235,231,0.5)' : 'rgba(255,255,255,0.12)',
        boxShadow: selected ? 'inset 0px 2px 5px rgba(0,0,0,0.07), inset 0px -1px 1px rgba(255,255,255,0.85)' : 'none',
      }}
    >
      {showSelect && (
        <span style={{ width: 14, height: 43, flexShrink: 0, position: 'relative' }}>
          {selected && <img src={checkIcon} alt="" width={14} height={14} style={{ position: 'absolute', top: 3, left: 0 }} />}
        </span>
      )}
      <span style={{ display: 'flex', flexDirection: 'column', gap: 4, whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: 14, fontWeight: 500, lineHeight: '21px', color: '#2d2a2b' }}>{title}</span>
        <span style={{ fontSize: 12, fontWeight: 400, lineHeight: '18px', color: '#625f64' }}>{dateRange}</span>
      </span>
    </button>
  );
}
