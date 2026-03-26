import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AvatarDefault, AvatarVariants, AvatarSizes, AvatarWithBorder,
  AvatarWithText, AvatarStack, AvatarWithDotIndicator, AvatarCustomStyles,
} from './Avatar';

const meta = {
  title: 'Material Tailwind/Avatar',
  component: AvatarDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Avatar } from "@material-tailwind/react";

export function AvatarDefault() {
  return <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />;
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <AvatarVariants /> };
export const Sizes: Story = { render: () => <AvatarSizes /> };
export const WithBorder: Story = { render: () => <AvatarWithBorder /> };
export const WithText: Story = { render: () => <AvatarWithText /> };
export const Stack: Story = { render: () => <AvatarStack /> };
export const WithDotIndicator: Story = { render: () => <AvatarWithDotIndicator /> };
export const CustomStyles: Story = { render: () => <AvatarCustomStyles /> };
