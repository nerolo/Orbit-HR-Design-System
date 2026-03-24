import {
  Checkbox, Typography, Card, List, ListItem, ListItemPrefix,
} from "@material-tailwind/react";

export function CheckboxDefault() {
  return <Checkbox defaultChecked />;
}

export function CheckboxColors() {
  return (
    <div className="flex w-max gap-4">
      <Checkbox color="blue" defaultChecked />
      <Checkbox color="red" defaultChecked />
      <Checkbox color="green" defaultChecked />
      <Checkbox color="amber" defaultChecked />
      <Checkbox color="teal" defaultChecked />
      <Checkbox color="indigo" defaultChecked />
      <Checkbox color="purple" defaultChecked />
      <Checkbox color="pink" defaultChecked />
    </div>
  );
}

export function CheckboxLabel() {
  return <Checkbox label="Remember Me" />;
}

export function CheckboxCustomIcon() {
  return (
    <Checkbox
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      }
      defaultChecked
    />
  );
}

export function CheckboxRippleEffect() {
  return (
    <>
      <Checkbox id="ripple-on" label="Ripple Effect On" ripple={true} />
      <Checkbox id="ripple-off" label="Ripple Effect Off" ripple={false} />
    </>
  );
}

export function DisabledCheckbox() {
  return <Checkbox label="Remember Me" disabled={true} />;
}

export function CheckboxWithLink() {
  return (
    <Checkbox
      label={
        <Typography color="blue-gray" className="flex font-medium">
          I agree with the
          <Typography
            as="a"
            href="#"
            color="blue"
            className="font-medium transition-colors hover:text-blue-700"
          >
            &nbsp;terms and conditions
          </Typography>
          .
        </Typography>
      }
    />
  );
}

export function CheckboxWithDescription() {
  return (
    <Checkbox
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

export function CheckboxVerticalListGroup() {
  return (
    <Card>
      <List>
        <ListItem className="p-0">
          <label htmlFor="vertical-list-react" className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Checkbox id="vertical-list-react" ripple={false} className="hover:before:opacity-0" containerProps={{ className: "p-0" }} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">React.js</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label htmlFor="vertical-list-vue" className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Checkbox id="vertical-list-vue" ripple={false} className="hover:before:opacity-0" containerProps={{ className: "p-0" }} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Vue.js</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label htmlFor="vertical-list-svelte" className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Checkbox id="vertical-list-svelte" ripple={false} className="hover:before:opacity-0" containerProps={{ className: "p-0" }} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Svelte.js</Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

export function CheckboxHorizontalListGroup() {
  return (
    <Card className="w-full max-w-[24rem]">
      <List className="flex-row">
        <ListItem className="p-0">
          <label htmlFor="horizontal-list-react" className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Checkbox id="horizontal-list-react" ripple={false} className="hover:before:opacity-0" containerProps={{ className: "p-0" }} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">React.js</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label htmlFor="horizontal-list-vue" className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Checkbox id="horizontal-list-vue" ripple={false} className="hover:before:opacity-0" containerProps={{ className: "p-0" }} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Vue.js</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label htmlFor="horizontal-list-svelte" className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Checkbox id="horizontal-list-svelte" ripple={false} className="hover:before:opacity-0" containerProps={{ className: "p-0" }} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Svelte.js</Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

export function CheckboxCustomStyles() {
  return (
    <Checkbox
      defaultChecked
      ripple={false}
      className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
    />
  );
}
