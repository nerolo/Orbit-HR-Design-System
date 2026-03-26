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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Typography } from "@material-tailwind/react";

export function TypographyDefault() {
  return (
    <Typography>
      Material Tailwind is an easy to use components library for Tailwind CSS
      and Material Design. It provides a simple way to customize your
      components, you can change the colors, fonts, breakpoints and everything
      you need.
    </Typography>
  );
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <TypographyVariants /> };
export const Colors: Story = { render: () => <TypographyColors /> };
export const GradientColor: Story = { render: () => <TypographyGradientColor /> };
