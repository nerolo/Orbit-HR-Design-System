import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RateSettings, RateSettingsPage } from './RateSettings';

const meta = {
  title: 'Nero design/Rate Settings',
  component: RateSettings,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    activeTab: 'orbit',
    syncEnabled: true,
    overrideEnabled: false,
    autoCalculate: true,
  },
  argTypes: {
    activeTab:       { control: 'select', options: ['orbit', 'netsuite'] },
    syncEnabled:     { control: 'boolean' },
    overrideEnabled: { control: 'boolean' },
    autoCalculate:   { control: 'boolean' },
  },
} satisfies Meta<typeof RateSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NetsuiteTab: Story = { args: { activeTab: 'netsuite' } };
export const FullPage: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => <RateSettingsPage />,
};
