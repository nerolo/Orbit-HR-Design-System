import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CheckboxDefault, CheckboxColors, CheckboxLabel, CheckboxCustomIcon,
  CheckboxRippleEffect, DisabledCheckbox, CheckboxWithLink, CheckboxWithDescription,
  CheckboxVerticalListGroup, CheckboxHorizontalListGroup, CheckboxCustomStyles,
} from './Checkbox';

const meta = {
  title: 'Material Tailwind/Checkbox',
  component: CheckboxDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Colors: Story = { render: () => <CheckboxColors /> };
export const Label: Story = { render: () => <CheckboxLabel /> };
export const CustomIcon: Story = { render: () => <CheckboxCustomIcon /> };
export const RippleEffect: Story = { render: () => <CheckboxRippleEffect /> };
export const Disabled: Story = { render: () => <DisabledCheckbox /> };
export const WithLink: Story = { render: () => <CheckboxWithLink /> };
export const WithDescription: Story = { render: () => <CheckboxWithDescription /> };
export const VerticalList: Story = { render: () => <CheckboxVerticalListGroup /> };
export const HorizontalList: Story = { render: () => <CheckboxHorizontalListGroup /> };
export const CustomStyles: Story = { render: () => <CheckboxCustomStyles /> };
