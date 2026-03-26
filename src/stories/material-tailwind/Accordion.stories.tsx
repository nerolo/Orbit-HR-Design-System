import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AccordionDefault,
  AccordionAlwaysOpen,
  AccordionAllOpen,
  AccordionCustomIcon,
  AccordionCustomAnimation,
  AccordionCustomStyles,
  AccordionDisabled,
} from './Accordion';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

const meta = {
  title: 'Material Tailwind/Accordion',
  component: AccordionDefault,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}`,
      },
    },
  },
};
export const AlwaysOpen: Story = { render: () => <AccordionAlwaysOpen /> };
export const AllOpen: Story = { render: () => <AccordionAllOpen /> };
export const CustomIcon: Story = { render: () => <AccordionCustomIcon /> };
export const CustomAnimation: Story = { render: () => <AccordionCustomAnimation /> };
export const CustomStyles: Story = { render: () => <AccordionCustomStyles /> };
export const Disabled: Story = { render: () => <AccordionDisabled /> };

export const Playground: Story = {
  render: (args: any) => {
    const [open, setOpen] = React.useState(1);
    return (
      <>
        <Accordion open={open === 1} {...args}>
          <AccordionHeader onClick={() => setOpen(open === 1 ? 0 : 1)}>What is Material Tailwind?</AccordionHeader>
          <AccordionBody>Material Tailwind is a framework that enhances Tailwind CSS with beautiful components.</AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => setOpen(open === 2 ? 0 : 2)}>How to use Material Tailwind?</AccordionHeader>
          <AccordionBody>Install it via npm, import components, and use them in your JSX.</AccordionBody>
        </Accordion>
      </>
    );
  },
  args: {},
  argTypes: {},
};
