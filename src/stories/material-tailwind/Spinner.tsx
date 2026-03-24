import { Spinner } from "@material-tailwind/react";

export function DefaultSpinner() {
  return <Spinner />;
}

export function SpinnerSizes() {
  return (
    <div className="flex items-end gap-8">
      <Spinner className="h-4 w-4" />
      <Spinner className="h-6 w-6" />
      <Spinner className="h-8 w-8" />
      <Spinner className="h-10 w-10" />
      <Spinner className="h-12 w-12" />
    </div>
  );
}

export function SpinnerColors() {
  return (
    <div className="flex gap-8">
      <Spinner color="blue" />
      <Spinner color="red" />
      <Spinner color="green" />
      <Spinner color="amber" />
      <Spinner color="teal" />
      <Spinner color="indigo" />
      <Spinner color="purple" />
      <Spinner color="pink" />
    </div>
  );
}

export function CustomSpinner() {
  return <Spinner className="h-16 w-16 text-gray-900/50" />;
}
