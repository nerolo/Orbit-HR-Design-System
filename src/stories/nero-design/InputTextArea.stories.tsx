import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputTextAreaDefault, InputTextAreaActive, InputTextAreaAllStates } from './InputTextArea';

const meta = {
  title: 'Nero design/Input Text Area',
  component: InputTextAreaAllStates,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputTextAreaAllStates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {};
export const Default: Story = { render: () => <InputTextAreaDefault /> };
export const Active: Story = { render: () => <InputTextAreaActive /> };
