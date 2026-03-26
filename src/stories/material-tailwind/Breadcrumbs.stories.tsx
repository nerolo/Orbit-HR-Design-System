import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BreadcrumbsDefault, BreadcrumbsWithIcon, BlockLevelBreadcrumbs,
  BreadcrumbsCustomSeparator, BreadcrumbsCustomStyles,
} from './Breadcrumbs';
import { Breadcrumbs } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Breadcrumbs',
  component: BreadcrumbsDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbsDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Breadcrumbs } from "@material-tailwind/react";

export function BreadcrumbsDefault() {
  return (
    <Breadcrumbs>
      <a href="#" className="opacity-60">
        Docs
      </a>
      <a href="#" className="opacity-60">
        Components
      </a>
      <a href="#">Breadcrumbs</a>
    </Breadcrumbs>
  );
}`,
      },
    },
  },
};
export const WithIcon: Story = { render: () => <BreadcrumbsWithIcon /> };
export const BlockLevel: Story = { render: () => <BlockLevelBreadcrumbs /> };
export const CustomSeparator: Story = { render: () => <BreadcrumbsCustomSeparator /> };
export const CustomStyles: Story = { render: () => <BreadcrumbsCustomStyles /> };

export const Playground: Story = {
  render: (args: any) => <Breadcrumbs {...args}><a href="#">Docs</a><a href="#">Components</a><a href="#">Breadcrumbs</a></Breadcrumbs>,
  args: { separator: '/' },
  argTypes: {
    separator: { control: 'text' },
  },
};
