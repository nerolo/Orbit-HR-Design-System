import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DrawerDefault, DrawerPlacement, DrawerWithNavigation, DrawerWithForm,
} from './Drawer';

const meta = {
  title: 'Material Tailwind/Drawer',
  component: DrawerDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DrawerDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Placement: Story = { render: () => <DrawerPlacement /> };
export const WithNavigation: Story = { render: () => <DrawerWithNavigation /> };
export const WithForm: Story = { render: () => <DrawerWithForm /> };
