import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { HolidayCalendarManagementTable } from './HolidayCalendarManagementTable';

const meta = {
  title: 'Leaves module/Holiday Calendar Management Table',
  component: HolidayCalendarManagementTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { edit: true, onNewHoliday: fn(), onDelete: fn(), onEdit: fn(), onOpen: fn() },
  argTypes: {
    edit:         { control: 'boolean', description: 'Shows the New Holiday button and the row actions' },
    holidays:     { control: 'object' },
    onNewHoliday: { table: { disable: true } },
    onDelete:     { table: { disable: true } },
    onEdit:       { table: { disable: true } },
    onOpen:       { table: { disable: true } },
  },
} satisfies Meta<typeof HolidayCalendarManagementTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Edit: Story = {
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Delete Good Friday' }));
    await expect(args.onDelete).toHaveBeenCalledWith(expect.objectContaining({ name: 'Good Friday' }));
  },
};

export const View: Story = { args: { edit: false } };
