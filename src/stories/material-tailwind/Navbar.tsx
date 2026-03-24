import React from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, Input } from "@material-tailwind/react";

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseNavIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const NavLinks = () => (
  <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {["Pages", "Account", "Blocks", "Docs"].map((item) => (
      <Typography key={item} as="li" variant="small" color="blue-gray" className="flex items-center gap-x-2 p-1 font-medium">
        <a href="#" className="flex items-center">{item}</a>
      </Typography>
    ))}
  </ul>
);

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handler = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">Material Tailwind</Typography>
        <div className="hidden lg:block"><NavLinks /></div>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block"><span>Log In</span></Button>
          <Button variant="gradient" size="sm" className="hidden lg:inline-block"><span>Sign in</span></Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <CloseNavIcon /> : <HamburgerIcon />}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <NavLinks />
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm"><span>Log In</span></Button>
            <Button fullWidth variant="gradient" size="sm"><span>Sign in</span></Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handler = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">Material Tailwind</Typography>
        <div className="hidden lg:block"><NavLinks /></div>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{ className: "min-w-[288px]" }}
              className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
            <Button size="sm" className="!absolute right-1 top-1">Search</Button>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <CloseNavIcon /> : <HamburgerIcon />}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <NavLinks />
        </div>
      </MobileNav>
    </Navbar>
  );
}
