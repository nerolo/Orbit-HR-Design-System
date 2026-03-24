import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TooltipDefault, TooltipPlacement, TooltipCustomAnimation,
  TooltipWithHelperIcon, TooltipCustomStyles,
} from './Tooltip';

const meta = {
  title: 'Material Tailwind/Tooltip',
  component: TooltipDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof TooltipDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Placement: Story = { render: () => <TooltipPlacement /> };
export const CustomAnimation: Story = { render: () => <TooltipCustomAnimation /> };
export const WithHelperIcon: Story = { render: () => <TooltipWithHelperIcon /> };
export const CustomStyles: Story = { render: () => <TooltipCustomStyles /> };
