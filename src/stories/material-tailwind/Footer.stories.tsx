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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}`,
      },
    },
  },
};
export const WithLogo: Story = { render: () => <FooterWithLogo /> };
export const WithSocialLinks: Story = { render: () => <FooterWithSocialLinks /> };
export const WithSitemap: Story = { render: () => <FooterWithSitemap /> };

export const Playground: Story = { render: () => <div className="p-4 text-gray-500">Footer is a layout component — see Default story for full example.</div> };
