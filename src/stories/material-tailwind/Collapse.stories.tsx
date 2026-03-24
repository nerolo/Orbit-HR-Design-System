import type { Meta, StoryObj } from '@storybook/react-vite';
import { CollapseDefault } from './Collapse';

const meta = {
  title: 'Material Tailwind/Collapse',
  component: CollapseDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CollapseDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
