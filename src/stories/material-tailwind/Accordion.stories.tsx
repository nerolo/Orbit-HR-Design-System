import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AccordionDefault,
  AccordionAlwaysOpen,
  AccordionAllOpen,
  AccordionCustomIcon,
  AccordionCustomAnimation,
  AccordionCustomStyles,
  AccordionDisabled,
} from './Accordion';

const meta = {
  title: 'Material Tailwind/Accordion',
  component: AccordionDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AlwaysOpen: Story = { render: () => <AccordionAlwaysOpen /> };
export const AllOpen: Story = { render: () => <AccordionAllOpen /> };
export const CustomIcon: Story = { render: () => <AccordionCustomIcon /> };
export const CustomAnimation: Story = { render: () => <AccordionCustomAnimation /> };
export const CustomStyles: Story = { render: () => <AccordionCustomStyles /> };
export const Disabled: Story = { render: () => <AccordionDisabled /> };
