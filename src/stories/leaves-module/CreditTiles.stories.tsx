import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreditTiles } from './CreditTiles';

const meta = {
  title: 'Leaves module/Credit Tiles',
  component: CreditTiles,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: { tiles: { control: 'object' } },
} satisfies Meta<typeof CreditTiles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
