import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { CalendarSection } from './CalendarSection';

const meta = {
  title: 'Leaves module/Calendar Section',
  component: CalendarSection,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    variant: 'With Dots',
    year: 2026,
    month: 4,
    rangeStart: 4,
    rangeEnd: 8,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['With Dots', 'Clean'],
      description: 'With Dots adds the indicator dots, legend and sync button',
    },
    year:       { control: { type: 'number', min: 2020, max: 2035 } },
    month:      { control: { type: 'number', min: 0, max: 11 }, description: '0-based month index' },
    rangeStart: { control: { type: 'number', min: 1, max: 31 } },
    rangeEnd:   { control: { type: 'number', min: 1, max: 31 } },
    dots:       { table: { disable: true } },
    onRangeChange: { table: { disable: true } },
  },
} satisfies Meta<typeof CalendarSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDots: Story = {
  name: 'With Dots',
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: '4 May 2026' })).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByRole('button', { name: '9 May 2026' })).toHaveAttribute('aria-pressed', 'false');
  },
};

export const Clean: Story = {
  args: { variant: 'Clean' },
};
