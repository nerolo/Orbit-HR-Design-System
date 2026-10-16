import type { Meta, StoryObj } from '@storybook/react-vite';
import { TentativeLeaveTitleCard } from './TentativeLeaveTitleCard';

const meta = {
  title: 'Leaves module/Tentative Leave Title Card',
  component: TentativeLeaveTitleCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'Tentative Leave Title',
    dateRange: '29 May 2026 - 30 Jan 2027',
    showSelect: true,
    selected: false,
  },
  argTypes: {
    title:      { control: 'text' },
    dateRange:  { control: 'text' },
    showSelect: { control: 'boolean', description: 'Reserve the checkmark column' },
    selected:   { control: 'boolean', description: 'Shows the checkmark and pressed (inset) style' },
    onClick:    { table: { disable: true } },
  },
} satisfies Meta<typeof TentativeLeaveTitleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { showSelect: false } };
export const Selected: Story = { args: { selected: true } };
