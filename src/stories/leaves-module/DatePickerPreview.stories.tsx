import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { DatePickerPreview } from './DatePickerPreview';

const meta = {
  title: 'Leaves module/Date Picker Preview',
  component: DatePickerPreview,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    variant: 'Selector',
    startDate: new Date(2020, 4, 8),
    endDate: new Date(2020, 4, 16),
    returnDate: new Date(2020, 4, 19),
    startPeriod: 'Full Day',
    endPeriod: 'Full Day',
    returnPeriod: 'AM',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['Selector', 'Preview'],
      description: 'Selector lets the start/end half-day be chosen; Preview is read-only and adds the return date',
    },
    startPeriod:  { control: 'radio', options: ['Full Day', 'AM', 'PM'] },
    endPeriod:    { control: 'radio', options: ['Full Day', 'AM', 'PM'] },
    returnPeriod: { control: 'radio', options: ['Full Day', 'AM', 'PM'] },
    startDate:    { control: 'date' },
    endDate:      { control: 'date' },
    returnDate:   { control: 'date' },
    onChange:     { table: { disable: true } },
  },
} satisfies Meta<typeof DatePickerPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selector: Story = {
  play: async ({ canvas, userEvent }) => {
    const [startAm] = canvas.getAllByRole('button', { name: 'AM' });
    await userEvent.click(startAm);
    await expect(startAm).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getAllByRole('button', { name: 'Full Day' })[0]).toHaveAttribute('aria-pressed', 'false');
  },
};

export const Preview: Story = { args: { variant: 'Preview' } };
