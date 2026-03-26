import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimTools, ClaimToolsOnBackground } from './ClaimTools';

const meta = {
  title: 'Nero design/Claim Tools',
  component: ClaimTools,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ClaimTools>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OnBackground: Story = { render: () => <ClaimToolsOnBackground /> };
