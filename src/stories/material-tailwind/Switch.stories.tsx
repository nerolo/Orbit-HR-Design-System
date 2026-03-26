import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  SwitchDefault, CheckedSwitch, SwitchColors, SwitchLabel,
  SwitchRippleEffect, SwitchDisabled, SwitchWithDescription, SwitchCustomStyles,
} from './Switch';

const meta = {
  title: 'Material Tailwind/Switch',
  component: SwitchDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Switch } from "@material-tailwind/react";

export function SwitchDefault() {
  return <Switch />;
}`,
      },
    },
  },
};
export const Checked: Story = { render: () => <CheckedSwitch /> };
export const Colors: Story = { render: () => <SwitchColors /> };
export const Label: Story = { render: () => <SwitchLabel /> };
export const RippleEffect: Story = { render: () => <SwitchRippleEffect /> };
export const Disabled: Story = { render: () => <SwitchDisabled /> };
export const WithDescription: Story = { render: () => <SwitchWithDescription /> };
export const CustomStyles: Story = { render: () => <SwitchCustomStyles /> };
