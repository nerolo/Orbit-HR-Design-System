import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ProgressDefault, ProgressVariants, ProgressSizes, ProgressColors,
  ProgressLabel, ProgressSizesLabel, ProgressLabelOutside, ProgressCustomStyles,
} from './Progress';

const meta = {
  title: 'Material Tailwind/Progress Bar',
  component: ProgressDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = { render: () => <ProgressVariants /> };
export const Sizes: Story = { render: () => <ProgressSizes /> };
export const Colors: Story = { render: () => <ProgressColors /> };
export const Label: Story = { render: () => <ProgressLabel /> };
export const SizesWithLabel: Story = { render: () => <ProgressSizesLabel /> };
export const LabelOutside: Story = { render: () => <ProgressLabelOutside /> };
export const CustomStyles: Story = { render: () => <ProgressCustomStyles /> };
