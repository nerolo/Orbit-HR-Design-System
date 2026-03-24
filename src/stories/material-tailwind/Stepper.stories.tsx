import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultStepper, StepperWithIcon, StepperWithDots, StepperWithContent, CustomStepper,
} from './Stepper';

const meta = {
  title: 'Material Tailwind/Stepper',
  component: DefaultStepper,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithIcon: Story = { render: () => <StepperWithIcon /> };
export const WithDots: Story = { render: () => <StepperWithDots /> };
export const WithContent: Story = { render: () => <StepperWithContent /> };
export const Custom: Story = { render: () => <CustomStepper /> };
