import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultSkeleton, ImagePlaceholderSkeleton, VideoPlaceholderSkeleton, CardPlaceholderSkeleton,
} from './Skeleton';

const meta = {
  title: 'Material Tailwind/Skeleton',
  component: DefaultSkeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ImagePlaceholder: Story = { render: () => <ImagePlaceholderSkeleton /> };
export const VideoPlaceholder: Story = { render: () => <VideoPlaceholderSkeleton /> };
export const CardPlaceholder: Story = { render: () => <CardPlaceholderSkeleton /> };
