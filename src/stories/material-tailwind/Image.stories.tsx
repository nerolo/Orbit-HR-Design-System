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

export const Default: Story = {};
export const RoundedCorners: Story = { render: () => <ImgWithRoundedCorners /> };
export const Circular: Story = { render: () => <CircularImg /> };
export const WithCaption: Story = { render: () => <ImgWithCaption /> };
export const WithShadow: Story = { render: () => <ImgWithShadow /> };
export const WithBlurredCaption: Story = { render: () => <ImgWithBlurredCaption /> };
