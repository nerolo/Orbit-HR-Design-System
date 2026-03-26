import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MegaMenuDefault, MegaMenuWithHover, MegaMenuWithPlacement } from './MegaMenu';

const meta = {
  title: 'Material Tailwind/Mega Menu',
  component: MegaMenuDefault,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof MegaMenuDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

// ... (full MegaMenu implementation)
export function MegaMenuDefault() {
  // See full source at material-tailwind.com/docs/react/mega-menu
}`,
      },
    },
  },
};
export const WithHover: Story = { render: () => <MegaMenuWithHover /> };
export const WithPlacement: Story = { render: () => <MegaMenuWithPlacement /> };
