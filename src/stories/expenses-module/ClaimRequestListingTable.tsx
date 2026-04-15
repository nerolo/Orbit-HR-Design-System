import React from 'react';

export type ClaimStatus = 'Draft' | 'Return' | 'Rejected' | 'Completed' | 'Pending' | 'Approved';
export type ClaimTablePage = 'My Claim' | 'All Claim' | 'Pending Requests' | 'Resolved Requests';

export interface ClaimRow {
  id: string;
  title: string;
  status: ClaimStatus;
  createdDate: string;
  submittedBy?: string;
  selected?: boolean;
}

export interface ClaimRequestListingTableProps {
  page?: ClaimTablePage;
  rows?: ClaimRow[];
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
  onSelect?: (id: string) => void;
}

function StatusBadge({ status }: { status: ClaimStatus }) {
  const config: Record<ClaimStatus, { bg: string; text: string; label: string; icon?: React.ReactNode }> = {
    Draft: {
      bg: '#eceff1',
      text: '#212121',
      label: 'Draft',
    },
    Return: {
      bg: '#ffc107',
      text: '#2d2a2b',
      label: 'Return',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    Rejected: {
      bg: '#ef5350',
      text: '#ffffff',
      label: 'Rejected',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    Completed: {
      bg: '#9ccc65',
      text: '#ffffff',
      label: 'Completed',
    },
    Pending: {
      bg: '#ffc107',
      text: '#2d2a2b',
      label: 'Pending',
    },
    Approved: {
      bg: '#9ccc65',
      text: '#ffffff',
      label: 'Approved',
    },
  };

  const { bg, text, label, icon } = config[status];

  return (
    <span
      className="inline-flex items-center gap-1 h-[24px] px-[8px] py-[4px] rounded-[4px] text-[12px] font-bold whitespace-nowrap"
      style={{ backgroundColor: bg, color: text }}
    >
      {icon}
      {label}
    </span>
  );
}

function TrashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

const defaultRows: ClaimRow[] = [
  { id: 'EXP-10421', title: 'Nike Sport V2', status: 'Draft', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10422', title: 'Nike Sport V2', status: 'Draft', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10423', title: 'Nike Sport V2', status: 'Draft', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10424', title: 'Nike Sport V2', status: 'Return', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10425', title: 'Nike Sport V2', status: 'Rejected', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10426', title: 'Nike Sport V2', status: 'Completed', createdDate: '1 Nov, 10:20 AM' },
];

export function ClaimRequestListingTable({
  page = 'My Claim',
  rows = defaultRows,
  searchPlaceholder = 'Search here',
  onSearch,
  onDelete,
  onView,
  onSelect,
}: ClaimRequestListingTableProps) {
  const showSubmittedBy = page === 'All Claim' || page === 'Pending Requests' || page === 'Resolved Requests';

  return (
    <div
      className="bg-[#f8f8f8] rounded-[2px] overflow-hidden w-full"
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -1px rgba(0,0,0,0.06)',
      }}
    >
      {/* Search bar */}
      <div className="px-6 pt-[33px] pb-2">
        <div className="relative w-[223px]">
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full h-[42px] border border-[#607d8b] rounded-[8px] px-[14px] text-[16px] text-[#607d8b] bg-transparent outline-none placeholder-[#607d8b]"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#efebe7]">
            <th className="px-4 py-2 text-left">
              <div className="flex items-center gap-1 text-[12px] font-bold text-[#607d8b] uppercase">
                Expense ID
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#607d8b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2 text-left">
              <div className="flex items-center gap-1 text-[12px] font-bold text-[#607d8b] uppercase">
                Expense Claim Title
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#607d8b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
                </svg>
              </div>
            </th>
            {showSubmittedBy && (
              <th className="px-4 py-2 text-left">
                <div className="flex items-center gap-1 text-[12px] font-bold text-[#607d8b] uppercase">
                  Submitted By
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#607d8b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
                  </svg>
                </div>
              </th>
            )}
            <th className="px-4 py-2 text-left">
              <div className="flex items-center gap-1 text-[12px] font-bold text-[#607d8b] uppercase">
                Status
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#607d8b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2 text-left">
              <div className="flex items-center gap-1 text-[12px] font-bold text-[#607d8b] uppercase">
                Created Date
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#607d8b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-[#efebe7] hover:bg-[#f4f2f1] transition-colors">
              <td className="px-4 py-[16px]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={row.selected ?? false}
                    onChange={() => onSelect?.(row.id)}
                    className="w-[18px] h-[18px] border border-[#cfd8dc] rounded-[4px] bg-white shrink-0 cursor-pointer"
                  />
                  <span className="text-[14px] font-normal text-[#607d8b] whitespace-nowrap">{row.id}</span>
                </div>
              </td>
              <td className="px-4 py-[16px]">
                <span className="text-[14px] font-normal text-[#607d8b]">{row.title}</span>
              </td>
              {showSubmittedBy && (
                <td className="px-4 py-[16px]">
                  <span className="text-[14px] font-normal text-[#607d8b]">{row.submittedBy ?? '—'}</span>
                </td>
              )}
              <td className="px-4 py-[16px]">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-[16px]">
                <span className="text-[14px] font-normal text-[#607d8b] whitespace-nowrap">{row.createdDate}</span>
              </td>
              <td className="px-4 py-[16px]">
                <div className="flex items-center gap-2 justify-center">
                  <button
                    onClick={() => onDelete?.(row.id)}
                    className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#f5f5f5] text-[#607d8b] hover:bg-[#e0e0e0] transition-colors"
                    style={{ boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)' }}
                    aria-label="Delete"
                  >
                    <TrashIcon />
                  </button>
                  <button
                    onClick={() => onView?.(row.id)}
                    className="flex items-center justify-center w-[40px] h-[40px] rounded-full text-[#607d8b] hover:bg-[#f5f5f5] transition-colors"
                    aria-label="View details"
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
