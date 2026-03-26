import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CarouselDefault, CarouselWithContent, CarouselTransition,
  CarouselCustomArrows, CarouselCustomNavigation,
} from './Carousel';

const meta = {
  title: 'Material Tailwind/Carousel',
  component: CarouselDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CarouselDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}`,
      },
    },
  },
};
export const WithContent: Story = { render: () => <CarouselWithContent /> };
export const Transition: Story = { render: () => <CarouselTransition /> };
export const CustomArrows: Story = { render: () => <CarouselCustomArrows /> };
export const CustomNavigation: Story = { render: () => <CarouselCustomNavigation /> };
