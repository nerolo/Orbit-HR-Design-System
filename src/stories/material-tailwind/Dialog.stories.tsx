import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DialogDefault, DialogCustomAnimation, DialogWithForm,
  LongDialog, MessageDialog, AddProductDialog,
} from './Dialog';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Dialog',
  component: DialogDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DialogDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I'm never giving up, I'm just
          getting started. I'm up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}`,
      },
    },
  },
};
export const CustomAnimation: Story = { render: () => <DialogCustomAnimation /> };
export const WithForm: Story = { render: () => <DialogWithForm /> };
export const Long: Story = { render: () => <LongDialog /> };
export const Message: Story = { render: () => <MessageDialog /> };
export const AddProduct: Story = { render: () => <AddProductDialog /> };

export const Playground: Story = {
  render: (args: any) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} handler={() => setOpen(false)} {...args}>
          <DialogHeader>Dialog Title</DialogHeader>
          <DialogBody>Dialog body content.</DialogBody>
          <DialogFooter><Button onClick={() => setOpen(false)}>Close</Button></DialogFooter>
        </Dialog>
      </>
    );
  },
  args: { size: 'md' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
  },
};
