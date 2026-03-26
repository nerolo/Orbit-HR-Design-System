import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CollapseDefault } from './Collapse';
import { Collapse, Button } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Collapse',
  component: CollapseDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CollapseDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

export default function CollapseDefault() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={toggleOpen}>Open Collapse</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}`,
      },
    },
  },
};

export const Playground: Story = {
  render: (args: any) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(!open)}>Toggle</Button>
        <Collapse open={open} {...args}><div className="p-4 bg-blue-50">Collapsed content here.</div></Collapse>
      </>
    );
  },
  args: {},
  argTypes: {},
};
