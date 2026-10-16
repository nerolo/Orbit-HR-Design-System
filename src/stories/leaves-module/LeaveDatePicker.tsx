import { CalendarSection } from './CalendarSection';
import { CalendarInfoList } from './CalendarInfoList';
import { DatePickerPreview } from './DatePickerPreview';

export type LeaveDatePickerContext = 'Application' | 'Approval';

export interface LeaveDatePickerProps {
  context?: LeaveDatePickerContext;
}

/**
 * Leave period picker. Application shows the calendar with an events list and
 * start/end selectors; Approval shows the chosen range as a read-only preview.
 */
export function LeaveDatePicker({ context = 'Application' }: LeaveDatePickerProps) {
  const isApplication = context === 'Application';
  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        width: 601, background: '#f8f8f8', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
    >
      <div style={{ width: '100%', padding: '16px 0 8px' }}>
        <p
          style={{
            margin: 0, fontFamily: 'Space Mono, monospace', fontSize: 12, fontWeight: 700, lineHeight: '18px',
            color: '#b60058', textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}
        >
          Expected leave start day / Leave period
        </p>
      </div>

      <div style={{ width: '100%', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <CalendarSection variant={isApplication ? 'With Dots' : 'Clean'} />
        {isApplication && (
          <div style={{ flex: 1, minWidth: 0, height: 348 }}>
            <CalendarInfoList />
          </div>
        )}
      </div>

      <DatePickerPreview variant={isApplication ? 'Selector' : 'Preview'} />
    </div>
  );
}
