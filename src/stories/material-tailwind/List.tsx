import React from "react";
import { List, ListItem, ListItemPrefix, ListItemSuffix, Avatar, Card, Typography, IconButton, Chip } from "@material-tailwind/react";

export function ListDefault() {
  return (
    <Card className="w-96">
      <List>
        <ListItem>Inbox</ListItem>
        <ListItem>Trash</ListItem>
        <ListItem>Settings</ListItem>
      </List>
    </Card>
  );
}

export function ListWithAvatar() {
  return (
    <Card className="w-96">
      <List>
        <ListItem>
          <ListItemPrefix><Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" /></ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">Tania Andrew</Typography>
            <Typography variant="small" color="gray" className="font-normal">Software Engineer @ Material Tailwind</Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix><Avatar variant="circular" alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg" /></ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">Alexander</Typography>
            <Typography variant="small" color="gray" className="font-normal">Backend Developer @ Material Tailwind</Typography>
          </div>
        </ListItem>
      </List>
    </Card>
  );
}

export function ListWithSelectedItem() {
  const [selected, setSelected] = React.useState(1);
  return (
    <Card className="w-96">
      <List>
        <ListItem selected={selected === 1} onClick={() => setSelected(1)}>Inbox</ListItem>
        <ListItem selected={selected === 2} onClick={() => setSelected(2)}>Trash</ListItem>
        <ListItem selected={selected === 3} onClick={() => setSelected(3)}>Settings</ListItem>
      </List>
    </Card>
  );
}

export function ListWithDisabledItem() {
  return (
    <Card className="w-96">
      <List>
        <ListItem disabled={true}>Inbox</ListItem>
        <ListItem>Trash</ListItem>
        <ListItem>Settings</ListItem>
      </List>
    </Card>
  );
}

export function ListWithLink() {
  return (
    <Card className="w-96">
      <List>
        <a href="#" className="text-initial"><ListItem>Inbox</ListItem></a>
        <a href="#" className="text-initial"><ListItem>Trash</ListItem></a>
        <a href="#" className="text-initial"><ListItem>Settings</ListItem></a>
      </List>
    </Card>
  );
}

export function ListWithBadge() {
  return (
    <Card className="w-96">
      <List>
        <ListItem>Inbox<ListItemSuffix><Chip value="14" variant="ghost" size="sm" className="rounded-full" /></ListItemSuffix></ListItem>
        <ListItem>Spam<ListItemSuffix><Chip value="2" variant="ghost" size="sm" className="rounded-full" /></ListItemSuffix></ListItem>
        <ListItem>Trash<ListItemSuffix><Chip value="40" variant="ghost" size="sm" className="rounded-full" /></ListItemSuffix></ListItem>
      </List>
    </Card>
  );
}
