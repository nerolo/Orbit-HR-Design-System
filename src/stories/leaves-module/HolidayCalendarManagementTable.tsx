import type { CSSProperties } from 'react';
import plusIcon from '../../assets/figma/plus.svg';
import trashIcon from '../../assets/figma/trash.svg';
import pencilIcon from '../../assets/figma/pencil.svg';
import chevronIcon from '../../assets/figma/chevron-right-circle.svg';

export type HolidayType = 'Public' | 'Gift';

export interface HolidayRow {
  name: string;
  /** ISO date, e.g. 2026-01-01 */
  startDate: string;
  endDate: string;
  dayCount: number;
  type: HolidayType;
}

export interface HolidayCalendarManagementTableProps {
  /** Edit shows the New Holiday button and the row actions */
  edit?: boolean;
  holidays?: HolidayRow[];
  onNewHoliday?: () => void;
  onDelete?: (holiday: HolidayRow) => void;
  onEdit?: (holiday: HolidayRow) => void;
  onOpen?: (holiday: HolidayRow) => void;
}

const DEFAULT_HOLIDAYS: HolidayRow[] = [
  { name: "New Year's Day",        startDate: '2026-01-01', endDate: '2026-01-01', dayCount: 3, type: 'Public' },
  { name: 'Lunar New Year Holiday', startDate: '2026-01-30', endDate: '2026-01-30', dayCount: 5, type: 'Gift' },
  { name: 'Good Friday',           startDate: '2026-04-18', endDate: '2026-04-18', dayCount: 3, type: 'Public' },
  { name: 'Easter Monday',         startDate: '2026-04-21', endDate: '2026-04-21', dayCount: 1, type: 'Public' },
  { name: 'Labour Day',            startDate: '2026-05-01', endDate: '2026-05-01', dayCount: 1, type: 'Public' },
  { name: "Buddha's Birthday",     startDate: '2026-05-05', endDate: '2026-05-05', dayCount: 1, type: 'Public' },
  { name: 'National Day',          startDate: '2026-10-01', endDate: '2026-10-01', dayCount: 1, type: 'Public' },
  { name: 'Christmas Day',         startDate: '2026-12-25', endDate: '2026-12-25', dayCount: 3, type: 'Public' },
];

const TYPE_CHIP: Record<HolidayType, { bg: string; color: string }> = {
  Public: { bg: '#bbdefb', color: '#0d47a1' },
  Gift:   { bg: '#625f64', color: '#fbfbfa' },
};

const HEAD: CSSProperties = {
  fontSize: 12, fontWeight: 500, lineHeight: '18px', color: '#625f64', whiteSpace: 'nowrap', textAlign: 'left',
};

function CircleButton({
  icon, label, raised, onClick,
}: { icon: string; label: string; raised?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      style={{
        width: 40, height: 40, borderRadius: 9999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 0, background: raised ? '#efebe7' : 'transparent',
        border: raised ? 'none' : '1px solid rgba(255,255,255,0.14)',
        boxShadow: raised ? '0px 1px 1.5px rgba(0,0,0,0.1), 0px 1px 1px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <img src={icon} alt="" width={20} height={20} />
    </button>
  );
}

/** Admin table of the public holidays and gift days for a leave year. */
export function HolidayCalendarManagementTable({
  edit = true,
  holidays = DEFAULT_HOLIDAYS,
  onNewHoliday,
  onDelete,
  onEdit,
  onOpen,
}: HolidayCalendarManagementTableProps) {
  const cols = edit ? '218px 150px 150px 1fr 1fr 130px' : '1fr 150px 150px 179px 108px';

  return (
    <div style={{ fontFamily: 'Hanken Grotesk, sans-serif', width: 1044, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, paddingBottom: 16, paddingRight: 24 }}>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 400, lineHeight: '21px', color: '#2d2a2b' }}>Holiday Calendar</p>
        </div>
        {edit && (
          <button
            type="button"
            onClick={onNewHoliday}
            style={{
              height: 36, padding: '8px 14px', borderRadius: 8, border: '1px solid #b60058', background: 'transparent',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'inherit', fontSize: 12, fontWeight: 700, lineHeight: '18px', color: '#b60058', whiteSpace: 'nowrap',
            }}
          >
            <img src={plusIcon} alt="" width={14} height={14} />
            New Holiday
          </button>
        )}
      </div>

      <div role="table" aria-label="Holiday Calendar" style={{ background: '#f8f8f8', borderRadius: 8, overflow: 'hidden' }}>
        <div role="row" style={{ display: 'grid', gridTemplateColumns: cols, gap: 8, alignItems: 'center', padding: 16, background: '#efebe7' }}>
          <span role="columnheader" style={HEAD}>Holiday Name</span>
          <span role="columnheader" style={HEAD}>Start Date</span>
          <span role="columnheader" style={{ ...HEAD, paddingLeft: 8 }}>End Date</span>
          <span role="columnheader" style={HEAD}>Day Counts</span>
          <span role="columnheader" style={HEAD}>Type</span>
          {edit && <span role="columnheader" style={HEAD}>Actions</span>}
        </div>

        {holidays.map(holiday => {
          const chip = TYPE_CHIP[holiday.type];
          return (
            <div
              key={`${holiday.name}-${holiday.startDate}`}
              role="row"
              style={{ display: 'grid', gridTemplateColumns: cols, gap: 8, alignItems: 'center', height: 100, boxSizing: 'border-box', padding: '11px 16px' }}
            >
              <span role="cell" style={{ fontSize: 14, fontWeight: 500, lineHeight: '21px', color: '#2d2a2b' }}>{holiday.name}</span>
              <span role="cell" style={{ fontSize: 16, lineHeight: '21px', color: '#2d2a2b' }}>{holiday.startDate}</span>
              <span role="cell" style={{ fontSize: 16, lineHeight: '21px', color: '#2d2a2b' }}>{holiday.endDate}</span>
              <span role="cell" style={{ fontSize: 16, lineHeight: '21px', color: '#2d2a2b' }}>{holiday.dayCount}</span>
              <span role="cell">
                <span
                  style={{
                    display: 'inline-flex', alignItems: 'center', height: 19, padding: '4px 8px', boxSizing: 'border-box',
                    borderRadius: 4, background: chip.bg, color: chip.color,
                    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500,
                  }}
                >
                  {holiday.type}
                </span>
              </span>
              {edit && (
                <span role="cell" style={{ display: 'flex', gap: 8 }}>
                  <CircleButton icon={trashIcon} label={`Delete ${holiday.name}`} raised onClick={() => onDelete?.(holiday)} />
                  <CircleButton icon={pencilIcon} label={`Edit ${holiday.name}`} onClick={() => onEdit?.(holiday)} />
                  <CircleButton icon={chevronIcon} label={`Open ${holiday.name}`} onClick={() => onOpen?.(holiday)} />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
