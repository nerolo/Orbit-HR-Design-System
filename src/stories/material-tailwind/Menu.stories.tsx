import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  MenuDefault, NestedMenu, MenuCustomAnimation, MenuCustomList,
  MenuDivider, MenuWithCheckbox, MenuWithSearchInput, NotificationsMenu,
} from './Menu';

const meta = {
  title: 'Material Tailwind/Menu',
  component: MenuDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Nested: Story = { render: () => <NestedMenu /> };
export const CustomAnimation: Story = { render: () => <MenuCustomAnimation /> };
export const CustomList: Story = { render: () => <MenuCustomList /> };
export const Divider: Story = { render: () => <MenuDivider /> };
export const WithCheckbox: Story = { render: () => <MenuWithCheckbox /> };
export const WithSearchInput: Story = { render: () => <MenuWithSearchInput /> };
export const Notifications: Story = { render: () => <NotificationsMenu /> };
