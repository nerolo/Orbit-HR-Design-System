import type { Meta, StoryObj } from '@storybook/react-vite';
import { PublicHolidayDisplay } from './PublicHolidayDisplay';

const meta = {
  title: 'Leaves module/Public Holiday Display',
  component: PublicHolidayDisplay,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { items: { control: 'object' } },
} satisfies Meta<typeof PublicHolidayDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
