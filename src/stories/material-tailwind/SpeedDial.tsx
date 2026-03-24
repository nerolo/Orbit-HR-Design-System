import React from "react";
import {
  SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction,
  IconButton, Typography,
} from "@material-tailwind/react";
import {
  PlusIcon, HomeIcon, CogIcon, EnvelopeOpenIcon, EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";

export function DefaultSpeedDial() {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction><HomeIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><CogIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><Square3Stack3DIcon className="h-5 w-5" /></SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export function SpeedDialPlacement() {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial placement="top">
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction><HomeIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><CogIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><Square3Stack3DIcon className="h-5 w-5" /></SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
      <div className="absolute bottom-0 left-0">
        <SpeedDial placement="right">
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row">
            <SpeedDialAction><HomeIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><CogIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><Square3Stack3DIcon className="h-5 w-5" /></SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
      <div className="absolute top-0 left-0">
        <SpeedDial placement="bottom">
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction><HomeIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><CogIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><Square3Stack3DIcon className="h-5 w-5" /></SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
      <div className="absolute top-0 right-0">
        <SpeedDial placement="left">
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row">
            <SpeedDialAction><HomeIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><CogIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><Square3Stack3DIcon className="h-5 w-5" /></SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export function SpeedDialCustomIcon() {
  return (
    <div className="relative w-full h-80">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <EnvelopeOpenIcon className="hidden h-5 w-5 group-hover:block" />
              <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction><HomeIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><CogIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><Square3Stack3DIcon className="h-5 w-5" /></SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export function ControlledSpeedDial() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial open={open} handler={setOpen}>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction><HomeIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><CogIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction><Square3Stack3DIcon className="h-5 w-5" /></SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export function SpeedDialWithTextInside() {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="h-16 w-16">
              <HomeIcon className="h-5 w-5" />
              <Typography color="blue-gray" className="text-xs font-normal">Home</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="h-16 w-16">
              <CogIcon className="h-5 w-5" />
              <Typography color="blue-gray" className="text-xs font-normal">Settings</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="h-16 w-16">
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography color="blue-gray" className="text-xs font-normal">Pages</Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export function SpeedDialWithTextOutside() {
  const labelProps = {
    variant: "small" as const,
    color: "blue-gray" as const,
    className: "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative">
              <HomeIcon className="h-5 w-5" />
              <Typography {...labelProps}>Home</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative">
              <CogIcon className="h-5 w-5" />
              <Typography {...labelProps}>Settings</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative">
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Pages</Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

export function CustomSpeedDial() {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton color="white" size="lg" className="rounded-full border border-blue-gray-50 shadow-xl">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="rounded-full border border-blue-gray-50 bg-white shadow-xl shadow-black/10">
            <SpeedDialAction className="bg-blue-gray-50"><HomeIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50"><CogIcon className="h-5 w-5" /></SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50"><Square3Stack3DIcon className="h-5 w-5" /></SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
