import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDefault, AlertDismissed } from './Alert';

const meta = {
  title: 'Nero design/Alert',
  component: AlertDefault,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Dismissible: Story = { render: () => <AlertDismissed /> };
