import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultSidebar, MultiLevelSidebar, SidebarWithContentSeparator,
  SidebarWithCta, SidebarWithLogo, SidebarWithSearch, SidebarWithBurgerMenu,
} from './Sidebar';

const meta = {
  title: 'Material Tailwind/Sidebar',
  component: DefaultSidebar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export function DefaultSidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}`,
      },
    },
  },
};
export const MultiLevel: Story = { render: () => <MultiLevelSidebar /> };
export const WithContentSeparator: Story = { render: () => <SidebarWithContentSeparator /> };
export const WithCta: Story = { render: () => <SidebarWithCta /> };
export const WithLogo: Story = { render: () => <SidebarWithLogo /> };
export const WithSearch: Story = { render: () => <SidebarWithSearch /> };
export const WithBurgerMenu: Story = { render: () => <SidebarWithBurgerMenu /> };

export const Playground: Story = { render: () => <div className="p-4 text-gray-500">Sidebar is a layout component — see Default story for full example.</div> };
