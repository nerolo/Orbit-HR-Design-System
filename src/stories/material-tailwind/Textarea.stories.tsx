import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TextareaDefault, TextareaVariants, TextareaSizes, TextareaColors,
  TextareaValidations, TextareaDisabled, CommentBoxTextarea, TwitterChatboxTextarea,
} from './Textarea';
import { Textarea } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Textarea',
  component: TextareaDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof TextareaDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Textarea } from "@material-tailwind/react";

export function TextareaDefault() {
  return (
    <div className="w-96">
      <Textarea label="Message" />
    </div>
  );
}`,
      },
    },
  },
};
export const Variants: Story = { render: () => <TextareaVariants /> };
export const Sizes: Story = { render: () => <TextareaSizes /> };
export const Colors: Story = { render: () => <TextareaColors /> };
export const Validations: Story = { render: () => <TextareaValidations /> };
export const Disabled: Story = { render: () => <TextareaDisabled /> };
export const CommentBox: Story = { render: () => <CommentBoxTextarea /> };
export const TwitterChatbox: Story = { render: () => <TwitterChatboxTextarea /> };

export const Playground: Story = {
  render: (args: any) => <div className="w-72"><Textarea {...args} /></div>,
  args: { label: 'Message', size: 'md', color: 'blue', variant: 'outlined', disabled: false, error: false, success: false },
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['md', 'lg'] },
    color: { control: 'select', options: ['blue', 'red', 'green', 'amber', 'gray'] },
    variant: { control: 'select', options: ['outlined', 'standard', 'static'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
  },
};
