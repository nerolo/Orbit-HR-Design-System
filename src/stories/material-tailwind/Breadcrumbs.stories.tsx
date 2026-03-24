import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BreadcrumbsDefault, BreadcrumbsWithIcon, BlockLevelBreadcrumbs,
  BreadcrumbsCustomSeparator, BreadcrumbsCustomStyles,
} from './Breadcrumbs';

const meta = {
  title: 'Material Tailwind/Breadcrumbs',
  component: BreadcrumbsDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbsDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithIcon: Story = { render: () => <BreadcrumbsWithIcon /> };
export const BlockLevel: Story = { render: () => <BlockLevelBreadcrumbs /> };
export const CustomSeparator: Story = { render: () => <BreadcrumbsCustomSeparator /> };
export const CustomStyles: Story = { render: () => <BreadcrumbsCustomStyles /> };
