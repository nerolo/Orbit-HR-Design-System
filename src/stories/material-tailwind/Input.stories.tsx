import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  InputDefault, InputVariants, InputSizes, InputColors, InputValidations,
  InputIcon, InputWithHelperText, InputWithButton, InputDisabled,
  InputForDarkSurface, InputCustomStyles,
} from './Input';

const meta = {
  title: 'Material Tailwind/Input',
  component: InputDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = { render: () => <InputVariants /> };
export const Sizes: Story = { render: () => <InputSizes /> };
export const Colors: Story = { render: () => <InputColors /> };
export const Validations: Story = { render: () => <InputValidations /> };
export const Icon: Story = { render: () => <InputIcon /> };
export const WithHelperText: Story = { render: () => <InputWithHelperText /> };
export const WithButton: Story = { render: () => <InputWithButton /> };
export const Disabled: Story = { render: () => <InputDisabled /> };
export const ForDarkSurface: Story = { render: () => <InputForDarkSurface /> };
export const CustomStyles: Story = { render: () => <InputCustomStyles /> };
