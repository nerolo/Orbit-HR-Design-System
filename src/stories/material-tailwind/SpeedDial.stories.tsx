import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultSpeedDial, SpeedDialPlacement, SpeedDialCustomIcon,
  ControlledSpeedDial, SpeedDialWithTextInside, SpeedDialWithTextOutside, CustomSpeedDial,
} from './SpeedDial';

const meta = {
  title: 'Material Tailwind/Speed Dial',
  component: DefaultSpeedDial,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultSpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Placement: Story = { render: () => <SpeedDialPlacement /> };
export const CustomIcon: Story = { render: () => <SpeedDialCustomIcon /> };
export const Controlled: Story = { render: () => <ControlledSpeedDial /> };
export const WithTextInside: Story = { render: () => <SpeedDialWithTextInside /> };
export const WithTextOutside: Story = { render: () => <SpeedDialWithTextOutside /> };
export const Custom: Story = { render: () => <CustomSpeedDial /> };
