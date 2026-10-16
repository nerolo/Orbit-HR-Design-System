import puzzleIcon from '../../assets/figma/puzzle.svg';
import mailIcon from '../../assets/figma/mail.svg';
import checkCircleIcon from '../../assets/figma/check-circle.svg';
import statusAlertBg from '../../assets/figma/status-alert-bg.png';

export type YearEndState = 'Default' | 'Review Requested' | 'Confirmed';

export interface YearEndBalanceRow {
  label: string;
  value: number | string;
}

export interface YearEndLeaveVerificationCardProps {
  state?: YearEndState;
  rows?: YearEndBalanceRow[];
  onRequestReview?: () => void;
  onConfirm?: () => void;
}

const DEFAULT_ROWS: YearEndBalanceRow[] = [
  { label: 'Last Year Carry Forward', value: 4 },
  { label: 'Forfeit Days',            value: 0 },
  { label: 'Current Year AL',         value: 12 },
  { label: 'Adjustment',              value: 0 },
  { label: 'Leave Taken',             value: 8 },
  { label: 'Available Days',          value: 8 },
];

const MESSAGES: Record<YearEndState, string> = {
  'Default':
    'Please Confirm your leave balance and confirm. You may request review if there is incorrect balance.',
  'Review Requested':
    'Your balance is with the Local Leave Admin for review. No further action is needed until they reply.',
  'Confirmed':
    'Thanks — your year-end balance is locked in. This card will be removed from your Dashboard.',
};

const MONO = 'Space Mono, monospace';

export function YearEndLeaveVerificationCard({
  state = 'Default',
  rows = DEFAULT_ROWS,
  onRequestReview,
  onConfirm,
}: YearEndLeaveVerificationCardProps) {
  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        width: 423, boxSizing: 'border-box', borderRadius: 8, overflow: 'hidden',
        background: '#fff8e1', border: '1px solid #ffecb3',
        display: 'flex', flexDirection: 'column', gap: 24,
        boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.95), 0px 1px 2px rgba(0,0,0,0.14)',
      }}
    >
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '24px 16px' }}>
        <img src={puzzleIcon} alt="" width={28} height={28} />
        <div style={{ width: 343, minHeight: 65, display: 'flex', flexDirection: 'column', gap: 2, fontSize: 14, lineHeight: '21px' }}>
          <p style={{ margin: 0, fontWeight: 700, color: '#2d2a2b', whiteSpace: 'nowrap' }}>Year-End Leave Verification</p>
          <p style={{ margin: 0, fontWeight: 400, color: '#625f64' }}>{MESSAGES[state]}</p>
        </div>
      </div>

      {/* balances */}
      <dl style={{ margin: 0, padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {rows.map(row => (
          <div key={row.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <dt style={{ flex: 1, fontFamily: MONO, fontSize: 16, fontWeight: 400, lineHeight: '18px', color: '#2d2a2b', textTransform: 'uppercase' }}>
              {row.label}:
            </dt>
            <dd
              style={{
                margin: 0, minWidth: 34, height: 24, boxSizing: 'border-box', padding: '4px 8px', borderRadius: 4,
                background: '#212121', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: MONO, fontSize: 14, fontWeight: 400, lineHeight: '18px', textTransform: 'uppercase',
              }}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* actions or status */}
      {state === 'Default' ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '24px 16px' }}>
          <button
            type="button"
            onClick={onRequestReview}
            style={{
              flex: 1, height: 36, padding: '8px 14px', borderRadius: 8, border: 'none', background: 'transparent',
              cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#2d2a2b',
              whiteSpace: 'nowrap',
            }}
          >
            Request Review
          </button>
          <button
            type="button"
            onClick={onConfirm}
            style={{
              flex: 1, height: 36, padding: '8px 14px', borderRadius: 8, border: 'none', background: '#b60058',
              cursor: 'pointer', color: '#f8f8f8', fontFamily: MONO, fontSize: 12, fontWeight: 700, lineHeight: '18px',
              textTransform: 'uppercase', whiteSpace: 'nowrap',
              boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.1), 0px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Confirm My Balance
          </button>
        </div>
      ) : (
        <div style={{ padding: '24px 16px' }}>
          <div
            role="status"
            style={{
              position: 'relative', display: 'flex', alignItems: 'center', gap: 27, padding: '16px 22px', borderRadius: 4,
              ...(state === 'Review Requested'
                ? { backgroundImage: `url(${statusAlertBg})`, backgroundSize: 'cover', backgroundColor: '#212121' }
                : {
                    border: '1px solid #ffecb3',
                    background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #fafafb 0%, #ebebee 100%)',
                  }),
            }}
          >
            <img
              src={state === 'Review Requested' ? mailIcon : checkCircleIcon}
              alt=""
              width={20}
              height={20}
              style={{ flexShrink: 0 }}
            />
            <p
              style={{
                flex: 1, margin: 0, fontSize: 14, fontWeight: 700, lineHeight: '21px',
                color: state === 'Review Requested' ? '#fafafa' : '#2d2a2b',
              }}
            >
              {state === 'Review Requested'
                ? 'Email notification is sent to Local Leave Admin to review your leave records.'
                : 'Your leave balance is confirmed and saved to your Leave Entitlement records.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
