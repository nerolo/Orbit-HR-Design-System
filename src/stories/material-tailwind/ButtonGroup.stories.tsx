import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ButtonGroupDefault, ButtonGroupVariants, ButtonGroupSizes, ButtonGroupColors,
  BlockLevelButtonGroup, ButtonGroupRippleEffect, ButtonGroupCustomStyles,
} from './ButtonGroup';

const meta = {
  title: 'Material Tailwind/Button Group',
  component: ButtonGroupDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroupDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = { render: () => <ButtonGroupVariants /> };
export const Sizes: Story = { render: () => <ButtonGroupSizes /> };
export const Colors: Story = { render: () => <ButtonGroupColors /> };
export const BlockLevel: Story = { render: () => <BlockLevelButtonGroup /> };
export const RippleEffect: Story = { render: () => <ButtonGroupRippleEffect /> };
export const CustomStyles: Story = { render: () => <ButtonGroupCustomStyles /> };
