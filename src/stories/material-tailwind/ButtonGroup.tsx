import { ButtonGroup, Button } from "@material-tailwind/react";

export function ButtonGroupDefault() {
  return (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}

export function ButtonGroupVariants() {
  return (
    <div className="flex w-max flex-col gap-4">
      <ButtonGroup><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup variant="gradient"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup variant="outlined"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup variant="text"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
    </div>
  );
}

export function ButtonGroupSizes() {
  return (
    <div className="flex w-max flex-col gap-4">
      <ButtonGroup size="sm"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup size="md"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup size="lg"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
    </div>
  );
}

export function ButtonGroupColors() {
  return (
    <div className="flex w-max flex-col gap-4">
      <ButtonGroup color="blue"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup color="red"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup color="green"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup color="amber"><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
    </div>
  );
}

export function BlockLevelButtonGroup() {
  return (
    <ButtonGroup fullWidth>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}

export function ButtonGroupRippleEffect() {
  return (
    <div className="flex w-max flex-col gap-4">
      <ButtonGroup ripple={true}><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
      <ButtonGroup ripple={false}><Button>One</Button><Button>Two</Button><Button>Three</Button></ButtonGroup>
    </div>
  );
}

export function ButtonGroupCustomStyles() {
  return (
    <ButtonGroup className="gap-1 bg-blue-500/25 p-1">
      <Button className="rounded-none">One</Button>
      <Button className="rounded-none">Two</Button>
      <Button className="rounded-none">Three</Button>
    </ButtonGroup>
  );
}
