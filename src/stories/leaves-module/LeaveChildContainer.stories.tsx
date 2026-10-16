import type { Meta, StoryObj } from '@storybook/react-vite';
import { LeaveChildContainer } from './LeaveChildContainer';

const meta = {
  title: 'Leaves module/Leave Child Container',
  component: LeaveChildContainer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { items: { control: 'object' } },
} satisfies Meta<typeof LeaveChildContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PartlyUsed: Story = {
  args: {
    items: [
      { name: 'Paternity Leave (Statutory)', duration: '5 Working Days', percent: 40, validityDays: '12 days left' },
      { name: 'Paternity Leave (Company)', duration: '10 Continuous Days', percent: 0, validityDays: '30 days' },
    ],
  },
};
