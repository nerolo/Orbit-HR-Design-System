import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BadgeDefault, BadgeColors, BadgePlacement, BadgeOverlap,
  BadgeWithBorder, BadgeDot, BadgeCustomStyles,
} from './Badge';

const meta = {
  title: 'Material Tailwind/Badge',
  component: BadgeDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Badge, Button } from "@material-tailwind/react";

export function BadgeDefault() {
  return (
    <Badge content="5">
      <Button>Notifications</Button>
    </Badge>
  );
}`,
      },
    },
  },
};
export const Colors: Story = { render: () => <BadgeColors /> };
export const Placement: Story = { render: () => <BadgePlacement /> };
export const Overlap: Story = { render: () => <BadgeOverlap /> };
export const WithBorder: Story = { render: () => <BadgeWithBorder /> };
export const Dot: Story = { render: () => <BadgeDot /> };
export const CustomStyles: Story = { render: () => <BadgeCustomStyles /> };
