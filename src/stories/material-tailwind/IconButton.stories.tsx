import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  IconButtonDefault, IconButtonVariants, IconButtonSizes,
  IconButtonColors, IconButtonRounded, IconButtonCustomStyles,
} from './IconButton';
import { IconButton } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Icon Button',
  component: IconButtonDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButtonDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { IconButton } from "@material-tailwind/react";

export function IconButtonDefault() {
  return (
    <IconButton>
      <i className="fas fa-heart" />
    </IconButton>
  );
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <IconButtonVariants /> };
export const Sizes: Story = { render: () => <IconButtonSizes /> };
export const Colors: Story = { render: () => <IconButtonColors /> };
export const Rounded: Story = { render: () => <IconButtonRounded /> };
export const CustomStyles: Story = { render: () => <IconButtonCustomStyles /> };

export const Playground: Story = {
  render: (args: any) => <IconButton {...args}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></IconButton>,
  args: { variant: 'filled', size: 'md', color: 'blue' },
  argTypes: {
    variant: { control: 'select', options: ['filled', 'gradient', 'outlined', 'text'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['blue', 'red', 'green', 'amber', 'gray'] },
  },
};
