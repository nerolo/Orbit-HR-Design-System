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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Slider } from "@material-tailwind/react";

export function DefaultSlider() {
  return (
    <div className="w-96">
      <Slider defaultValue={50} />
    </div>
  );
}`,
      },
    },
  },
};
export const Sizes: Story = { render: () => <SliderSizes /> };
export const Colors: Story = { render: () => <SliderColors /> };
export const CustomStyles: Story = { render: () => <SliderCustomStyles /> };

export const Playground: Story = { render: () => <div className="w-64 p-4"><input type="range" min="0" max="100" defaultValue="50" className="w-full" /></div> };
