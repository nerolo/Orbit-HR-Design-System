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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Select, Option } from "@material-tailwind/react";

export function SelectDefault() {
  return (
    <div className="w-72">
      <Select label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <SelectVariants /> };
export const Sizes: Story = { render: () => <SelectSizes /> };
export const Colors: Story = { render: () => <SelectColors /> };
export const Validations: Story = { render: () => <SelectValidations /> };
export const Controlled: Story = { render: () => <ControlledSelect /> };
export const CustomAnimation: Story = { render: () => <SelectCustomAnimation /> };
export const Disabled: Story = { render: () => <SelectDisabled /> };
