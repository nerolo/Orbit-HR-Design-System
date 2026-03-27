import React, { useState } from 'react';

// ─── Design Tokens ────────────────────────────────────────────────────────────
const T = {
  pageBg:       '#F4F2F1',
  cardBg:       '#F8F8F8',
  fill:         '#EFEBE7',
  border:       '#EFEBE7',
  borderInput:  '#B0BEC5',
  primary:      '#F1528B',
  primaryDark:  '#B60058',
  textHeading:  '#2D2A2B',
  textBody:     '#2D2A2B',
  textSecond:   '#625F64',
  textSubtle:   '#BDBDBD',
  success:      '#AED581',
  successDot:   '#62DD00',
  errorDot:     '#EF5350',
  white:        '#F8F8F8',
  font:         "'Hanken Grotesk', sans-serif",
};

// ─── Toggle Switch ────────────────────────────────────────────────────────────
function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!on)}
      style={{
        width: 200,
        height: 64,
        borderRadius: 99,
        background: '#EEEEEE',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: 'inset 0px 2px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.2s',
        flexShrink: 0,
      }}
      aria-pressed={on}
    >
      {/* Dot indicator */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: on ? 'calc(100% - 44px)' : 20,
        transform: 'translateY(-50%)',
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: on ? T.successDot : T.errorDot,
        boxShadow: on
          ? `0 0 8px 2px rgba(98,221,0,0.35)`
          : `0 0 8px 2px rgba(239,83,80,0.35)`,
        transition: 'left 0.2s',
      }} />
      {/* Thumb */}
      <div style={{
        position: 'absolute',
        top: 4,
        left: on ? 'calc(100% - 68px)' : 4,
        width: 56,
        height: 56,
        borderRadius: 99,
        background: T.cardBg,
        boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
        transition: 'left 0.2s',
      }} />
    </button>
  );
}

// ─── Tab Pill ─────────────────────────────────────────────────────────────────
function TabPill({
  label, dot, dotColor, active, onClick,
}: {
  label: string; dot: string; dotColor: string; active: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 14px',
        borderRadius: 99,
        border: 'none',
        cursor: 'pointer',
        background: active ? dot === T.successDot ? '#C8E6C9' : '#FFCDD2' : 'transparent',
        fontFamily: T.font,
        fontSize: 13,
        fontWeight: 500,
        color: T.textHeading,
        transition: 'background 0.15s',
      }}
    >
      <span style={{
        width: 10, height: 10, borderRadius: '50%',
        background: dotColor,
        boxShadow: `0 0 5px ${dotColor}80`,
        flexShrink: 0,
      }} />
      {label}
    </button>
  );
}

// ─── Setting Row ──────────────────────────────────────────────────────────────
function SettingRow({ label, on, onChange }: { label: string; on: boolean; onChange: (v: boolean) => void }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '24px 0',
      borderBottom: `1px solid ${T.fill}`,
    }}>
      <p style={{
        margin: 0,
        fontFamily: T.font,
        fontSize: 16,
        fontWeight: 400,
        color: T.textHeading,
      }}>
        {label}
      </p>
      <Toggle on={on} onChange={onChange} />
    </div>
  );
}

// ─── Rate Table ───────────────────────────────────────────────────────────────
const defaultRates = [
  { from: 'USD', to: 'HKD', rate: '7.8312',  updated: '2026-03-25', source: 'Netsuite' },
  { from: 'CNY', to: 'HKD', rate: '1.0721',  updated: '2026-03-25', source: 'Netsuite' },
  { from: 'SGD', to: 'HKD', rate: '5.8890',  updated: '2026-03-24', source: 'Manual'   },
  { from: 'JPY', to: 'HKD', rate: '0.0511',  updated: '2026-03-24', source: 'Netsuite' },
  { from: 'EUR', to: 'HKD', rate: '8.5620',  updated: '2026-03-23', source: 'Manual'   },
];

function RateTable() {
  const cols = ['From', 'To', 'Exchange Rate', 'Effective Date', 'Source'];
  return (
    <div style={{
      background: T.cardBg,
      borderRadius: 8,
      border: `1px solid ${T.border}`,
      overflow: 'hidden',
      boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: T.font }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${T.fill}` }}>
            {cols.map(c => (
              <th key={c} style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: 11,
                fontWeight: 500,
                color: T.textSecond,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>{c}</th>
            ))}
            <th style={{ padding: '12px 16px', width: 80 }} />
          </tr>
        </thead>
        <tbody>
          {defaultRates.map((r, i) => (
            <tr key={i} style={{
              borderBottom: i < defaultRates.length - 1 ? `1px solid ${T.fill}` : 'none',
              background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.01)',
            }}>
              <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 600, color: T.textHeading }}>{r.from}</td>
              <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 600, color: T.textHeading }}>{r.to}</td>
              <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 400, color: T.textHeading, fontVariantNumeric: 'tabular-nums' }}>{r.rate}</td>
              <td style={{ padding: '14px 16px', fontSize: 12, color: T.textSecond }}>{r.updated}</td>
              <td style={{ padding: '14px 16px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '2px 8px',
                  borderRadius: 4,
                  fontSize: 11,
                  fontWeight: 600,
                  background: r.source === 'Netsuite' ? '#FFF0F5' : T.fill,
                  color: r.source === 'Netsuite' ? T.primary : T.textSecond,
                }}>{r.source}</span>
              </td>
              <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                <button style={{
                  background: 'none',
                  border: `1px solid ${T.border}`,
                  borderRadius: 6,
                  padding: '4px 10px',
                  fontSize: 11,
                  fontWeight: 500,
                  color: T.textSecond,
                  cursor: 'pointer',
                  fontFamily: T.font,
                }}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Rate Settings Panel ──────────────────────────────────────────────────────
export interface RateSettingsProps {
  activeTab?: 'orbit' | 'netsuite';
  syncEnabled?: boolean;
  overrideEnabled?: boolean;
  autoCalculate?: boolean;
}

export function RateSettings({
  activeTab: initialTab = 'orbit',
  syncEnabled: initSync = true,
  overrideEnabled: initOverride = false,
  autoCalculate: initAuto = true,
}: RateSettingsProps) {
  const [tab, setTab] = useState<'orbit' | 'netsuite'>(initialTab);
  const [sync, setSync] = useState(initSync);
  const [override, setOverride] = useState(initOverride);
  const [auto, setAuto] = useState(initAuto);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: T.font }}>
      {/* Settings card */}
      <div style={{
        background: T.cardBg,
        borderRadius: 2,
        boxShadow: '0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.1)',
        overflow: 'hidden',
      }}>
        {/* Tab bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '14px 20px',
          borderBottom: `1px solid ${T.fill}`,
        }}>
          <TabPill
            label="Orbit"
            dot="orbit"
            dotColor={T.successDot}
            active={tab === 'orbit'}
            onClick={() => setTab('orbit')}
          />
          <TabPill
            label="Netsuite"
            dot="netsuite"
            dotColor={T.errorDot}
            active={tab === 'netsuite'}
            onClick={() => setTab('netsuite')}
          />
          <div style={{ marginLeft: 'auto' }}>
            <button style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: 4, border: `1px solid ${T.border}`,
              background: T.cardBg, cursor: 'pointer',
              boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
            }}>
              {/* Hamburger icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#625F64" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div style={{ padding: '0 24px' }}>
          {tab === 'orbit' ? (
            <>
              <SettingRow label="Rate Sync Enabled" on={sync} onChange={setSync} />
              <SettingRow label="Override System Rates" on={override} onChange={setOverride} />
              <div style={{ padding: '24px 0 8px' }}>
                <SettingRow label="Auto Calculate" on={auto} onChange={setAuto} />
              </div>
            </>
          ) : (
            <>
              <SettingRow label="Netsuite Rate Sync" on={sync} onChange={setSync} />
              <div style={{ padding: '24px 0 8px' }}>
                <SettingRow label="Push Rates to Netsuite" on={false} onChange={() => {}} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Exchange rate table */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{
            margin: 0,
            fontFamily: T.font,
            fontSize: 14,
            fontWeight: 600,
            color: T.textHeading,
          }}>Exchange Rates</h3>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px',
            background: T.primary,
            border: 'none',
            borderRadius: 8,
            color: '#F8F8F8',
            fontSize: 12,
            fontWeight: 700,
            fontFamily: T.font,
            cursor: 'pointer',
            boxShadow: '0px 2px 4px rgba(241,82,139,0.3)',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Rate
          </button>
        </div>
        <RateTable />
      </div>
    </div>
  );
}

// ─── Full Page Layout ─────────────────────────────────────────────────────────
export function RateSettingsPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: T.pageBg,
      fontFamily: T.font,
    }}>
      {/* Simulated page content offset (header + breadcrumbs handled by page shell) */}
      <div style={{
        display: 'flex',
        gap: 24,
        padding: '207px 40px 40px',
        maxWidth: 1440,
        margin: '0 auto',
      }}>
        {/* Sidebar */}
        <div style={{
          width: 228,
          background: T.cardBg,
          borderRadius: 2,
          padding: '24px 12px',
          boxShadow: '0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.1)',
          flexShrink: 0,
          height: 'fit-content',
        }}>
          <div style={{
            background: T.fill,
            borderRadius: 8,
            padding: '12px 13px',
          }}>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 500, color: T.primaryDark }}>Rates</p>
          </div>
          <div style={{ padding: '8px 13px' }}>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 500, color: T.textBody }}>Claim Rules</p>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <RateSettings />
        </div>
      </div>
    </div>
  );
}
