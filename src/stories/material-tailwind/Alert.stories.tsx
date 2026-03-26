import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AlertDefault, AlertVariants, AlertColors, AlertIcon,
  AlertDismissible, AlertCustomAnimation, AlertWithContent, AlertCustomStyles,
} from './Alert';

const meta = {
  title: 'Material Tailwind/Alert',
  component: AlertDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Alert } from "@material-tailwind/react";

export function AlertDefault() {
  return <Alert>A simple alert for showing message.</Alert>;
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <AlertVariants /> };
export const Colors: Story = { render: () => <AlertColors /> };
export const Icon: Story = { render: () => <AlertIcon /> };
export const Dismissible: Story = { render: () => <AlertDismissible /> };
export const CustomAnimation: Story = { render: () => <AlertCustomAnimation /> };
export const WithContent: Story = { render: () => <AlertWithContent /> };
export const CustomStyles: Story = { render: () => <AlertCustomStyles /> };
