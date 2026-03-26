import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DefaultSpinner, SpinnerSizes, SpinnerColors, CustomSpinner } from './Spinner';

const meta = {
  title: 'Material Tailwind/Spinner',
  component: DefaultSpinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Spinner } from "@material-tailwind/react";

export function DefaultSpinner() {
  return <Spinner />;
}`,
      },
    },
  },
};
export const Sizes: Story = { render: () => <SpinnerSizes /> };
export const Colors: Story = { render: () => <SpinnerColors /> };
export const Custom: Story = { render: () => <CustomSpinner /> };
