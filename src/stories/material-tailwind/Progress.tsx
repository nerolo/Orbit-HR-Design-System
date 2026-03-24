import { Progress, Typography } from "@material-tailwind/react";

export function ProgressDefault() {
  return <Progress value={50} />;
}

export function ProgressVariants() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={50} variant="filled" />
      <Progress value={50} variant="gradient" />
    </div>
  );
}

export function ProgressSizes() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={25} size="sm" />
      <Progress value={50} size="md" />
      <Progress value={75} size="lg" />
    </div>
  );
}

export function ProgressColors() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={50} color="blue" />
      <Progress value={50} color="red" />
      <Progress value={50} color="green" />
      <Progress value={50} color="amber" />
      <Progress value={50} color="teal" />
      <Progress value={50} color="indigo" />
      <Progress value={50} color="purple" />
      <Progress value={50} color="pink" />
    </div>
  );
}

export function ProgressLabel() {
  return <Progress value={50} label="Completed" />;
}

export function ProgressSizesLabel() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={25} size="sm" label="Small" />
      <Progress value={50} size="md" label="Medium" />
      <Progress value={75} size="lg" label="Large" />
    </div>
  );
}

export function ProgressLabelOutside() {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">Completed</Typography>
        <Typography color="blue-gray" variant="h6">50%</Typography>
      </div>
      <Progress value={50} />
    </div>
  );
}

export function ProgressCustomStyles() {
  return <Progress value={50} size="lg" className="border border-gray-900/10 bg-gray-900/5 p-1" />;
}
