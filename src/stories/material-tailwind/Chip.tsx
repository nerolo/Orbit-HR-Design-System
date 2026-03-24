import React from "react";
import { Chip, Button, Avatar, Typography, Checkbox } from "@material-tailwind/react";

export function ChipDefault() {
  return <Chip value="chip" />;
}

export function ChipVariants() {
  return (
    <div className="flex gap-2">
      <Chip value="chip filled" />
      <Chip variant="gradient" value="chip gradient" />
      <Chip variant="outlined" value="chip outlined" />
      <Chip variant="ghost" value="chip ghost" />
    </div>
  );
}

export function ChipSizes() {
  return (
    <div className="flex items-end gap-2">
      <Chip size="sm" value="chip small" />
      <Chip size="md" value="chip medium" />
      <Chip size="lg" value="chip large" />
    </div>
  );
}

export function ChipColors() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Chip color="blue" value="blue" />
      <Chip color="red" value="red" />
      <Chip color="green" value="green" />
      <Chip color="amber" value="amber" />
      <Chip color="pink" value="pink" />
      <Chip color="indigo" value="indigo" />
      <Chip color="purple" value="purple" />
      <Chip color="teal" value="teal" />
      <Chip color="cyan" value="cyan" />
    </div>
  );
}

export function ChipPills() {
  return (
    <div className="flex gap-2">
      <Chip value="chip filled" className="rounded-full" />
      <Chip variant="gradient" value="chip gradient" className="rounded-full" />
      <Chip variant="outlined" value="chip outlined" className="rounded-full" />
      <Chip variant="ghost" value="chip ghost" className="rounded-full" />
    </div>
  );
}

export function ChipWithStatus() {
  return (
    <div className="flex gap-2">
      <Chip variant="ghost" color="green" size="sm" value="Online" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} />
      <Chip variant="ghost" color="red" size="sm" value="Offline" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />} />
    </div>
  );
}

export function ChipWithCheckbox() {
  return (
    <div className="flex gap-2">
      <Chip
        value="Online"
        variant="ghost"
        color="green"
        icon={
          <Checkbox
            color="green"
            ripple={false}
            containerProps={{ className: "p-0" }}
            className="-ml-px border-2 border-green-900 before:hidden checked:border-green-900 checked:bg-green-900"
          />
        }
      />
    </div>
  );
}

export function ChipDismissible() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      {!open && <Button className="absolute" onClick={() => setOpen(true)}>Show Chip</Button>}
      <Chip open={open} value="Dismissible" onClose={() => setOpen(false)} />
    </>
  );
}

export function ChipCustomAnimation() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      {!open && <Button className="absolute" onClick={() => setOpen(true)}>Show Chip</Button>}
      <Chip open={open} animate={{ mount: { y: 0 }, unmount: { y: 50 } }} value="Custom Animation" onClose={() => setOpen(false)} />
    </>
  );
}

export function ChipWithAvatar() {
  return (
    <Chip
      icon={
        <Avatar
          size="xs"
          variant="circular"
          className="h-full w-full -translate-x-0.5"
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
        />
      }
      value={
        <Typography variant="small" color="white" className="font-medium capitalize leading-none">
          Tania Andrew
        </Typography>
      }
      className="rounded-full py-1.5"
    />
  );
}
