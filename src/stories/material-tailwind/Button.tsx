import { Button } from "@material-tailwind/react";

export function ButtonDefault() {
  return <Button>Button</Button>;
}

export function ButtonVariants() {
  return (
    <div className="flex w-max gap-4">
      <Button variant="filled">filled</Button>
      <Button variant="gradient">gradient</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
    </div>
  );
}

export function ButtonSizes() {
  return (
    <div className="flex w-max items-end gap-4">
      <Button size="sm">small</Button>
      <Button size="md">medium</Button>
      <Button size="lg">large</Button>
    </div>
  );
}

export function ButtonColors() {
  return (
    <div className="flex w-max gap-4">
      <Button color="blue">color blue</Button>
      <Button color="red">color red</Button>
      <Button color="green">color green</Button>
      <Button color="amber">color amber</Button>
    </div>
  );
}

export function ButtonLoading() {
  return (
    <div className="flex items-center gap-4">
      <Button loading={true}>Loading</Button>
      <Button variant="outlined" loading={true}>Loading</Button>
      <Button variant="text" loading={true}>Loading</Button>
    </div>
  );
}

export function BlockLevelButton() {
  return <Button fullWidth>block level button</Button>;
}

export function ButtonRounded() {
  return (
    <div className="flex items-center gap-4">
      <Button className="rounded-full">Filled</Button>
      <Button variant="gradient" className="rounded-full">Gradient</Button>
      <Button variant="outlined" className="rounded-full">Outlined</Button>
      <Button variant="text" className="rounded-full">Text</Button>
    </div>
  );
}

export function ButtonWithIcon() {
  return (
    <div className="flex items-center gap-4">
      <Button className="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
        Add to Bookmark
      </Button>
    </div>
  );
}

export function ButtonRippleEffect() {
  return (
    <div className="flex w-max gap-4">
      <Button ripple={true}>Ripple Effect On</Button>
      <Button ripple={false}>Ripple Effect Off</Button>
    </div>
  );
}
