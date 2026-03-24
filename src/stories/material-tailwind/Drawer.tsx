import React from "react";
import { Drawer, Button, Typography, IconButton, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Input, Textarea } from "@material-tailwind/react";

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export function DrawerDefault() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">Material Tailwind</Typography>
          <IconButton variant="text" color="blue-gray" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">Documentation</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export function DrawerPlacement() {
  const [openTop, setOpenTop] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);
  const [openBottom, setOpenBottom] = React.useState(false);
  const [openLeft, setOpenLeft] = React.useState(false);

  const drawerContent = (onClose: () => void) => (
    <>
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">Material Tailwind</Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}><CloseIcon /></IconButton>
      </div>
      <Typography color="gray" className="mb-8 pr-4 font-normal">
        Material Tailwind features multiple React and HTML components.
      </Typography>
      <div className="flex gap-2">
        <Button size="sm" variant="outlined">Documentation</Button>
        <Button size="sm">Get Started</Button>
      </div>
    </>
  );

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => setOpenTop(true)}>Open Drawer Top</Button>
        <Button onClick={() => setOpenRight(true)}>Open Drawer Right</Button>
        <Button onClick={() => setOpenBottom(true)}>Open Drawer Bottom</Button>
        <Button onClick={() => setOpenLeft(true)}>Open Drawer Left</Button>
      </div>
      <Drawer placement="top" open={openTop} onClose={() => setOpenTop(false)} className="p-4">{drawerContent(() => setOpenTop(false))}</Drawer>
      <Drawer placement="right" open={openRight} onClose={() => setOpenRight(false)} className="p-4">{drawerContent(() => setOpenRight(false))}</Drawer>
      <Drawer placement="bottom" open={openBottom} onClose={() => setOpenBottom(false)} className="p-4">{drawerContent(() => setOpenBottom(false))}</Drawer>
      <Drawer placement="left" open={openLeft} onClose={() => setOpenLeft(false)} className="p-4">{drawerContent(() => setOpenLeft(false))}</Drawer>
    </React.Fragment>
  );
}

export function DrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">Material Tailwind</Typography>
          <IconButton variant="text" color="blue-gray" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
        </div>
        <List>
          <ListItem>Dashboard</ListItem>
          <ListItem>
            Analytics
            <ListItemSuffix><Chip value="5" size="sm" color="green" className="rounded-full" /></ListItemSuffix>
          </ListItem>
          <ListItem>Sales</ListItem>
          <ListItem>Profile</ListItem>
        </List>
        <Button className="mt-3 ml-5" size="sm">Documentation</Button>
      </Drawer>
    </React.Fragment>
  );
}

export function DrawerWithForm() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">Contact Us</Typography>
          <IconButton variant="text" color="blue-gray" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
        </div>
        <div className="mb-5 px-4">
          <Typography variant="small" color="gray" className="font-normal">Write the message and then click button.</Typography>
        </div>
        <form className="flex flex-col gap-6 p-4">
          <Input type="email" label="Email" />
          <Input label="Subject" />
          <Textarea rows={6} label="Message" />
          <Button>Send Message</Button>
        </form>
      </Drawer>
    </React.Fragment>
  );
}
