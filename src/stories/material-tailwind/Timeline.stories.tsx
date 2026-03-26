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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function DefaultTimeline() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gray" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography variant="small" color="gray" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}`,
      },
    },
  },
};
export const WithIcon: Story = { render: () => <TimelineWithIcon /> };
export const WithAvatar: Story = { render: () => <TimelineWithAvatar /> };
export const Activities: Story = { render: () => <ActivitiesTimeline /> };

export const Playground: Story = { render: () => <div className="p-4 text-gray-500">Timeline is a layout component — see Default story for full example.</div> };
