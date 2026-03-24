import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultTable, TableWithStripedRows, TableWithStripedColumns,
  TransactionsTable, MembersTable, SortableTable,
} from './Table';

const meta = {
  title: 'Material Tailwind/Table',
  component: DefaultTable,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const StripedRows: Story = { render: () => <TableWithStripedRows /> };
export const StripedColumns: Story = { render: () => <TableWithStripedColumns /> };
export const Transactions: Story = { render: () => <TransactionsTable /> };
export const Members: Story = { render: () => <MembersTable /> };
export const Sortable: Story = { render: () => <SortableTable /> };
