import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button, Input, Checkbox, Avatar, Typography, Card, IconButton } from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler><Button>Menu</Button></MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}

export function NestedMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <Menu>
      <MenuHandler><Button>Menu</Button></MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <Menu placement="right-start" open={openMenu} handler={setOpenMenu} allowHover offset={15}>
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Nested Item
              <ChevronUpIcon strokeWidth={2.5} className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-90" : ""}`} />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Nested Item 1</MenuItem>
            <MenuItem>Nested Item 2</MenuItem>
            <MenuItem>Nested Item 3</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}

export function MenuCustomAnimation() {
  return (
    <Menu animate={{ mount: { y: 0 }, unmount: { y: 25 } }}>
      <MenuHandler><Button>Menu</Button></MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}

const menuItems = [
  { title: "@material-tailwind/html", description: "Learn how to use @material-tailwind/html, packed with rich components and widgets." },
  { title: "@material-tailwind/react", description: "Learn how to use @material-tailwind/react, packed with rich components for React." },
  { title: "Material Tailwind PRO", description: "A complete set of UI Elements for building faster websites in less time." },
];

export function MenuCustomList() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button variant="text" className="flex items-center gap-3 text-base font-normal capitalize tracking-normal">
          Technology{" "}
          <ChevronDownIcon strokeWidth={2.5} className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`} />
        </Button>
      </MenuHandler>
      <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
        <Card color="gray" shadow={false} className="col-span-3 flex h-full w-full items-center justify-center rounded-2xl p-4">
          <CursorArrowRaysIcon strokeWidth={1} className="h-10 w-10" />
          <Typography className="mt-5 text-center" variant="h5">Material Tailwind PRO</Typography>
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ title, description }) => (
            <a href="#" key={title}>
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">{title}</Typography>
                <Typography variant="small" color="gray" className="font-normal">{description}</Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}

export function MenuDivider() {
  return (
    <Menu>
      <MenuHandler><Button>Menu</Button></MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
        <hr className="my-3" />
        <MenuItem>Menu Item 4</MenuItem>
      </MenuList>
    </Menu>
  );
}

export function MenuWithCheckbox() {
  return (
    <Menu dismiss={{ itemPress: false }}>
      <MenuHandler><Button>Menu</Button></MenuHandler>
      <MenuList>
        {[1, 2, 3].map((i) => (
          <MenuItem key={i} className="p-0">
            <label htmlFor={`item-${i}`} className="flex cursor-pointer items-center gap-2 p-2">
              <Checkbox ripple={false} id={`item-${i}`} containerProps={{ className: "p-0" }} className="hover:before:content-none" />
              Menu Item {i}
            </label>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export function MenuWithSearchInput() {
  return (
    <Menu dismiss={{ itemPress: false }}>
      <MenuHandler><Button>Menu</Button></MenuHandler>
      <MenuList>
        <Input label="Search" containerProps={{ className: "mb-4" }} />
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}

export function NotificationsMenu() {
  return (
    <Menu>
      <MenuHandler>
        <IconButton variant="text">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
          </svg>
        </IconButton>
      </MenuHandler>
      <MenuList className="flex flex-col gap-2">
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <Avatar variant="circular" alt="tania andrew" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80" />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-semibold">Tania send you a message</Typography>
            <Typography className="text-sm font-medium text-blue-gray-500">13 minutes ago</Typography>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
