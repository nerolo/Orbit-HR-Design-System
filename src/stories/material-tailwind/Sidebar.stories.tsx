import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultSidebar, MultiLevelSidebar, SidebarWithContentSeparator,
  SidebarWithCta, SidebarWithLogo, SidebarWithSearch, SidebarWithBurgerMenu,
} from './Sidebar';

const meta = {
  title: 'Material Tailwind/Sidebar',
  component: DefaultSidebar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const MultiLevel: Story = { render: () => <MultiLevelSidebar /> };
export const WithContentSeparator: Story = { render: () => <SidebarWithContentSeparator /> };
export const WithCta: Story = { render: () => <SidebarWithCta /> };
export const WithLogo: Story = { render: () => <SidebarWithLogo /> };
export const WithSearch: Story = { render: () => <SidebarWithSearch /> };
export const WithBurgerMenu: Story = { render: () => <SidebarWithBurgerMenu /> };
