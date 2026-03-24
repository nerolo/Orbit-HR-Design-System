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

export const Default: Story = {};
export const WithContent: Story = { render: () => <CarouselWithContent /> };
export const Transition: Story = { render: () => <CarouselTransition /> };
export const CustomArrows: Story = { render: () => <CarouselCustomArrows /> };
export const CustomNavigation: Story = { render: () => <CarouselCustomNavigation /> };
