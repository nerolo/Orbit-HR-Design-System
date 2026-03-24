import React from "react";
import {
  Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix,
  Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input,
  IconButton, Drawer,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon, ShoppingBagIcon, InboxIcon,
  UserCircleIcon, Cog6ToothIcon, PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon, ChevronDownIcon, MagnifyingGlassIcon,
  XMarkIcon, Bars3Icon, CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export function DefaultSidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">Sidebar</Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix><PresentationChartBarIcon className="h-5 w-5" /></ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix><ShoppingBagIcon className="h-5 w-5" /></ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem>
          <ListItemPrefix><InboxIcon className="h-5 w-5" /></ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix><UserCircleIcon className="h-5 w-5" /></ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix><Cog6ToothIcon className="h-5 w-5" /></ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix><PowerIcon className="h-5 w-5" /></ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}

function SidebarAccordionContent({ open, handleOpen }: { open: number; handleOpen: (v: number) => void }) {
  return (
    <>
      <Accordion
        open={open === 1}
        icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
      >
        <ListItem className="p-0" selected={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
            <ListItemPrefix><PresentationChartBarIcon className="h-5 w-5" /></ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">Dashboard</Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0">
            {["Analytics", "Reporting", "Projects"].map((item) => (
              <ListItem key={item}>
                <ListItemPrefix><ChevronRightIcon strokeWidth={3} className="h-3 w-5" /></ListItemPrefix>
                {item}
              </ListItem>
            ))}
          </List>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}
      >
        <ListItem className="p-0" selected={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
            <ListItemPrefix><ShoppingBagIcon className="h-5 w-5" /></ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">E-Commerce</Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0">
            {["Orders", "Products"].map((item) => (
              <ListItem key={item}>
                <ListItemPrefix><ChevronRightIcon strokeWidth={3} className="h-3 w-5" /></ListItemPrefix>
                {item}
              </ListItem>
            ))}
          </List>
        </AccordionBody>
      </Accordion>
    </>
  );
}

function SidebarBottomLinks() {
  return (
    <>
      <hr className="my-2 border-blue-gray-50" />
      <ListItem>
        <ListItemPrefix><InboxIcon className="h-5 w-5" /></ListItemPrefix>
        Inbox
        <ListItemSuffix><Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" /></ListItemSuffix>
      </ListItem>
      <ListItem><ListItemPrefix><UserCircleIcon className="h-5 w-5" /></ListItemPrefix>Profile</ListItem>
      <ListItem><ListItemPrefix><Cog6ToothIcon className="h-5 w-5" /></ListItemPrefix>Settings</ListItem>
      <ListItem><ListItemPrefix><PowerIcon className="h-5 w-5" /></ListItemPrefix>Log Out</ListItem>
    </>
  );
}

function UpgradeAlert({ onClose }: { onClose: () => void }) {
  return (
    <Alert className="mt-auto" onClose={onClose}>
      <CubeTransparentIcon className="mb-4 h-12 w-12" />
      <Typography variant="h6" className="mb-1">Upgrade to PRO</Typography>
      <Typography variant="small" className="font-normal opacity-80">
        Upgrade to Material Tailwind PRO for additional components, plugins, and advanced features.
      </Typography>
      <div className="mt-4 flex gap-3">
        <Typography as="a" href="#" variant="small" className="font-medium opacity-80" onClick={onClose}>Dismiss</Typography>
        <Typography as="a" href="#" variant="small" className="font-medium">Upgrade Now</Typography>
      </div>
    </Alert>
  );
}

export function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">Sidebar</Typography>
      </div>
      <List>
        <SidebarAccordionContent open={open} handleOpen={handleOpen} />
        <SidebarBottomLinks />
      </List>
    </Card>
  );
}

export function SidebarWithContentSeparator() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">Sidebar</Typography>
      </div>
      <List>
        <SidebarAccordionContent open={open} handleOpen={handleOpen} />
        <SidebarBottomLinks />
      </List>
    </Card>
  );
}

export function SidebarWithCta() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">Sidebar</Typography>
      </div>
      <List>
        <SidebarAccordionContent open={open} handleOpen={handleOpen} />
        <SidebarBottomLinks />
      </List>
      {openAlert && <UpgradeAlert onClose={() => setOpenAlert(false)} />}
    </Card>
  );
}

export function SidebarWithLogo() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">Sidebar</Typography>
      </div>
      <List>
        <SidebarAccordionContent open={open} handleOpen={handleOpen} />
        <SidebarBottomLinks />
      </List>
      {openAlert && <UpgradeAlert onClose={() => setOpenAlert(false)} />}
    </Card>
  );
}

export function SidebarWithSearch() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">Sidebar</Typography>
      </div>
      <div className="p-2">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
      </div>
      <List>
        <SidebarAccordionContent open={open} handleOpen={handleOpen} />
        <SidebarBottomLinks />
      </List>
      {openAlert && <UpgradeAlert onClose={() => setOpenAlert(false)} />}
    </Card>
  );
}

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        {isDrawerOpen ? <XMarkIcon className="h-8 w-8 stroke-2" /> : <Bars3Icon className="h-8 w-8 stroke-2" />}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Card color="transparent" shadow={false} className="h-[calc(100vh-2rem)] w-full p-4">
          <div className="mb-2 flex items-center gap-4 p-4">
            <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
            <Typography variant="h5" color="blue-gray">Sidebar</Typography>
          </div>
          <div className="p-2">
            <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
          </div>
          <List>
            <SidebarAccordionContent open={open} handleOpen={handleOpen} />
            <SidebarBottomLinks />
          </List>
          {openAlert && <UpgradeAlert onClose={() => setOpenAlert(false)} />}
        </Card>
      </Drawer>
    </>
  );
}
