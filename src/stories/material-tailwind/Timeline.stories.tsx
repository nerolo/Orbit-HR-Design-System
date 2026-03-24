import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultTimeline, TimelineWithIcon, TimelineWithAvatar, ActivitiesTimeline,
} from './Timeline';

const meta = {
  title: 'Material Tailwind/Timeline',
  component: DefaultTimeline,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithIcon: Story = { render: () => <TimelineWithIcon /> };
export const WithAvatar: Story = { render: () => <TimelineWithAvatar /> };
export const Activities: Story = { render: () => <ActivitiesTimeline /> };
