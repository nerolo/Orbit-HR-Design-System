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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `export function VideoDefault() {
  return (
    <video className="h-full w-full rounded-lg" controls>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}`,
      },
    },
  },
};
export const Autoplay: Story = { render: () => <AutoplayVideo /> };
export const Muted: Story = { render: () => <MutedVideo /> };
