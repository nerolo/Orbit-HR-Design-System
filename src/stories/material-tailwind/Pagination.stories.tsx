import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultPagination, CircularPagination, SimplePagination, PaginationGroup,
} from './Pagination';

const meta = {
  title: 'Material Tailwind/Pagination',
  component: DefaultPagination,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Circular: Story = { render: () => <CircularPagination /> };
export const Simple: Story = { render: () => <SimplePagination /> };
export const Group: Story = { render: () => <PaginationGroup /> };
