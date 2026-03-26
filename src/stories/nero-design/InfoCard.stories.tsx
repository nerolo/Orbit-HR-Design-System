import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoCardSingle, InfoCardTwoSlot, InfoCardHorizontal, InfoCardAllVariants } from './InfoCard';

const meta = {
  title: 'Nero design/Info Card',
  component: InfoCardAllVariants,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InfoCardAllVariants>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {};
export const SingleData: Story = { render: () => <InfoCardSingle /> };
export const TwoSlots: Story = { render: () => <InfoCardTwoSlot /> };
export const Horizontal: Story = { render: () => <InfoCardHorizontal /> };
