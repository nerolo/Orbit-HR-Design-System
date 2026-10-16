import { useState } from 'react';
import type { CSSProperties } from 'react';

export interface AnnualLeaveRow {
  /** Staff grade, e.g. "Director or above" */
  grade: string;
  /** Days per service band, in the same order as `bands` */
  days: number[];
}

export interface AnnualLeaveTableProps {
  edit?: boolean;
  title?: string;
  bands?: string[];
  rows?: AnnualLeaveRow[];
  onChange?: (rows: AnnualLeaveRow[]) => void;
}

const DEFAULT_BANDS = ['1 -3 Yrs', '4 Yrs', '5 Yrs', '6 Yrs', '7 Yrs', '8 Yrs+'];

const DEFAULT_ROWS: AnnualLeaveRow[] = [
  { grade: 'Director or above',  days: [18, 20, 20, 22, 22, 22] },
  { grade: 'Manager/Supervisor', days: [15, 17, 17, 19, 19, 19] },
  { grade: 'General Staff',      days: [12, 14, 14, 16, 16, 16] },
];

const CELL: CSSProperties = {
  flex: '1 0 0', minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
  padding: '0 16px', overflow: 'hidden',
};

/** Annual leave entitlement matrix: staff grade by years of service. */
export function AnnualLeaveTable({
  edit = false,
  title = 'Annual Leave Entitlement',
  bands = DEFAULT_BANDS,
  rows = DEFAULT_ROWS,
  onChange,
}: AnnualLeaveTableProps) {
  const [data, setData] = useState(rows);

  function setDay(r: number, c: number, value: string) {
    const n = Number(value);
    if (Number.isNaN(n)) return;
    const next = data.map((row, i) => (i === r ? { ...row, days: row.days.map((d, j) => (j === c ? n : d)) } : row));
    setData(next);
    onChange?.(next);
  }

  return (
    <div style={{ fontFamily: 'Hanken Grotesk, sans-serif', width: 1045, display: 'flex', flexDirection: 'column', borderRadius: 6 }}>
      <p style={{ margin: 0, height: 34, fontSize: 16, fontWeight: 400, lineHeight: '21px', color: '#2d2a2b' }}>{title}</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: 8, overflow: 'hidden', display: 'block' }}>
        <thead style={{ display: 'block' }}>
          <tr style={{ display: 'flex', background: '#efebe7' }}>
            <th scope="col" style={{ ...CELL, justifyContent: 'flex-start', height: 44, fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#625f64', whiteSpace: 'nowrap' }}>
              Year of services
            </th>
            {bands.map(band => (
              <th key={band} scope="col" style={{ ...CELL, height: 44, fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#625f64', whiteSpace: 'nowrap' }}>
                {band}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ display: 'block' }}>
          {data.map((row, r) => (
            <tr key={row.grade} style={{ display: 'flex', alignItems: 'center', height: 60, background: '#f8f8f8', borderBottom: '0.3px solid #a97e88' }}>
              <th scope="row" style={{ ...CELL, justifyContent: 'flex-start', height: 48, paddingLeft: 32, fontSize: 14, fontWeight: 400, lineHeight: '21px', color: '#625f64', whiteSpace: 'nowrap', textAlign: 'left' }}>
                {row.grade}
              </th>
              {row.days.map((d, c) => (
                <td key={c} style={{ ...CELL, height: 48, fontSize: 14, fontWeight: 400, lineHeight: '21px', color: '#2d2a2b' }}>
                  {edit ? (
                    <input
                      type="text"
                      inputMode="numeric"
                      aria-label={`${row.grade}, ${bands[c]}`}
                      value={d}
                      onChange={e => setDay(r, c, e.target.value)}
                      style={{
                        width: 46, height: 48, boxSizing: 'border-box', padding: '0 10px', textAlign: 'center', borderRadius: 8,
                        background: '#fafafa', border: '1px solid #78909c', outline: 'none',
                        fontFamily: 'inherit', fontSize: 16, fontWeight: 500, color: '#2d2a2b',
                      }}
                    />
                  ) : (
                    d
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
