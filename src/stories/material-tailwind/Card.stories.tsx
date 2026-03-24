import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CardDefault, SimpleCard, ProfileCard, LoginCard, EcommerceCard, PricingCard,
} from './Card';

const meta = {
  title: 'Material Tailwind/Card',
  component: CardDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CardDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Simple: Story = { render: () => <SimpleCard /> };
export const Profile: Story = { render: () => <ProfileCard /> };
export const Login: Story = { render: () => <LoginCard /> };
export const Ecommerce: Story = { render: () => <EcommerceCard /> };
export const Pricing: Story = { render: () => <PricingCard /> };
