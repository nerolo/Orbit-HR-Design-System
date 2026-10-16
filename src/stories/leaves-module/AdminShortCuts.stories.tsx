import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdminShortCuts } from './AdminShortCuts';

const meta = {
  title: 'Leaves module/Admin Short Cuts',
  component: AdminShortCuts,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { shortcuts: { control: 'object' } },
} satisfies Meta<typeof AdminShortCuts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
