import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ChipDefault, ChipVariants, ChipSizes, ChipColors, ChipPills,
  ChipWithStatus, ChipWithCheckbox, ChipDismissible, ChipCustomAnimation, ChipWithAvatar,
} from './Chip';

const meta = {
  title: 'Material Tailwind/Chip',
  component: ChipDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ChipDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Chip } from "@material-tailwind/react";

export function ChipDefault() {
  return <Chip value="chip" />;
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <ChipVariants /> };
export const Sizes: Story = { render: () => <ChipSizes /> };
export const Colors: Story = { render: () => <ChipColors /> };
export const Pills: Story = { render: () => <ChipPills /> };
export const WithStatus: Story = { render: () => <ChipWithStatus /> };
export const WithCheckbox: Story = { render: () => <ChipWithCheckbox /> };
export const Dismissible: Story = { render: () => <ChipDismissible /> };
export const CustomAnimation: Story = { render: () => <ChipCustomAnimation /> };
export const WithAvatar: Story = { render: () => <ChipWithAvatar /> };
