import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DefaultSlider, SliderSizes, SliderColors, SliderCustomStyles } from './Slider';

const meta = {
  title: 'Material Tailwind/Slider',
  component: DefaultSlider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = { render: () => <SliderSizes /> };
export const Colors: Story = { render: () => <SliderColors /> };
export const CustomStyles: Story = { render: () => <SliderCustomStyles /> };
