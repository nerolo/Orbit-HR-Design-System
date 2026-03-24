import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DefaultVideo, AutoplayVideo, MutedVideo } from './Video';

const meta = {
  title: 'Material Tailwind/Video',
  component: DefaultVideo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Autoplay: Story = { render: () => <AutoplayVideo /> };
export const Muted: Story = { render: () => <MutedVideo /> };
