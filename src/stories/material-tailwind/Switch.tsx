import { Switch, Typography } from "@material-tailwind/react";

export function SwitchDefault() {
  return <Switch />;
}

export function CheckedSwitch() {
  return <Switch defaultChecked />;
}

export function SwitchColors() {
  return (
    <div className="flex w-max gap-4">
      <Switch color="blue" defaultChecked />
      <Switch color="red" defaultChecked />
      <Switch color="green" defaultChecked />
      <Switch color="amber" defaultChecked />
      <Switch color="teal" defaultChecked />
      <Switch color="indigo" defaultChecked />
      <Switch color="purple" defaultChecked />
      <Switch color="pink" defaultChecked />
    </div>
  );
}

export function SwitchLabel() {
  return <Switch label="Automatic Update" />;
}

export function SwitchRippleEffect() {
  return (
    <div className="space-x-8">
      <Switch label="Ripple Effect On" ripple={true} />
      <Switch label="Ripple Effect Off" ripple={false} />
    </div>
  );
}

export function SwitchDisabled() {
  return <Switch disabled={true} />;
}

export function SwitchWithDescription() {
  return (
    <Switch
      label={
        <div>
          <Typography color="blue-gray" className="font-medium">
            Remember Me
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            You'll be able to login without password for 24 hours.
          </Typography>
        </div>
      }
      containerProps={{ className: "-mt-5" }}
    />
  );
}

export function SwitchCustomStyles() {
  return (
    <Switch
      id="custom-switch-component"
      ripple={false}
      className="h-full w-full checked:bg-[#2ec946]"
      containerProps={{ className: "w-11 h-6" }}
      circleProps={{ className: "before:hidden left-0.5 border-none" }}
    />
  );
}
