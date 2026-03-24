import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultGallery, MasonryGridGallery, FeaturedImageGallery,
  QuadGallery, GalleryWithCarousel, GalleryWithTab,
} from './Gallery';

const meta = {
  title: 'Material Tailwind/Gallery',
  component: DefaultGallery,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const MasonryGrid: Story = { render: () => <MasonryGridGallery /> };
export const FeaturedImage: Story = { render: () => <FeaturedImageGallery /> };
export const Quad: Story = { render: () => <QuadGallery /> };
export const WithCarousel: Story = { render: () => <GalleryWithCarousel /> };
export const WithTab: Story = { render: () => <GalleryWithTab /> };
