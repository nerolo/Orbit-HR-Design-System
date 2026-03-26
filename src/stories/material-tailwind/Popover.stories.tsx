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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export function PopoverDefault() {
  return (
    <Popover>
      <PopoverHandler>
        <Button>Popover</Button>
      </PopoverHandler>
      <PopoverContent>
        This is a very beautiful popover, show some love.
      </PopoverContent>
    </Popover>
  );
}`,
      },
    },
  },
};
export const Placement: Story = { render: () => <PopoverPlacement /> };
export const CustomAnimation: Story = { render: () => <PopoverCustomAnimation /> };
export const Subscription: Story = { render: () => <SubscriptionPopover /> };
export const WithImage: Story = { render: () => <PopoverWithImage /> };
export const ProfileInfo: Story = { render: () => <ProfileInfoPopover /> };
