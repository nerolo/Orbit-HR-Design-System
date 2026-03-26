import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ButtonGroupDefault, ButtonGroupVariants, ButtonGroupSizes, ButtonGroupColors,
  BlockLevelButtonGroup, ButtonGroupRippleEffect, ButtonGroupCustomStyles,
} from './ButtonGroup';
import { ButtonGroup, Button } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Button Group',
  component: ButtonGroupDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroupDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { ButtonGroup, Button } from "@material-tailwind/react";

export function ButtonGroupDefault() {
  return (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <ButtonGroupVariants /> };
export const Sizes: Story = { render: () => <ButtonGroupSizes /> };
export const Colors: Story = { render: () => <ButtonGroupColors /> };
export const BlockLevel: Story = { render: () => <BlockLevelButtonGroup /> };
export const RippleEffect: Story = { render: () => <ButtonGroupRippleEffect /> };
export const CustomStyles: Story = { render: () => <ButtonGroupCustomStyles /> };

export const Playground: Story = {
  render: (args: any) => <ButtonGroup {...args}><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>,
  args: { variant: 'filled', size: 'md', color: 'blue' },
  argTypes: {
    variant: { control: 'select', options: ['filled', 'gradient', 'outlined', 'text'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['blue', 'red', 'green', 'amber', 'gray'] },
  },
};
