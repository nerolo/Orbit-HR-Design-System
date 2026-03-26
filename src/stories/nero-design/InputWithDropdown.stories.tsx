import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputWithDropdownDefault, InputWithDropdownActive, InputWithDropdownAllStates } from './InputWithDropdown';

const meta = {
  title: 'Nero design/Input with Dropdown',
  component: InputWithDropdownAllStates,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputWithDropdownAllStates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {};
export const Default: Story = { render: () => <InputWithDropdownDefault /> };
export const Active: Story = { render: () => <InputWithDropdownActive /> };
