import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { AnnualLeaveTable } from './AnnualLeaveTable';

const meta = {
  title: 'Leaves module/Annual Leave Table',
  component: AnnualLeaveTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { edit: false },
  argTypes: {
    edit:     { control: 'boolean', description: 'Turns the day counts into editable inputs' },
    title:    { control: 'text' },
    bands:    { control: 'object' },
    rows:     { control: 'object' },
    onChange: { table: { disable: true } },
  },
} satisfies Meta<typeof AnnualLeaveTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {};

export const Edit: Story = {
  args: { edit: true },
  play: async ({ canvas, userEvent }) => {
    const cell = canvas.getByRole('textbox', { name: 'Director or above, 1 -3 Yrs' });
    await expect(cell).toHaveValue('18');
    await userEvent.clear(cell);
    await userEvent.type(cell, '21');
    await expect(cell).toHaveValue('21');
  },
};
