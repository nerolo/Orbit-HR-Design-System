import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  SelectDefault, SelectVariants, SelectSizes, SelectColors, SelectValidations,
  ControlledSelect, SelectCustomAnimation, SelectDisabled,
} from './Select';

const meta = {
  title: 'Material Tailwind/Select',
  component: SelectDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = { render: () => <SelectVariants /> };
export const Sizes: Story = { render: () => <SelectSizes /> };
export const Colors: Story = { render: () => <SelectColors /> };
export const Validations: Story = { render: () => <SelectValidations /> };
export const Controlled: Story = { render: () => <ControlledSelect /> };
export const CustomAnimation: Story = { render: () => <SelectCustomAnimation /> };
export const Disabled: Story = { render: () => <SelectDisabled /> };
