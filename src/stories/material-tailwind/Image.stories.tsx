import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultImg, ImgWithRoundedCorners, CircularImg,
  ImgWithCaption, ImgWithShadow, ImgWithBlurredCaption,
} from './Image';

const meta = {
  title: 'Material Tailwind/Image',
  component: DefaultImg,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `export function ImageDefault() {
  return (
    <img
      className="h-96 w-full rounded-lg object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80"
      alt="nature"
    />
  );
}`,
      },
    },
  },
};
export const RoundedCorners: Story = { render: () => <ImgWithRoundedCorners /> };
export const Circular: Story = { render: () => <CircularImg /> };
export const WithCaption: Story = { render: () => <ImgWithCaption /> };
export const WithShadow: Story = { render: () => <ImgWithShadow /> };
export const WithBlurredCaption: Story = { render: () => <ImgWithBlurredCaption /> };
