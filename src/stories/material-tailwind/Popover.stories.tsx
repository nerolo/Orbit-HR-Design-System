import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  PopoverDefault, PopoverPlacement, PopoverCustomAnimation,
  SubscriptionPopover, PopoverWithImage, ProfileInfoPopover,
} from './Popover';

const meta = {
  title: 'Material Tailwind/Popover',
  component: PopoverDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof PopoverDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Placement: Story = { render: () => <PopoverPlacement /> };
export const CustomAnimation: Story = { render: () => <PopoverCustomAnimation /> };
export const Subscription: Story = { render: () => <SubscriptionPopover /> };
export const WithImage: Story = { render: () => <PopoverWithImage /> };
export const ProfileInfo: Story = { render: () => <ProfileInfoPopover /> };
