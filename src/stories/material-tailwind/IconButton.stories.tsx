import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  IconButtonDefault, IconButtonVariants, IconButtonSizes,
  IconButtonColors, IconButtonRounded, IconButtonCustomStyles,
} from './IconButton';

const meta = {
  title: 'Material Tailwind/Icon Button',
  component: IconButtonDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButtonDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = { render: () => <IconButtonVariants /> };
export const Sizes: Story = { render: () => <IconButtonSizes /> };
export const Colors: Story = { render: () => <IconButtonColors /> };
export const Rounded: Story = { render: () => <IconButtonRounded /> };
export const CustomStyles: Story = { render: () => <IconButtonCustomStyles /> };
