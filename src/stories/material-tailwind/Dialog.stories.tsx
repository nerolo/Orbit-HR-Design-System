import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DialogDefault, DialogCustomAnimation, DialogWithForm,
  LongDialog, MessageDialog, AddProductDialog,
} from './Dialog';

const meta = {
  title: 'Material Tailwind/Dialog',
  component: DialogDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomAnimation: Story = { render: () => <DialogCustomAnimation /> };
export const WithForm: Story = { render: () => <DialogWithForm /> };
export const Long: Story = { render: () => <LongDialog /> };
export const Message: Story = { render: () => <MessageDialog /> };
export const AddProduct: Story = { render: () => <AddProductDialog /> };
