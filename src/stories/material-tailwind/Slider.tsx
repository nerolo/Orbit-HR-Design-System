import { Slider } from "@material-tailwind/react";

export function DefaultSlider() {
  return (
    <div className="w-96">
      <Slider defaultValue={50} />
    </div>
  );
}

export function SliderSizes() {
  return (
    <div className="flex w-96 flex-col gap-8">
      <Slider size="sm" defaultValue={50} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={50} />
    </div>
  );
}

export function SliderColors() {
  return (
    <div className="flex w-96 flex-col gap-8">
      <Slider color="blue" defaultValue={50} />
      <Slider color="red" defaultValue={50} />
      <Slider color="green" defaultValue={50} />
      <Slider color="amber" defaultValue={50} />
    </div>
  );
}

export function SliderCustomStyles() {
  return (
    <div className="w-96">
      <Slider
        defaultValue={50}
        className="text-[#2ec947]"
        barClassName="rounded-none bg-[#2ec946]"
        thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
        trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#2ec946]/10 border border-[#2ec946]/20"
      />
    </div>
  );
}
