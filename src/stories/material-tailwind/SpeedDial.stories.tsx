import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultSpeedDial, SpeedDialPlacement, SpeedDialCustomIcon,
  ControlledSpeedDial, SpeedDialWithTextInside, SpeedDialWithTextOutside, CustomSpeedDial,
} from './SpeedDial';

const meta = {
  title: 'Material Tailwind/Speed Dial',
  component: DefaultSpeedDial,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultSpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export function DefaultSpeedDial() {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <CogIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}`,
      },
    },
  },
};
export const Placement: Story = { render: () => <SpeedDialPlacement /> };
export const CustomIcon: Story = { render: () => <SpeedDialCustomIcon /> };
export const Controlled: Story = { render: () => <ControlledSpeedDial /> };
export const WithTextInside: Story = { render: () => <SpeedDialWithTextInside /> };
export const WithTextOutside: Story = { render: () => <SpeedDialWithTextOutside /> };
export const Custom: Story = { render: () => <CustomSpeedDial /> };

export const Playground: Story = { render: () => <div className="p-4 text-gray-500">SpeedDial is a stateful component — see Default story for full example.</div> };
