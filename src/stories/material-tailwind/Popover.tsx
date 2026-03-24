import React from "react";
import {
  Popover, PopoverHandler, PopoverContent,
  Button, Input, Typography, Avatar, List, ListItem, ListItemPrefix, Chip
} from "@material-tailwind/react";

export function PopoverDefault() {
  return (
    <Popover>
      <PopoverHandler><Button>Popover</Button></PopoverHandler>
      <PopoverContent>This is a very beautiful popover, show some love.</PopoverContent>
    </Popover>
  );
}

export function PopoverPlacement() {
  const placements = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"] as const;
  return (
    <div className="flex flex-wrap gap-2">
      {placements.map((p) => (
        <Popover key={p} placement={p}>
          <PopoverHandler><Button>{p}</Button></PopoverHandler>
          <PopoverContent>A beautiful popover.</PopoverContent>
        </Popover>
      ))}
    </div>
  );
}

export function PopoverCustomAnimation() {
  return (
    <Popover animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}>
      <PopoverHandler><Button>Popover</Button></PopoverHandler>
      <PopoverContent>This is a very beautiful popover, show some love.</PopoverContent>
    </Popover>
  );
}

export function SubscriptionPopover() {
  return (
    <Popover placement="bottom">
      <PopoverHandler><Button>Subscribe</Button></PopoverHandler>
      <PopoverContent className="w-96">
        <Typography variant="h6" color="blue-gray" className="mb-6">Newsletter Subscription</Typography>
        <Typography variant="small" color="blue-gray" className="mb-1 font-bold">Your Email</Typography>
        <div className="flex gap-2">
          <Input size="lg" placeholder="[email protected]" className="!border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none" }} />
          <Button variant="gradient" className="flex-shrink-0">Subscribe</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverWithImage() {
  return (
    <Popover>
      <PopoverHandler><Button>More Info</Button></PopoverHandler>
      <PopoverContent className="z-[999] grid w-[28rem] grid-cols-2 overflow-hidden p-0">
        <div className="p-4">
          <Typography color="blue-gray" className="mb-2 text-lg font-bold">Material Tailwind</Typography>
          <Typography variant="small" color="gray" className="mb-14 font-normal text-blue-gray-500">
            Material Tailwind is an easy to use components library for Tailwind CSS and Material Design.
          </Typography>
          <a href="#" className="-ml-3 inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-x-2 capitalize">Read More</Button>
          </a>
        </div>
        <div className="min-h-full !w-full p-3">
          <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=800&q=60" alt="image" className="h-full w-full rounded-lg object-cover" />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function ProfileInfoPopover() {
  const [openPopover, setOpenPopover] = React.useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}><Button variant="text">Profile Info</Button></PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[24rem]">
        <div className="mb-2 flex items-center justify-between gap-4">
          <Avatar size="md" variant="circular" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80" alt="tania andrew" />
          <Button variant="gradient" size="sm" className="font-medium capitalize">Follow</Button>
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 flex items-center gap-2 font-medium">
          <span>Tania Andrew</span>
        </Typography>
        <Typography variant="small" color="gray" className="font-normal text-blue-gray-500">
          A skilled developer with a passion for creating innovative solutions and a proven track record in full-stack development.
        </Typography>
      </PopoverContent>
    </Popover>
  );
}
