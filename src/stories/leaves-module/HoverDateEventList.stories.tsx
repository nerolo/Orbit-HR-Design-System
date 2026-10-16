import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoverDateEventList } from './HoverDateEventList';

const meta = {
  title: 'Leaves module/Hover Date Event List',
  component: HoverDateEventList,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { events: { table: { disable: true } } },
} satisfies Meta<typeof HoverDateEventList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
