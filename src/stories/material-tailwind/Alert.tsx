import React from "react";
import { Alert, Button, Typography } from "@material-tailwind/react";

export function AlertDefault() {
  return <Alert>A simple alert for showing message.</Alert>;
}

export function AlertVariants() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert>A simple filled alert for showing message.</Alert>
      <Alert variant="gradient">A simple gradient alert for showing message.</Alert>
      <Alert variant="outlined">A simple outlined alert for showing message.</Alert>
      <Alert variant="ghost">A simple ghost alert for showing message.</Alert>
    </div>
  );
}

export function AlertColors() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert color="blue">An info alert for showing message.</Alert>
      <Alert color="red">An error alert for showing message.</Alert>
      <Alert color="green">A success alert for showing message.</Alert>
      <Alert color="amber">A warning alert for showing message.</Alert>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  );
}

export function AlertIcon() {
  return <Alert icon={<InfoIcon />}>A simple alert with icon for showing message</Alert>;
}

export function AlertDismissible() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>Show Alert</Button>
      )}
      <Alert open={open} onClose={() => setOpen(false)}>
        A dismissible alert for showing message.
      </Alert>
    </>
  );
}

export function AlertCustomAnimation() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>Show Alert</Button>
      )}
      <Alert open={open} onClose={() => setOpen(false)} animate={{ mount: { y: 0 }, unmount: { y: 100 } }}>
        A dismissible alert with custom animation.
      </Alert>
    </>
  );
}

export function AlertWithContent() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>Show Alert</Button>
      )}
      <Alert open={open} className="max-w-screen-md" icon={<InfoIcon />} onClose={() => setOpen(false)}>
        <Typography variant="h5" color="white">Success</Typography>
        <Typography color="white" className="mt-2 font-normal">
          I don&apos;t know what that word means. I&apos;m happy. But success, that goes back to what in somebody&apos;s eyes success means.
        </Typography>
      </Alert>
    </>
  );
}

export function AlertCustomStyles() {
  return (
    <Alert
      icon={<InfoIcon />}
      className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
    >
      A simple alert for showing message.
    </Alert>
  );
}
