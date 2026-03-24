import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Textarea,
  Select,
  Option,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function DialogDefault() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">Open Dialog</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants.
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1"><span>Cancel</span></Button>
          <Button variant="gradient" color="green" onClick={handleOpen}><span>Confirm</span></Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function DialogCustomAnimation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">Open Dialog</Button>
      <Dialog open={open} handler={handleOpen} animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 } }}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>The key to more success is to have a lot of pillows.</DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1"><span>Cancel</span></Button>
          <Button variant="gradient" color="green" onClick={handleOpen}><span>Confirm</span></Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog size="xs" open={open} handler={handleOpen} className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">Sign In</Typography>
            <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
              Enter your email and password to Sign In.
            </Typography>
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>Sign In</Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export function LongDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen}>Long Dialog</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Long Dialog</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <Typography className="font-normal">
            I&apos;ve always had unwavering confidence in my abilities. We grow, make mistakes, and strive to express ourselves and fulfill our dreams. If we&apos;re fortunate enough to participate in life&apos;s journey, we should cherish every moment.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>cancel</Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>confirm</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function MessageDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen}>Message Dialog</Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">New message to @</Typography>
          </DialogHeader>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5 cursor-pointer" onClick={handleOpen}>
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7" color="gray" variant="lead">Write the message and then click button.</Typography>
          <div className="grid gap-6">
            <Input label="Username" />
            <Textarea label="Message" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>cancel</Button>
          <Button variant="gradient" color="gray" onClick={handleOpen}>send message</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function AddProductDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">Add Product</Button>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">Manage Item</Typography>
          <Typography className="mt-1 font-normal text-gray-600">Keep your records up-to-date and organized.</Typography>
          <IconButton size="sm" variant="text" className="!absolute right-3.5 top-3.5" onClick={handleOpen}>
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">Name</Typography>
            <Input color="gray" size="lg" placeholder="eg. White Shoes" name="name" className="placeholder:opacity-100 focus:!border-t-gray-900" containerProps={{ className: "!min-w-full" }} labelProps={{ className: "hidden" }} />
          </div>
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">Category</Typography>
            <Select className="!w-full !border-[1.5px] !border-blue-gray-200/90 bg-white text-gray-800" placeholder="1" labelProps={{ className: "hidden" }}>
              <Option>Clothing</Option>
              <Option>Fashion</Option>
              <Option>Watches</Option>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleOpen}>Add Product</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
