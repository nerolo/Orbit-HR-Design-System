import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputDefault, InputFocus, InputDisabled, InputAllStates } from './Input';

const meta = {
  title: 'Nero design/Input',
  component: InputAllStates,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputAllStates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {};
export const Default: Story = { render: () => <InputDefault /> };
export const Focus: Story = { render: () => <InputFocus /> };
export const Disabled: Story = { render: () => <InputDisabled /> };
