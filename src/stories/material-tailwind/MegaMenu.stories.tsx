import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MegaMenuDefault, MegaMenuWithHover, MegaMenuWithPlacement } from './MegaMenu';

const meta = {
  title: 'Material Tailwind/Mega Menu',
  component: MegaMenuDefault,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof MegaMenuDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHover: Story = { render: () => <MegaMenuWithHover /> };
export const WithPlacement: Story = { render: () => <MegaMenuWithPlacement /> };
