import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TypographyDefault, TypographyVariants, TypographyColors, TypographyGradientColor,
} from './Typography';

const meta = {
  title: 'Material Tailwind/Typography',
  component: TypographyDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof TypographyDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = { render: () => <TypographyVariants /> };
export const Colors: Story = { render: () => <TypographyColors /> };
export const GradientColor: Story = { render: () => <TypographyGradientColor /> };
