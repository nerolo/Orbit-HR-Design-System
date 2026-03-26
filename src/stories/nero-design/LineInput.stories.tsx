import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineInputDefault, LineInputActive, LineInputMenuExpand, LineInputAllStates } from './LineInput';

const meta = {
  title: 'Nero design/Line Input',
  component: LineInputAllStates,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof LineInputAllStates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {};
export const Default: Story = { render: () => <LineInputDefault /> };
export const Active: Story = { render: () => <LineInputActive /> };
export const MenuExpand: Story = { render: () => <LineInputMenuExpand /> };
