import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ButtonDefault, ButtonVariants, ButtonSizes, ButtonColors, ButtonLoading,
  BlockLevelButton, ButtonRounded, ButtonWithIcon, ButtonRippleEffect,
} from './Button';

const meta = {
  title: 'Material Tailwind/Button',
  component: ButtonDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Button } from "@material-tailwind/react";

export function ButtonDefault() {
  return <Button>Button</Button>;
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <ButtonVariants /> };
export const Sizes: Story = { render: () => <ButtonSizes /> };
export const Colors: Story = { render: () => <ButtonColors /> };
export const Loading: Story = { render: () => <ButtonLoading /> };
export const BlockLevel: Story = { render: () => <BlockLevelButton /> };
export const Rounded: Story = { render: () => <ButtonRounded /> };
export const WithIcon: Story = { render: () => <ButtonWithIcon /> };
export const RippleEffect: Story = { render: () => <ButtonRippleEffect /> };
