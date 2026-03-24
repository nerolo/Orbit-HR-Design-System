import React from "react";
import { Button, IconButton, Typography, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function DefaultPagination() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: number) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  } as const);

  const next = () => { if (active !== 5) setActive(active + 1); };
  const prev = () => { if (active !== 1) setActive(active - 1); };

  return (
    <div className="flex items-center gap-4">
      <Button variant="text" className="flex items-center gap-2" onClick={prev} disabled={active === 1}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <IconButton key={n} {...getItemProps(n)}>{n}</IconButton>
        ))}
      </div>
      <Button variant="text" className="flex items-center gap-2" onClick={next} disabled={active === 5}>
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function CircularPagination() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: number) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  } as const);

  const next = () => { if (active !== 5) setActive(active + 1); };
  const prev = () => { if (active !== 1) setActive(active - 1); };

  return (
    <div className="flex items-center gap-4">
      <Button variant="text" className="flex items-center gap-2 rounded-full" onClick={prev} disabled={active === 1}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <IconButton key={n} {...getItemProps(n)}>{n}</IconButton>
        ))}
      </div>
      <Button variant="text" className="flex items-center gap-2 rounded-full" onClick={next} disabled={active === 5}>
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function SimplePagination() {
  const [active, setActive] = React.useState(1);

  const next = () => { if (active !== 10) setActive(active + 1); };
  const prev = () => { if (active !== 1) setActive(active - 1); };

  return (
    <div className="flex items-center gap-8">
      <IconButton size="sm" variant="outlined" onClick={prev} disabled={active === 1}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of <strong className="text-gray-900">10</strong>
      </Typography>
      <IconButton size="sm" variant="outlined" onClick={next} disabled={active === 10}>
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}

export function PaginationGroup() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: number) => ({
    className: active === index ? "bg-gray-100 text-gray-900" : "",
    onClick: () => setActive(index),
  });

  const next = () => { if (active !== 5) setActive(active + 1); };
  const prev = () => { if (active !== 1) setActive(active - 1); };

  return (
    <ButtonGroup variant="outlined">
      <IconButton onClick={prev}><ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /></IconButton>
      {[1, 2, 3, 4, 5].map((n) => (
        <IconButton key={n} {...getItemProps(n)}>{n}</IconButton>
      ))}
      <IconButton onClick={next}><ArrowRightIcon strokeWidth={2} className="h-4 w-4" /></IconButton>
    </ButtonGroup>
  );
}
