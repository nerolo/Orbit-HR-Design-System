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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];
const TABLE_ROWS = [
  { name: "John Michael", job: "Manager", date: "23/04/18" },
  { name: "Alexa Liras", job: "Developer", date: "23/04/18" },
  { name: "Laurent Perrier", job: "Executive", date: "19/09/17" },
  { name: "Michael Levi", job: "Developer", date: "24/12/08" },
  { name: "Richard Gran", job: "Manager", date: "04/10/21" },
];

export function DefaultTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={name}>
                <td className={classes}><Typography variant="small" color="blue-gray" className="font-normal">{name}</Typography></td>
                <td className={classes}><Typography variant="small" color="blue-gray" className="font-normal">{job}</Typography></td>
                <td className={classes}><Typography variant="small" color="blue-gray" className="font-normal">{date}</Typography></td>
                <td className={classes}><Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">Edit</Typography></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}`,
      },
    },
  },
};
export const StripedRows: Story = { render: () => <TableWithStripedRows /> };
export const StripedColumns: Story = { render: () => <TableWithStripedColumns /> };
export const Transactions: Story = { render: () => <TransactionsTable /> };
export const Members: Story = { render: () => <MembersTable /> };
export const Sortable: Story = { render: () => <SortableTable /> };

export const Playground: Story = { render: () => <div className="p-4 text-gray-500">Table is a layout component — see Default story for full example.</div> };
