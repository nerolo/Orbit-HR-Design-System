import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimRequestListingTable } from './ClaimRequestListingTable';
import type { ClaimRow } from './ClaimRequestListingTable';

const meta = {
  title: 'Expenses module/Claim Request Listing Table',
  component: ClaimRequestListingTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: 'select',
      options: ['My Claim', 'All Claim', 'Pending Requests', 'Resolved Requests'],
      description: 'Which page/view the table is shown in',
    },
  },
} satisfies Meta<typeof ClaimRequestListingTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const myClaimRows: ClaimRow[] = [
  { id: 'EXP-10421', title: 'Nike Sport V2', status: 'Draft', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10422', title: 'Nike Sport V2', status: 'Draft', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10423', title: 'Nike Sport V2', status: 'Draft', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10424', title: 'Nike Sport V2', status: 'Return', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10425', title: 'Nike Sport V2', status: 'Rejected', createdDate: '1 Nov, 10:20 AM' },
  { id: 'EXP-10426', title: 'Nike Sport V2', status: 'Completed', createdDate: '1 Nov, 10:20 AM' },
];

const allClaimRows: ClaimRow[] = [
  { id: 'EXP-10421', title: 'Nike Sport V2', status: 'Pending', createdDate: '1 Nov, 10:20 AM', submittedBy: 'John Doe' },
  { id: 'EXP-10422', title: 'Nike Sport V2', status: 'Approved', createdDate: '1 Nov, 10:20 AM', submittedBy: 'Jane Smith' },
  { id: 'EXP-10423', title: 'Team Offsite', status: 'Rejected', createdDate: '2 Nov, 09:00 AM', submittedBy: 'Alan Lee' },
  { id: 'EXP-10424', title: 'Office Supplies', status: 'Completed', createdDate: '3 Nov, 11:00 AM', submittedBy: 'Mary Tan' },
];

export const MyClaim: Story = {
  name: 'My Claim',
  args: {
    page: 'My Claim',
    rows: myClaimRows,
  },
};

export const AllClaim: Story = {
  name: 'All Claim',
  args: {
    page: 'All Claim',
    rows: allClaimRows,
  },
};

export const PendingRequests: Story = {
  name: 'Pending Requests',
  args: {
    page: 'Pending Requests',
    rows: allClaimRows.filter(r => r.status === 'Pending'),
  },
};

export const ResolvedRequests: Story = {
  name: 'Resolved Requests',
  args: {
    page: 'Resolved Requests',
    rows: allClaimRows.filter(r => ['Approved', 'Rejected', 'Completed'].includes(r.status)),
  },
};
