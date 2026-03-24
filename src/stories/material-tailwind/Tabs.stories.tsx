import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TabsDefault, TabsWithIcon, TabsCustomAnimation,
  TransparentTabs, VerticalTabs, UnderlineTabs,
} from './Tabs';

const meta = {
  title: 'Material Tailwind/Tabs',
  component: TabsDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof TabsDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithIcon: Story = { render: () => <TabsWithIcon /> };
export const CustomAnimation: Story = { render: () => <TabsCustomAnimation /> };
export const Transparent: Story = { render: () => <TransparentTabs /> };
export const Vertical: Story = { render: () => <VerticalTabs /> };
export const Underline: Story = { render: () => <UnderlineTabs /> };
