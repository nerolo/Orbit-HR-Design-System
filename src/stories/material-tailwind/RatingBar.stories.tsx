import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultRating, RatingColors, ReadonlyRating,
  CustomRatingIcon, RatingWithText, RatingWithComment,
} from './RatingBar';

const meta = {
  title: 'Material Tailwind/Rating Bar',
  component: DefaultRating,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Colors: Story = { render: () => <RatingColors /> };
export const Readonly: Story = { render: () => <ReadonlyRating /> };
export const CustomIcon: Story = { render: () => <CustomRatingIcon /> };
export const WithText: Story = { render: () => <RatingWithText /> };
export const WithComment: Story = { render: () => <RatingWithComment /> };
