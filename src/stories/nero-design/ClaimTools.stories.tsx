import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimTools, ClaimToolsOnBackground } from './ClaimTools';

const meta = {
  title: 'Expenses module/Claim Tools',
  component: ClaimTools,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    currentStep: 'Manager',
  },
  argTypes: {
    currentStep: {
      control: 'select',
      options: ['Draft', 'Manager', 'Finance'],
      description: 'Current progress step in the approval flow',
    },
  },
} satisfies Meta<typeof ClaimTools>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepDraft: Story = {
  name: 'Step — Draft',
  args: { currentStep: 'Draft' },
};

export const StepManager: Story = {
  name: 'Step — Manager',
  args: { currentStep: 'Manager' },
};

export const StepFinance: Story = {
  name: 'Step — Finance',
  args: { currentStep: 'Finance' },
};

export const OnBackground: Story = { render: () => <ClaimToolsOnBackground /> };
