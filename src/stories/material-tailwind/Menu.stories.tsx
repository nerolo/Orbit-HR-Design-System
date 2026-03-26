import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  MenuDefault, NestedMenu, MenuCustomAnimation, MenuCustomList,
  MenuDivider, MenuWithCheckbox, MenuWithSearchInput, NotificationsMenu,
} from './Menu';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Menu',
  component: MenuDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <Button>Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}`,
      },
    },
  },
};
export const Nested: Story = { render: () => <NestedMenu /> };
export const CustomAnimation: Story = { render: () => <MenuCustomAnimation /> };
export const CustomList: Story = { render: () => <MenuCustomList /> };
export const Divider: Story = { render: () => <MenuDivider /> };
export const WithCheckbox: Story = { render: () => <MenuWithCheckbox /> };
export const WithSearchInput: Story = { render: () => <MenuWithSearchInput /> };
export const Notifications: Story = { render: () => <NotificationsMenu /> };

export const Playground: Story = {
  render: (args: any) => <Menu {...args}><MenuHandler><Button>Open Menu</Button></MenuHandler><MenuList><MenuItem>Menu Item 1</MenuItem><MenuItem>Menu Item 2</MenuItem><MenuItem>Menu Item 3</MenuItem></MenuList></Menu>,
  args: { placement: 'bottom', offset: 5 },
  argTypes: {
    placement: { control: 'select', options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'] },
  },
};
