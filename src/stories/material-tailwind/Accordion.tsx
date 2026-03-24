import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AccordionDefault() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader as="h2" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're constantly growing.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader as="h2" onClick={() => handleOpen(2)}>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're constantly growing.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader as="h2" onClick={() => handleOpen(3)}>What can I do with Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're constantly growing.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export function AccordionAlwaysOpen() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);
  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={alwaysOpen}>
        <AccordionHeader as="h2" onClick={handleAlwaysOpen}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader as="h2" onClick={() => handleOpen(1)}>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader as="h2" onClick={() => handleOpen(2)}>What can I do with Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
    </>
  );
}

export function AccordionAllOpen() {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);
  return (
    <>
      <Accordion open={openAcc1}>
        <AccordionHeader as="h2" onClick={() => setOpenAcc1((cur) => !cur)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader as="h2" onClick={() => setOpenAcc2((cur) => !cur)}>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
      <Accordion open={openAcc3}>
        <AccordionHeader as="h2" onClick={() => setOpenAcc3((cur) => !cur)}>What can I do with Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
    </>
  );
}

function ChevronIcon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={open === 1} icon={<ChevronIcon id={1} open={open} />}>
        <AccordionHeader as="h2" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<ChevronIcon id={2} open={open} />}>
        <AccordionHeader as="h2" onClick={() => handleOpen(2)}>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<ChevronIcon id={3} open={open} />}>
        <AccordionHeader as="h2" onClick={() => handleOpen(3)}>What can I do with Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
    </>
  );
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader as="h2" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader as="h2" onClick={() => handleOpen(2)}>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
    </>
  );
}

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          as="h2"
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""}`}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We're not always in the position that we want to be at.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          as="h2"
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""}`}
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We're not always in the position that we want to be at.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export function AccordionDisabled() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={open === 1} disabled>
        <AccordionHeader as="h2" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader as="h2" onClick={() => handleOpen(2)}>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody>We're not always in the position that we want to be at.</AccordionBody>
      </Accordion>
    </>
  );
}
