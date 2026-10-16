import type { Meta, StoryObj } from '@storybook/react-vite';
import { LeaveDatePicker } from './LeaveDatePicker';

const meta = {
  title: 'Leaves module/Leave Date Picker',
  component: LeaveDatePicker,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { context: 'Application' },
  argTypes: {
    context: {
      control: 'radio',
      options: ['Application', 'Approval'],
      description: 'Application is editable; Approval shows the requested range read-only',
    },
  },
} satisfies Meta<typeof LeaveDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Application: Story = {};
export const Approval: Story = { args: { context: 'Approval' } };
