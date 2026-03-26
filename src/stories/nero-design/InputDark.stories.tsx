import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputDarkDefault, InputDarkActive, InputDarkAllStates } from './InputDark';

const meta = {
  title: 'Nero design/Input Dark',
  component: InputDarkAllStates,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputDarkAllStates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {};
export const Default: Story = { render: () => <InputDarkDefault /> };
export const Active: Story = { render: () => <InputDarkActive /> };
