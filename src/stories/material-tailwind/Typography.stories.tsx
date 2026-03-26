import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TypographyDefault, TypographyVariants, TypographyColors, TypographyGradientColor,
} from './Typography';
import { Typography } from '@material-tailwind/react';

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

export const Playground: Story = {
  render: (args) => <Typography {...args} />,
  args: { variant: 'h1', color: 'inherit', children: 'Material Tailwind' },
  argTypes: {
    variant: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'lead', 'paragraph', 'small'] },
    color: { control: 'select', options: ['inherit', 'current', 'black', 'white', 'blue-gray', 'gray', 'brown', 'deep-orange', 'orange', 'amber', 'yellow', 'lime', 'light-green', 'green', 'teal', 'cyan', 'light-blue', 'blue', 'indigo', 'deep-purple', 'purple', 'pink', 'red'] },
    children: { control: 'text' },
  },
};
