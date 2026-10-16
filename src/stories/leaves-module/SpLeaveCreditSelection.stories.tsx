import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { SpLeaveCreditSelection } from './SpLeaveCreditSelection';

const meta = {
  title: 'Leaves module/SP Leave Credit Selection',
  component: SpLeaveCreditSelection,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    credits:  { control: 'object' },
    onChange: { table: { disable: true } },
  },
} satisfies Meta<typeof SpLeaveCreditSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const second = canvas.getByRole('checkbox', { name: /SPLB-0002/ });
    await expect(second).not.toBeChecked();
    await userEvent.click(second);
    await expect(second).toBeChecked();
  },
};
