import { Radio, Typography, Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { HeartIcon, CheckIcon } from "@heroicons/react/24/solid";

export function RadioDefault() {
  return (
    <div className="flex gap-10">
      <Radio name="type" label="HTML" />
      <Radio name="type" label="React" defaultChecked />
    </div>
  );
}

export function RadioColors() {
  return (
    <div className="flex w-max gap-4">
      <Radio name="color" />
      <Radio name="color" color="gray" defaultChecked />
      <Radio name="color" color="blue" />
      <Radio name="color" color="green" />
      <Radio name="color" color="red" />
      <Radio name="color" color="amber" />
      <Radio name="color" disabled color="purple" />
    </div>
  );
}

export function RadioCustomIcon() {
  return (
    <>
      <Radio name="type" label="React" icon={<HeartIcon className="h-3 w-3" />} />
      <Radio name="type" label="React" icon={<HeartIcon className="h-3 w-3" />} defaultChecked />
    </>
  );
}

export function RadioRippleEffect() {
  return (
    <div className="flex gap-10">
      <Radio name="type" label="Ripple Effect On" ripple={true} />
      <Radio name="type" label="Ripple Effect Off" ripple={false} />
    </div>
  );
}

export function RadioDisabled() {
  return (
    <div className="flex gap-10">
      <Radio name="type" label="HTML" disabled />
      <Radio name="type" label="React" disabled defaultChecked />
    </div>
  );
}

export function RadioWithLink() {
  return (
    <div className="flex flex-col gap-2">
      <Radio
        name="terms"
        label={
          <Typography color="blue-gray" className="flex font-medium">
            I agree with the&nbsp;
            <Typography as="a" href="#" color="blue" className="font-medium transition-colors hover:text-blue-700">
              terms and conditions
            </Typography>
            .
          </Typography>
        }
      />
      <Radio
        name="terms"
        label={
          <Typography color="blue-gray" className="flex font-medium">
            I agree with the&nbsp;
            <Typography as="a" href="#" color="blue" className="font-medium transition-colors hover:text-blue-700">
              terms and conditions
            </Typography>
            .
          </Typography>
        }
      />
    </div>
  );
}

export function RadioVerticalList() {
  return (
    <Card>
      <List>
        <ListItem className="p-0">
          <label className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Radio name="vertical-list" id="vertical-list-react" ripple={false} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">React.js</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Radio name="vertical-list" id="vertical-list-vue" ripple={false} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Vue.js</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Radio name="vertical-list" id="vertical-list-svelte" ripple={false} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Svelte.js</Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

export function RadioHorizontalList() {
  return (
    <Card className="w-full max-w-[24rem]">
      <List className="flex-row">
        <ListItem className="p-0">
          <label className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Radio name="horizontal-list" id="horizontal-list-react" ripple={false} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">React.js</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Radio name="horizontal-list" id="horizontal-list-vue" ripple={false} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Vue.js</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex w-full cursor-pointer items-center px-3 py-2">
            <ListItemPrefix className="mr-3">
              <Radio name="horizontal-list" id="horizontal-list-svelte" ripple={false} />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Svelte.js</Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

export function RadioCustomStyles() {
  return (
    <div className="flex gap-10">
      <Radio name="type" ripple={false} icon={<CheckIcon className="h-3 w-3" />} className="border-gray-900/10" />
      <Radio name="type" defaultChecked ripple={false} icon={<CheckIcon className="h-3 w-3" />} />
    </div>
  );
}
