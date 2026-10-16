export interface CreditTileData {
  /** e.g. "Compensation Leave" */
  leaveType: string;
  /** e.g. "SPLC-0002" */
  code: string;
  used: number;
  total: number;
  /** Unit label after "of N", e.g. "days used" */
  unitLabel?: string;
  credits?: string;
  effective: string;
  expires: string;
  selected?: boolean;
}

export interface CreditTilesProps {
  tiles?: CreditTileData[];
}

const DEFAULT_TILES: CreditTileData[] = [
  { leaveType: 'Compensation Leave', code: 'SPLC-0002', used: 1, total: 1.5, unitLabel: 'days used', credits: '1 credit', effective: '1 Jul 2025', expires: '28 Jul 2026', selected: true },
  { leaveType: 'Compensation Leave', code: 'SPLC-0003', used: 2, total: 2,   unitLabel: 'days used', credits: '1 credit', effective: '1 Jul 2025', expires: '10 Dec 2026' },
  { leaveType: 'Casual Leave',       code: 'SPLC-0001', used: 0, total: 1,   unitLabel: 'day used',  credits: '1 credit', effective: '1 Jul 2025', expires: '31 Dec 2026' },
  { leaveType: 'Marriage Leave',     code: 'SPLC-0003', used: 0, total: 3,   unitLabel: 'days used', credits: '1 credit', effective: '1 Jul 2025', expires: '10 Dec 2026' },
];

function CreditTile({ tile }: { tile: CreditTileData }) {
  return (
    <div
      style={{
        width: 304, boxSizing: 'border-box', padding: 16, borderRadius: 8, overflow: 'hidden', background: '#ffffff',
        display: 'flex', flexDirection: 'column', gap: 8,
        border: `1px solid ${tile.selected ? '#b60058' : 'rgba(255,255,255,0.14)'}`,
        boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.95), 0px 1px 2px rgba(0,0,0,0.14)',
      }}
    >
      <p style={{ margin: 0, fontFamily: 'Space Mono, monospace', fontSize: 14, lineHeight: '18px', color: '#2d2a2b', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        {tile.leaveType} - {tile.code}
      </p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: 24, fontWeight: 700, lineHeight: '36px', letterSpacing: -0.24, color: '#2d2a2b' }}>{tile.used}</span>
        <span style={{ fontSize: 14, fontWeight: 400, lineHeight: '21px', color: '#625f64' }}>
          of {tile.total} {tile.unitLabel ?? 'days used'}
        </span>
      </div>
      <p style={{ margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '12px', color: '#625f64' }}>{tile.credits ?? '1 credit'}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 400, lineHeight: '12px', color: '#625f64', whiteSpace: 'nowrap' }}>
        <span>EFF {tile.effective}</span>
        <span aria-hidden>→</span>
        <span>EXP {tile.expires}</span>
      </div>
    </div>
  );
}

/** Row of special-leave credit tiles showing usage and validity window. */
export function CreditTiles({ tiles = DEFAULT_TILES }: CreditTilesProps) {
  return (
    <div style={{ fontFamily: 'Hanken Grotesk, sans-serif', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start', maxWidth: 1264 }}>
      {tiles.map((tile, i) => (
        <CreditTile key={i} tile={tile} />
      ))}
    </div>
  );
}
