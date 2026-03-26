import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputWithButtonActive, InputWithButtonDisabled, InputWithButtonAllStates } from './InputWithButton';

const meta = {
  title: 'Nero design/Input with Button',
  component: InputWithButtonAllStates,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputWithButtonAllStates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {};
export const Active: Story = { render: () => <InputWithButtonActive /> };
export const Disabled: Story = { render: () => <InputWithButtonDisabled /> };
