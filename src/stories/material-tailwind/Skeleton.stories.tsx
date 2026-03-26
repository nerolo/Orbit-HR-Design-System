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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Typography } from "@material-tailwind/react";

export function DefaultSkeleton() {
  return (
    <div className="max-w-full animate-pulse">
      <Typography as="div" variant="h1" className="mb-4 h-3 w-56 rounded-full bg-gray-300">
        &nbsp;
      </Typography>
      <Typography as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">
        &nbsp;
      </Typography>
      <Typography as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">
        &nbsp;
      </Typography>
      <Typography as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">
        &nbsp;
      </Typography>
      <Typography as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">
        &nbsp;
      </Typography>
    </div>
  );
}`,
      },
    },
  },
};
export const ImagePlaceholder: Story = { render: () => <ImagePlaceholderSkeleton /> };
export const VideoPlaceholder: Story = { render: () => <VideoPlaceholderSkeleton /> };
export const CardPlaceholder: Story = { render: () => <CardPlaceholderSkeleton /> };

export const Playground: Story = { render: () => <div className="p-4 text-gray-500">Skeleton is a layout component — see Default story for full example.</div> };
