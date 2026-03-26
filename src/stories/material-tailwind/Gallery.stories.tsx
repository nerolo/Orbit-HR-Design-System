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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `export function DefaultGallery() {
  const data = [
    { imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" },
    { imageLink: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
    { imageLink: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" },
    { imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80" },
    { imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80" },
    { imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}`,
      },
    },
  },
};
export const MasonryGrid: Story = { render: () => <MasonryGridGallery /> };
export const FeaturedImage: Story = { render: () => <FeaturedImageGallery /> };
export const Quad: Story = { render: () => <QuadGallery /> };
export const WithCarousel: Story = { render: () => <GalleryWithCarousel /> };
export const WithTab: Story = { render: () => <GalleryWithTab /> };
