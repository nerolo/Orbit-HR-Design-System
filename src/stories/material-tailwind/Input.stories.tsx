import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  InputDefault, InputVariants, InputSizes, InputColors, InputValidations,
  InputIcon, InputWithHelperText, InputWithButton, InputDisabled,
  InputForDarkSurface, InputCustomStyles,
} from './Input';
import { Input } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Input',
  component: InputDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Input } from "@material-tailwind/react";

export function InputDefault() {
  return (
    <div className="w-72">
      <Input label="Username" />
    </div>
  );
}`,
      },
    },
  },
};
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

export const Playground: Story = {
  render: (args: any) => <div className="w-72"><Input {...args} /></div>,
  args: { label: 'Username', size: 'md', color: 'blue', variant: 'outlined', disabled: false, error: false, success: false },
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['md', 'lg'] },
    color: { control: 'select', options: ['blue', 'red', 'green', 'amber', 'gray'] },
    variant: { control: 'select', options: ['outlined', 'standard', 'static'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
  },
};
