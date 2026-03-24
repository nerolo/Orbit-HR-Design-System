import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavbarDefault, NavbarWithSearch } from './Navbar';

const meta = {
  title: 'Material Tailwind/Navbar',
  component: NavbarDefault,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof NavbarDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithSearch: Story = { render: () => <NavbarWithSearch /> };
