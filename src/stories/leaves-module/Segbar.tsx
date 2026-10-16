export interface SegbarProps {
  /** Share of dots that are filled, 0–100 */
  percent?: number;
  /** Number of dots (30 = standard width, 73 = the long bar) */
  total?: number;
}

/** Dotted progress bar: one 5px dot per unit, filled dots in brand colour. */
export function Segbar({ percent = 75, total = 30 }: SegbarProps) {
  const filled = Math.round((Math.min(100, Math.max(0, percent)) / 100) * total);
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
      style={{ display: 'flex', alignItems: 'center', gap: 4, height: 12 }}
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          style={{
            width: 5, height: 5, flexShrink: 0, borderRadius: 9999, boxSizing: 'border-box',
            background: i < filled ? '#b60058' : '#cfd8dc',
            border: '1px solid rgba(255,255,255,0.14)',
          }}
        />
      ))}
    </div>
  );
}
