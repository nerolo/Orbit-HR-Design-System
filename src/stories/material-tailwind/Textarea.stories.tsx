import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TextareaDefault, TextareaVariants, TextareaSizes, TextareaColors,
  TextareaValidations, TextareaDisabled, CommentBoxTextarea, TwitterChatboxTextarea,
} from './Textarea';

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
