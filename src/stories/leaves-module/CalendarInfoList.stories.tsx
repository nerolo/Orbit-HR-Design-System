import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { CalendarInfoList } from './CalendarInfoList';

const meta = {
  title: 'Leaves module/Calendar Info List',
  component: CalendarInfoList,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { variant: 'Default', selectedIndex: 1 },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['Default', 'Tentative Leave select'],
      description: 'Events lists the dated leave/holiday rows; Tentative Leave select lets one tentative leave be picked',
    },
    selectedIndex:   { control: { type: 'number', min: 0, max: 5 } },
    events:          { table: { disable: true } },
    tentativeLeaves: { table: { disable: true } },
  },
} satisfies Meta<typeof CalendarInfoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TentativeLeaveSelect: Story = {
  name: 'Tentative Leave select',
  args: { variant: 'Tentative Leave select' },
  play: async ({ canvas, userEvent }) => {
    const cards = canvas.getAllByRole('button', { name: /Tentative Leave Title/ });
    await expect(cards[1]).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(cards[3]);
    await expect(cards[3]).toHaveAttribute('aria-pressed', 'true');
    await expect(cards[1]).toHaveAttribute('aria-pressed', 'false');
  },
};
