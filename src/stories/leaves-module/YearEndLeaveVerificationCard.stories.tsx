import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { YearEndLeaveVerificationCard } from './YearEndLeaveVerificationCard';

const meta = {
  title: 'Leaves module/Year-End Leave Verification Card',
  component: YearEndLeaveVerificationCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { state: 'Default', onRequestReview: fn(), onConfirm: fn() },
  argTypes: {
    state: {
      control: 'radio',
      options: ['Default', 'Review Requested', 'Confirmed'],
      description: 'Default shows the actions; the other two replace them with a status message',
    },
    rows: { control: 'object' },
    onRequestReview: { table: { disable: true } },
    onConfirm: { table: { disable: true } },
  },
} satisfies Meta<typeof YearEndLeaveVerificationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Confirm My Balance' }));
    await expect(args.onConfirm).toHaveBeenCalledOnce();
  },
};

export const ReviewRequested: Story = {
  name: 'Review Requested',
  args: { state: 'Review Requested' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status')).toHaveTextContent('Local Leave Admin');
    await expect(canvas.queryByRole('button', { name: 'Confirm My Balance' })).toBeNull();
  },
};

export const Confirmed: Story = { args: { state: 'Confirmed' } };
