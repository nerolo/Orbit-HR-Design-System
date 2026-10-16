import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { FilterExpanded } from './FilterExpanded';

const meta = {
  title: 'Expenses module/Filter Expanded',
  component: FilterExpanded,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    variant: 'Default',
    fromDate: '8 May 2020',
    toDate: '16 May 2020',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['Default', 'SU', 'Finance', 'Finance-date picker', 'Template'],
      description: 'Role-specific layout of the filter card',
    },
    fromDate: { control: 'text' },
    toDate:   { control: 'text' },
    names:    { table: { disable: true } },
    onClear:  { table: { disable: true } },
  },
} satisfies Meta<typeof FilterExpanded>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const draft = canvas.getByRole('checkbox', { name: 'Draft' });
    await expect(draft).toBeChecked();
    await userEvent.click(canvas.getByRole('button', { name: /clear filters/i }));
    await expect(draft).not.toBeChecked();
  },
};

export const SU: Story = { args: { variant: 'SU' } };

export const Finance: Story = { args: { variant: 'Finance' } };

export const FinanceDatePicker: Story = {
  name: 'Finance – Date Picker',
  args: { variant: 'Finance-date picker' },
};

export const Template: Story = { args: { variant: 'Template' } };
