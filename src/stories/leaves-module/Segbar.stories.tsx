import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Segbar } from './Segbar';

const meta = {
  title: 'Leaves module/Segbar',
  component: Segbar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { percent: 75, total: 30 },
  argTypes: {
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Share of dots filled' },
    total:   { control: { type: 'number', min: 1, max: 100 }, description: 'Number of dots (30 standard, 73 long)' },
  },
} satisfies Meta<typeof Segbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Percent75: Story = {
  name: '75%',
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '75');
  },
};
export const Percent100: Story = { name: '100%', args: { percent: 100 } };
export const Percent30: Story = { name: '30%', args: { percent: 30 } };
export const Percent0: Story = { name: '0%', args: { percent: 0 } };
export const Long: Story = { args: { percent: 88, total: 73 } };
