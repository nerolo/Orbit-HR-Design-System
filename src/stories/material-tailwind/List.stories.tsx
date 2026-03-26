import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ListDefault, ListWithAvatar, ListWithSelectedItem,
  ListWithDisabledItem, ListWithLink, ListWithBadge,
} from './List';

const meta = {
  title: 'Material Tailwind/List',
  component: ListDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ListDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { List, ListItem, Card } from "@material-tailwind/react";

export function ListDefault() {
  return (
    <Card className="w-96">
      <List>
        <ListItem>Inbox</ListItem>
        <ListItem>Trash</ListItem>
        <ListItem>Settings</ListItem>
      </List>
    </Card>
  );
}`,
      },
    },
  },
};
export const WithAvatar: Story = { render: () => <ListWithAvatar /> };
export const WithSelectedItem: Story = { render: () => <ListWithSelectedItem /> };
export const WithDisabledItem: Story = { render: () => <ListWithDisabledItem /> };
export const WithLink: Story = { render: () => <ListWithLink /> };
export const WithBadge: Story = { render: () => <ListWithBadge /> };
