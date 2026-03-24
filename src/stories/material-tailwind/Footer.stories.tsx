import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  SimpleFooter, FooterWithLogo, FooterWithSocialLinks, FooterWithSitemap,
} from './Footer';

const meta = {
  title: 'Material Tailwind/Footer',
  component: SimpleFooter,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLogo: Story = { render: () => <FooterWithLogo /> };
export const WithSocialLinks: Story = { render: () => <FooterWithSocialLinks /> };
export const WithSitemap: Story = { render: () => <FooterWithSitemap /> };
