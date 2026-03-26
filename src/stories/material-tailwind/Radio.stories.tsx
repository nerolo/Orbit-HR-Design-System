import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  RadioDefault, RadioColors, RadioCustomIcon, RadioRippleEffect,
  RadioDisabled, RadioWithLink, RadioVerticalList, RadioHorizontalList, RadioCustomStyles,
} from './Radio';

const meta = {
  title: 'Material Tailwind/Radio Button',
  component: RadioDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Radio } from "@material-tailwind/react";

export function RadioDefault() {
  return (
    <div className="flex gap-10">
      <Radio name="type" label="HTML" />
      <Radio name="type" label="React" defaultChecked />
    </div>
  );
}`,
      },
    },
  },
};
export const Colors: Story = { render: () => <RadioColors /> };
export const CustomIcon: Story = { render: () => <RadioCustomIcon /> };
export const RippleEffect: Story = { render: () => <RadioRippleEffect /> };
export const Disabled: Story = { render: () => <RadioDisabled /> };
export const WithLink: Story = { render: () => <RadioWithLink /> };
export const VerticalList: Story = { render: () => <RadioVerticalList /> };
export const HorizontalList: Story = { render: () => <RadioHorizontalList /> };
export const CustomStyles: Story = { render: () => <RadioCustomStyles /> };
