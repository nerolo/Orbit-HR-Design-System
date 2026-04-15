import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterMenu, FilterMenuOnBackground } from './FilterMenu';

const meta = {
  title: 'Expenses module/Filter Menu',
  component: FilterMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDateRange: Story = {
  name: 'With Date Range Selected',
  args: {
    defaultFromDate: new Date(2020, 4, 8),
    defaultToDate: new Date(2020, 4, 16),
  },
};

export const WithStatusFilters: Story = {
  name: 'With Status Filters',
  args: {
    defaultStatuses: ['Pending', 'Return'],
  },
};

export const WithAllFilters: Story = {
  name: 'With All Filters',
  args: {
    defaultStatuses: ['Pending', 'Manager Approved'],
    defaultName: 'Ada Wong',
    defaultFromDate: new Date(2020, 4, 8),
    defaultToDate: new Date(2020, 4, 16),
  },
};

export const OnBackground: Story = {
  render: () => <FilterMenuOnBackground />,
};
